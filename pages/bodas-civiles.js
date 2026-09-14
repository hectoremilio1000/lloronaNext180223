import React from 'react';
import LandingEvento from '../components/LandingEvento';

const config = {
  slug: 'bodas-civiles',
  campaign: 'boda',
  imagenes: [
    '/img/ambiente/entrada-terraza-noche.webp',
    '/img/platos/torre-aguachile-camaron-aguacate.webp',
  ],
  seo: {
    title: 'Bodas Civiles y Recepciones en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'Celebra tu boda civil o recepción en Cantina La Llorona, Roma–Condesa: menú de 3 tiempos para grupos, coctelería de autor, mezcales artesanales y música en vivo. Cotiza por WhatsApp.',
    ogTitle: 'Bodas Civiles en Roma–Condesa | Cantina La Llorona',
    ogDescription:
      'Recepción de boda civil con menú para grupos, cocteles de autor y música en vivo. Cotiza tu evento por WhatsApp.',
    ogImage: '/img/ambiente/entrada-terraza-noche.webp',
  },
  es: {
    h1: '💍 Bodas Civiles',
    subtitulo: 'La celebración de tu boda civil en Roma–Condesa',
    fotos: [
      {
        texto: 'Un lugar con magia para tu boda',
        alt: 'Entrada y terraza de Cantina La Llorona de noche',
      },
      {
        texto: 'Cocina mexicana para tus invitados',
        alt: 'Torre de aguachile de camarón con aguacate en Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Después del registro civil, celebra con los tuyos en Cantina La
        Llorona. Organizamos tu <b>boda civil</b> o <b>recepción</b> con{' '}
        <b>cocina mexicana</b>, <b>mixología de autor</b>, mezcales artesanales
        de Oaxaca y <b>música en vivo</b>, en un espacio único de la
        Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '🥂 Para tu boda',
    beneficios: [
      'Menú de 3 tiempos para grupos de 12 personas en adelante',
      'Paquetes a la medida de tu presupuesto y número de invitados',
      'Coctelería de autor y mezcales artesanales para el brindis',
      'Música en vivo y el mejor ambiente de la Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, CDMX • Cotiza sin compromiso',
    reservaTitulo: '¿Celebración pequeña? Reserva tu mesa directo',
    mensaje: [
      'Hola, quiero cotizar la celebración de una boda civil en Cantina La Llorona (Roma–Condesa).',
      'Fecha: __  Invitados: __  Hora: __',
      '[Fuente: landing-bodas-civiles]',
    ].join('\n'),
    marquee1: 'BODAS CIVILES',
    marquee2: 'RECEPCIONES',
  },
  en: {
    h1: '💍 Civil Weddings',
    subtitulo: 'Your civil wedding celebration in Roma–Condesa',
    fotos: [
      {
        texto: 'A magical place for your wedding',
        alt: 'Entrance and terrace of Cantina La Llorona at night',
      },
      {
        texto: 'Mexican cuisine for your guests',
        alt: 'Shrimp aguachile tower with avocado at Cantina La Llorona',
      },
    ],
    intro: (
      <>
        After the civil ceremony, celebrate with your loved ones at Cantina La
        Llorona. We host your <b>civil wedding</b> or <b>reception</b> with{' '}
        <b>Mexican cuisine</b>, <b>signature mixology</b>, artisanal mezcals
        from Oaxaca and <b>live music</b>, in a unique space in Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '🥂 For your wedding',
    beneficios: [
      '3-course menu for groups of 12 people or more',
      'Packages tailored to your budget and number of guests',
      'Signature cocktails and artisanal mezcals for the toast',
      'Live music and the best atmosphere in Roma–Condesa',
    ],
    ubicacion: '📍 Cantina La Llorona • Roma–Condesa, Mexico City • Free quote',
    reservaTitulo: 'Small celebration? Book your table directly',
    mensaje: [
      'Hi, I would like a quote for a civil wedding celebration at Cantina La Llorona (Roma–Condesa).',
      'Date: __  Guests: __  Time: __',
      '[Source: landing-bodas-civiles]',
    ].join('\n'),
    marquee1: 'CIVIL WEDDINGS',
    marquee2: 'RECEPTIONS',
  },
};

export default function BodasCiviles() {
  return <LandingEvento config={config} />;
}
