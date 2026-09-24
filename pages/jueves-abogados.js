import React from 'react';
import LandingAbogados from '../components/LandingAbogados';

const config = {
  slug: 'jueves-abogados',
  campaign: 'abogados_jueves',
  dia: 'Jueves',
  diaEn: 'Thursdays',
  cartel: '/img/abogados/jueves-de-abogados.webp',
  seo: {
    title: 'Jueves de Abogados en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'Todos los jueves son de abogados en Cantina La Llorona, Roma–Condesa. Presenta tu cédula profesional y te invitamos el mezcal de bienvenida. Grupo en vivo. Reserva tu mesa.',
    ogTitle: 'Jueves de Abogados | Cantina La Llorona',
    ogDescription:
      'Presenta tu cédula y te invitamos el mezcal de bienvenida. Grupo en vivo todos los jueves en Roma–Condesa.',
  },
};

export default function JuevesAbogados() {
  return <LandingAbogados config={config} />;
}
