import React from 'react';
import LandingEvento from '../components/LandingEvento';

const config = {
  slug: 'despedida-de-soltera',
  campaign: 'despedida',
  imagenes: [
    '/img/cumple/amigas-festejo-bar.webp',
    '/img/mixologia/amigas-martini-rosa.webp',
  ],
  seo: {
    title: 'Despedida de Soltera en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'Festeja tu despedida de soltera en Cantina La Llorona, Roma–Condesa: coctelería de autor, mezcales artesanales, música en vivo y mesa decorada. Cotiza por WhatsApp.',
    ogTitle: 'Despedida de Soltera en Roma–Condesa | Cantina La Llorona',
    ogDescription:
      'Cocteles de autor, mezcal, música en vivo y mesa decorada para tu despedida de soltera. Cotiza por WhatsApp.',
    ogImage: '/img/cumple/amigas-festejo-bar.webp',
  },
  es: {
    h1: '👰 Despedida de Soltera',
    subtitulo: 'La última noche de soltera, con tus amigas en Roma–Condesa',
    fotos: [
      {
        texto: 'Una noche para celebrar con tus amigas',
        alt: 'Amigas festejando una despedida de soltera en Cantina La Llorona',
      },
      {
        texto: 'Cocteles de autor para brindar',
        alt: 'Amigas brindando con martinis rosas en Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Celebra tu <b>despedida de soltera</b> en Cantina La Llorona. Brinda
        con tus amigas con nuestra <b>mixología de autor</b> y mezcales
        artesanales de Oaxaca, disfruta de <b>cocina mexicana para compartir</b>{' '}
        y baila con <b>música en vivo</b> en uno de los lugares más especiales
        de la Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '🎉 Para tu despedida',
    beneficios: [
      'Mesa decorada para el festejo (bajo reserva)',
      'Coctelería de autor y mezcales artesanales',
      'Menús para compartir, con opciones vegetarianas y sin gluten',
      'Música en vivo y el mejor ambiente de la Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, CDMX • Cotiza sin compromiso',
    reservaTitulo: 'Reserva la mesa para tu despedida',
    mensaje: [
      'Hola, quiero cotizar una despedida de soltera en Cantina La Llorona (Roma–Condesa).',
      'Fecha: __  Personas: __  Hora: __',
      '[Fuente: landing-despedida-de-soltera]',
    ].join('\n'),
    marquee1: 'DESPEDIDA DE SOLTERA',
    marquee2: 'NOCHE DE AMIGAS',
  },
  en: {
    h1: '👰 Bachelorette Party',
    subtitulo: 'Your last night as a single woman, with your friends in Roma–Condesa',
    fotos: [
      {
        texto: 'A night to celebrate with your friends',
        alt: 'Friends celebrating a bachelorette party at Cantina La Llorona',
      },
      {
        texto: 'Signature cocktails to toast',
        alt: 'Friends toasting with pink martinis at Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Celebrate your <b>bachelorette party</b> at Cantina La Llorona. Toast
        with your friends with our <b>signature mixology</b> and artisanal
        mezcals from Oaxaca, enjoy <b>Mexican dishes to share</b> and dance to{' '}
        <b>live music</b> in one of the most special spots in Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '🎉 For your bachelorette',
    beneficios: [
      'Decorated table for the celebration (upon reservation)',
      'Signature cocktails and artisanal mezcals',
      'Sharing menus, with vegetarian and gluten-free options',
      'Live music and the best atmosphere in Roma–Condesa',
    ],
    ubicacion: '📍 Cantina La Llorona • Roma–Condesa, Mexico City • Free quote',
    reservaTitulo: 'Book the table for your bachelorette',
    mensaje: [
      'Hi, I would like a quote for a bachelorette party at Cantina La Llorona (Roma–Condesa).',
      'Date: __  Guests: __  Time: __',
      '[Source: landing-despedida-de-soltera]',
    ].join('\n'),
    marquee1: 'BACHELORETTE PARTY',
    marquee2: 'GIRLS NIGHT OUT',
  },
};

export default function DespedidaDeSoltera() {
  return <LandingEvento config={config} />;
}
