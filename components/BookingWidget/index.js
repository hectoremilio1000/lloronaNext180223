import { useEffect, useRef, useState } from 'react';
import { buildBookingWidgetUrl, bookingWidgetOrigin } from '../../lib/bookingWidget';
import { trackReservaCompletada } from '../../lib/reservaConversion';
import { getCurrentAttribution } from '../../lib/tracker';

/* iOS Safari dibuja el teclado ENCIMA de la página (no la achica, como
 * Android) y con un input dentro de un iframe de otro dominio no lo trae a la
 * vista. Solo en iOS se acomoda el iframe a mano mientras el teclado está abierto. */
const esIOS = () =>
  typeof navigator !== 'undefined' &&
  (/iP(hone|ad|od)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

/* Borde inferior del navbar fijo (si lo hay): el iframe debe quedar debajo. */
function bordeInferiorNavbarFijo() {
  let bottom = 0;
  document.querySelectorAll('header, nav, .header-container').forEach((el) => {
    const { position } = getComputedStyle(el);
    if (position !== 'fixed' && position !== 'sticky') return;
    const r = el.getBoundingClientRect();
    if (r.height > 0 && r.top <= 1 && r.bottom > bottom) bottom = r.bottom;
  });
  return bottom;
}

/**
 * Widget de reservas de GrowthSuite incrustado en el sitio.
 *
 * - La URL se arma al montar (client-side) con lead_uid + UTMs para atribuir
 *   la reserva, igual que TrackedCalendly.
 * - El widget avisa su altura (`widget_height`) y el iframe se ajusta: sin
 *   scroll dentro de otro scroll en el celular.
 * - Al completar la reserva (`reservation_completed`) dispara las mismas
 *   conversiones que Calendly, una sola vez por código de reserva.
 */
export default function BookingWidget({
  type,
  source,
  campaignType = 'general',
  minHeight = 640,
  /* 'none' en /reserva-widget: ahí el widget es toda la página y se muestra
   * completo, sin scroll dentro de otro scroll. */
  maxHeight = 'min(720px, 80vh)',
  onComplete,
}) {
  const [src, setSrc] = useState(null);
  const [height, setHeight] = useState(minHeight);
  // Alto disponible sobre el teclado (solo iOS, solo con el teclado abierto).
  const [tecladoMaxHeight, setTecladoMaxHeight] = useState(null);
  const iframeRef = useRef(null);
  const convertidas = useRef(new Set());

  useEffect(() => {
    setSrc(buildBookingWidgetUrl({ type }));
  }, [type]);

  useEffect(() => {
    const origin = bookingWidgetOrigin();

    const onMessage = (e) => {
      if (origin && e.origin !== origin) return;
      if (iframeRef.current && e.source !== iframeRef.current.contentWindow) return;
      const data = e.data || {};
      if (data.source !== 'booking-widget') return;

      if (data.type === 'widget_height' && typeof data.height === 'number') {
        setHeight(Math.max(minHeight, Math.ceil(data.height)));
        return;
      }

      if (data.type === 'reservation_completed' || data.type === 'booking_completed') {
        const code = String(data.confirmationCode || data.code || '');
        const key = code || `${data.type}-${Date.now()}`;
        if (code && convertidas.current.has(code)) return;
        convertidas.current.add(key);
        // Sin `source` explícito, el canal real del visitante (tiktok, google, meta…).
        const canal = source || getCurrentAttribution().channel || 'organic';
        trackReservaCompletada({ source: canal, campaignType, transactionId: code || undefined });
        if (typeof onComplete === 'function') onComplete({ confirmationCode: code || null });
      }
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [source, campaignType, minHeight, onComplete]);

  /* Teclado de iOS abierto con el foco dentro del iframe: el iframe se limita
   * al espacio visible y se sube justo debajo del navbar; así el scroll interno
   * de Safari trabaja sobre una zona que sí se ve completa. */
  useEffect(() => {
    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    if (!vv || !esIOS()) return undefined;

    let timer;
    const acomodar = () => {
      const iframe = iframeRef.current;
      const tecladoAbierto =
        iframe && document.activeElement === iframe && window.innerHeight - vv.height > 120;
      if (!tecladoAbierto) {
        setTecladoMaxHeight(null);
        return;
      }
      const navbar = Math.max(0, bordeInferiorNavbarFijo() - vv.offsetTop);
      setTecladoMaxHeight(Math.max(240, Math.floor(vv.height - navbar - 8)));
      const top = iframe.getBoundingClientRect().top;
      window.scrollBy({ top: top - vv.offsetTop - navbar, behavior: 'smooth' });
    };
    const onViewport = () => {
      clearTimeout(timer);
      timer = setTimeout(acomodar, 120);
    };

    vv.addEventListener('resize', onViewport);
    return () => {
      clearTimeout(timer);
      vv.removeEventListener('resize', onViewport);
    };
  }, []);

  if (!src) {
    return <div style={{ minHeight }} aria-busy="true" />;
  }

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Reserva tu mesa en La Llorona Cantina"
      /* Tope de altura: en columnas angostas el widget mide 1,700px+ y había
       * que deslizar una tira blanca. Arriba del tope, el scroll es dentro del
       * iframe (el widget no bloquea su overflow). */
      style={{
        width: '100%',
        height,
        maxHeight: tecladoMaxHeight ?? maxHeight,
        border: 0,
        display: 'block',
        background: 'transparent',
      }}
      allow="clipboard-write"
    />
  );
}
