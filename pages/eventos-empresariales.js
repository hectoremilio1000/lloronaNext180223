import React from 'react';
import LandingEvento from '../components/LandingEvento';

const config = {
  slug: 'eventos-empresariales',
  campaign: 'empresarial',
  imagenes: [
    '/img/ambiente/interior-techo-raices.webp',
    '/img/platos/plato-fuerte-guacamole-martini-mazapan.webp',
  ],
  seo: {
    title: 'Eventos Empresariales en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'Cenas de empresa, fin de año y after office en Cantina La Llorona, Roma–Condesa. Menú de 3 tiempos para grupos, coctelería de autor y música en vivo. Cotiza por WhatsApp.',
    ogTitle: 'Eventos Empresariales en Roma–Condesa | Cantina La Llorona',
    ogDescription:
      'Cenas de empresa y fin de año con menú para grupos, coctelería de autor y música en vivo. Cotiza tu evento por WhatsApp.',
    ogImage: '/img/ambiente/terraza-noche.webp',
  },
  es: {
    h1: '🥂 Eventos Empresariales',
    subtitulo: 'Cenas de empresa, fin de año y after office en Roma–Condesa',
    fotos: [
      {
        texto: 'Un espacio único para tu equipo',
        alt: 'Interior de Cantina La Llorona con techo de raíces',
      },
      {
        texto: 'Cocina mexicana y coctelería de autor',
        alt: 'Plato fuerte y martini de mazapán en Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Organiza tu <b>cena de empresa</b>, <b>cierre de año</b> o{' '}
        <b>after office</b> en Cantina La Llorona. Tu equipo disfruta de{' '}
        <b>cocina mexicana</b>, <b>mixología de autor</b> y mezcales
        artesanales de Oaxaca con <b>música en vivo</b>, y tú solo te encargas
        de invitar.
      </>
    ),
    beneficiosTitulo: '🏢 Para grupos de empresa',
    beneficios: [
      'Menú de 3 tiempos para grupos de 12 personas en adelante',
      'Paquetes a la medida de tu presupuesto y número de invitados',
      'Coctelería de autor y mezcales artesanales',
      'Música en vivo y el mejor ambiente de la Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, CDMX • Cotiza sin compromiso',
    reservaTitulo: '¿Grupo pequeño? Reserva tu mesa directo',
    mensaje: [
      'Hola, quiero cotizar un evento empresarial en Cantina La Llorona (Roma–Condesa).',
      'Empresa: __  Fecha: __  Personas: __',
      '[Fuente: landing-eventos-empresariales]',
    ].join('\n'),
    marquee1: 'EVENTOS EMPRESARIALES',
    marquee2: 'CENAS DE FIN DE AÑO',
  },
  en: {
    h1: '🥂 Corporate Events',
    subtitulo: 'Company dinners, year-end parties and after office in Roma–Condesa',
    fotos: [
      {
        texto: 'A unique space for your team',
        alt: 'Interior of Cantina La Llorona with its tree-root ceiling',
      },
      {
        texto: 'Mexican cuisine and signature cocktails',
        alt: 'Main course and marzipan martini at Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Host your <b>company dinner</b>, <b>year-end party</b> or{' '}
        <b>after office</b> at Cantina La Llorona. Your team enjoys{' '}
        <b>Mexican cuisine</b>, <b>signature mixology</b> and artisanal
        mezcals from Oaxaca with <b>live music</b> — you just send the invite.
      </>
    ),
    beneficiosTitulo: '🏢 For company groups',
    beneficios: [
      '3-course menu for groups of 12 people or more',
      'Packages tailored to your budget and number of guests',
      'Signature cocktails and artisanal mezcals',
      'Live music and the best atmosphere in Roma–Condesa',
    ],
    ubicacion: '📍 Cantina La Llorona • Roma–Condesa, Mexico City • Free quote',
    reservaTitulo: 'Small group? Book your table directly',
    mensaje: [
      'Hi, I would like a quote for a corporate event at Cantina La Llorona (Roma–Condesa).',
      'Company: __  Date: __  Guests: __',
      '[Source: landing-eventos-empresariales]',
    ].join('\n'),
    marquee1: 'CORPORATE EVENTS',
    marquee2: 'YEAR-END PARTIES',
  },
};

export default function EventosEmpresariales() {
  return <LandingEvento config={config} />;
}
