import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import BookingWidget from '../BookingWidget';
import { buildCalendlyUrl } from '../../lib/tracker';

/* Reservas con el widget de GrowthSuite: la reserva cae directo al POS
 * (Admin, Caja y Comandero). Para regresar TODAS las páginas a Calendly sin
 * tocar código: NEXT_PUBLIC_RESERVAS_CALENDLY=1 y volver a desplegar; cada
 * página vuelve a su evento de Calendly (`calendlyUrl`). */
const USAR_CALENDLY = process.env.NEXT_PUBLIC_RESERVAS_CALENDLY === '1';

function CalendlyRespaldo({ url, styles }) {
  /* El tracker solo funciona client-side: la URL con lead_uid se arma al montar. */
  const [trackedUrl, setTrackedUrl] = useState(url);
  useEffect(() => {
    setTrackedUrl(buildCalendlyUrl(url));
  }, [url]);

  return <InlineWidget url={trackedUrl} styles={styles} />;
}

export default function ReservaEmbed({ calendlyUrl, calendlyStyles, campaignType = 'general' }) {
  if (USAR_CALENDLY && calendlyUrl) {
    return <CalendlyRespaldo url={calendlyUrl} styles={calendlyStyles} />;
  }
  return <BookingWidget campaignType={campaignType} />;
}
