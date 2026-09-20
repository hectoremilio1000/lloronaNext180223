import { useEffect, useRef, useState } from 'react';
import { buildBookingWidgetUrl, bookingWidgetOrigin } from '../../lib/bookingWidget';
import { trackReservaCompletada } from '../../lib/reservaConversion';
import { getCurrentAttribution } from '../../lib/tracker';

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
        maxHeight,
        border: 0,
        display: 'block',
        background: 'transparent',
      }}
      allow="clipboard-write"
    />
  );
}
