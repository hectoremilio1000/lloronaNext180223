import React from 'react';
import Calendario from '../Calendario';

/* Landing en inglés (/date): mismo bloque de reserva que el home. Con
 * NEXT_PUBLIC_RESERVAS_CALENDLY=1 vuelve a su evento propio de Calendly. */
const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona';

function CalendarioIngles({ campaignType = 'general' }) {
  return <Calendario calendlyUrl={CALENDLY_URL} campaignType={campaignType} />;
}

export default CalendarioIngles;
