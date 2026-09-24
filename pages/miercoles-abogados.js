import React from 'react';
import LandingAbogados from '../components/LandingAbogados';

const config = {
  slug: 'miercoles-abogados',
  campaign: 'abogados_miercoles',
  dia: 'Miércoles',
  diaEn: 'Wednesdays',
  cartel: '/img/abogados/miercoles-de-abogados.webp',
  seo: {
    title: 'Miércoles de Abogados en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'Todos los miércoles son de abogados en Cantina La Llorona, Roma–Condesa. Presenta tu cédula profesional y te invitamos el mezcal de bienvenida. Grupo en vivo. Reserva tu mesa.',
    ogTitle: 'Miércoles de Abogados | Cantina La Llorona',
    ogDescription:
      'Presenta tu cédula y te invitamos el mezcal de bienvenida. Grupo en vivo todos los miércoles en Roma–Condesa.',
  },
};

export default function MiercolesAbogados() {
  return <LandingAbogados config={config} />;
}
