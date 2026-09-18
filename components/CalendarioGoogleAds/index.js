import React from 'react';
import Calendario from '../Calendario';

/* Landings de Google Ads (salsa, 15 de septiembre, cumple, familia…): mismo
 * bloque de reserva que el home. Con NEXT_PUBLIC_RESERVAS_CALENDLY=1 vuelven a
 * su evento propio de Calendly. */
const CALENDLY_URL =
  'https://calendly.com/reservaciones-14/googleads-foodie-llorona?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3eeb91';

function CalendarioGoogleAds({ campaignType = 'general' }) {
  return <Calendario calendlyUrl={CALENDLY_URL} campaignType={campaignType} />;
}

export default CalendarioGoogleAds;
