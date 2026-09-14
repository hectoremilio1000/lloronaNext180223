import React from 'react';
import LandingEvento from '../components/LandingEvento';

const config = {
  slug: 'aniversarios',
  campaign: 'aniversario',
  imagenes: [
    '/img/cumple/festejo-bengala-terraza.webp',
    '/img/platos/ribeye-pure-cantina-llorona.webp',
  ],
  seo: {
    title: 'Aniversario en CDMX: Cena Romántica en Roma–Condesa | Cantina La Llorona',
    description:
      'Celebra tu aniversario en Cantina La Llorona, Roma–Condesa: cena mexicana, coctelería de autor, mezcales artesanales, música en vivo y mesa decorada. Reserva o cotiza por WhatsApp.',
    ogTitle: 'Celebra tu Aniversario en Roma–Condesa | Cantina La Llorona',
    ogDescription:
      'Cena, cocteles de autor, música en vivo y mesa decorada para celebrar tu aniversario. Reserva o cotiza por WhatsApp.',
    ogImage: '/img/cumple/festejo-bengala-terraza.webp',
  },
  es: {
    h1: '💞 Aniversarios',
    subtitulo: 'Celebra un año más juntos en Roma–Condesa',
    fotos: [
      {
        texto: 'Un brindis para celebrarlo',
        alt: 'Pareja celebrando su aniversario en la terraza de Cantina La Llorona',
      },
      {
        texto: 'Una cena para recordar',
        alt: 'Ribeye con puré en Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Festeja tu <b>aniversario</b> en Cantina La Llorona. Comparte una{' '}
        <b>cena mexicana</b>, brinda con <b>coctelería de autor</b> y mezcales
        artesanales de Oaxaca y déjate llevar por la <b>música en vivo</b> en
        un espacio único de la Roma–Condesa. Ya sea en pareja o con familia y
        amigos, nosotros ponemos el ambiente.
      </>
    ),
    beneficiosTitulo: '🥂 Para tu aniversario',
    beneficios: [
      'Mesa decorada para la ocasión (bajo reserva)',
      'Cocina mexicana y menús para compartir',
      'Coctelería de autor y mezcales artesanales',
      'Música en vivo y el mejor ambiente de la Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, CDMX • Reserva o cotiza sin compromiso',
    reservaTitulo: 'Reserva tu mesa de aniversario',
    mensaje: [
      'Hola, quiero celebrar un aniversario en Cantina La Llorona (Roma–Condesa).',
      'Fecha: __  Personas: __  Hora: __',
      '[Fuente: landing-aniversarios]',
    ].join('\n'),
    marquee1: 'ANIVERSARIOS',
    marquee2: 'UN AÑO MÁS JUNTOS',
  },
  en: {
    h1: '💞 Anniversaries',
    subtitulo: 'Celebrate another year together in Roma–Condesa',
    fotos: [
      {
        texto: 'A toast to celebrate',
        alt: 'Couple celebrating their anniversary on the terrace of Cantina La Llorona',
      },
      {
        texto: 'A dinner to remember',
        alt: 'Ribeye with mashed potatoes at Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Celebrate your <b>anniversary</b> at Cantina La Llorona. Share a{' '}
        <b>Mexican dinner</b>, toast with <b>signature cocktails</b> and
        artisanal mezcals from Oaxaca and enjoy <b>live music</b> in a unique
        space in Roma–Condesa. As a couple or with family and friends, we set
        the mood.
      </>
    ),
    beneficiosTitulo: '🥂 For your anniversary',
    beneficios: [
      'Decorated table for the occasion (upon reservation)',
      'Mexican cuisine and sharing menus',
      'Signature cocktails and artisanal mezcals',
      'Live music and the best atmosphere in Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, Mexico City • Book or get a free quote',
    reservaTitulo: 'Book your anniversary table',
    mensaje: [
      'Hi, I would like to celebrate an anniversary at Cantina La Llorona (Roma–Condesa).',
      'Date: __  Guests: __  Time: __',
      '[Source: landing-aniversarios]',
    ].join('\n'),
    marquee1: 'ANNIVERSARIES',
    marquee2: 'ANOTHER YEAR TOGETHER',
  },
};

export default function Aniversarios() {
  return <LandingEvento config={config} />;
}
