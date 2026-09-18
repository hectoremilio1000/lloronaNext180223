import React from 'react';
import Calendario from '../Calendario';

/* Landings de TikTok: mismo bloque de reserva que el home. Con
 * NEXT_PUBLIC_RESERVAS_CALENDLY=1 vuelve a su evento propio de Calendly. */
const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona-clon';

function CalendarioTiktok({ campaignType = 'general' }) {
  return <Calendario calendlyUrl={CALENDLY_URL} campaignType={campaignType} />;
}

export default CalendarioTiktok;
