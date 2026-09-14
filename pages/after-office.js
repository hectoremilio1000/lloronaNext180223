import React from 'react';
import LandingEvento from '../components/LandingEvento';

const config = {
  slug: 'after-office',
  campaign: 'after_office',
  imagenes: [
    '/img/futbol/amigos-brindis-cerveza.webp',
    '/img/salsa/cantante-son-cubano.webp',
  ],
  seo: {
    title: 'After Office y Networking en CDMX (Roma–Condesa) | Cantina La Llorona',
    description:
      'After office y networking en Cantina La Llorona, Roma–Condesa: coctelería de autor, mezcales artesanales, menús para compartir y música en vivo. Reserva o cotiza tu grupo por WhatsApp.',
    ogTitle: 'After Office y Networking en Roma–Condesa | Cantina La Llorona',
    ogDescription:
      'Cocteles, mezcal, botanas para compartir y música en vivo para tu after office o networking. Reserva o cotiza por WhatsApp.',
    ogImage: '/img/futbol/amigos-brindis-cerveza.webp',
  },
  es: {
    h1: '🍻 After Office y Networking',
    subtitulo: 'Termina la semana con tu equipo en Roma–Condesa',
    fotos: [
      {
        texto: 'Brinda con tu equipo',
        alt: 'Amigos brindando con cerveza en Cantina La Llorona',
      },
      {
        texto: 'Música en vivo',
        alt: 'Cantante de son cubano en vivo en Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Organiza tu <b>after office</b> o tu evento de <b>networking</b> en
        Cantina La Llorona. Relájate con tus compañeros o conecta con nuevos
        contactos entre <b>cocteles de autor</b>, mezcales artesanales de
        Oaxaca, <b>platillos para compartir</b> y <b>música en vivo</b>, a
        unos pasos de las oficinas de la Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '💼 Para tu grupo',
    beneficios: [
      'Menús para compartir, con opciones vegetarianas y sin gluten',
      'Coctelería de autor y mezcales artesanales',
      'Paquetes a la medida para grupos',
      'Música en vivo y el mejor ambiente de la Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, CDMX • Reserva o cotiza sin compromiso',
    reservaTitulo: 'Reserva la mesa para tu after office',
    mensaje: [
      'Hola, quiero organizar un after office / networking en Cantina La Llorona (Roma–Condesa).',
      'Empresa o grupo: __  Fecha: __  Personas: __',
      '[Fuente: landing-after-office]',
    ].join('\n'),
    marquee1: 'AFTER OFFICE',
    marquee2: 'NETWORKING',
  },
  en: {
    h1: '🍻 After Office & Networking',
    subtitulo: 'Wrap up the week with your team in Roma–Condesa',
    fotos: [
      {
        texto: 'Toast with your team',
        alt: 'Friends toasting with beer at Cantina La Llorona',
      },
      {
        texto: 'Live music',
        alt: 'Live Cuban son singer at Cantina La Llorona',
      },
    ],
    intro: (
      <>
        Host your <b>after office</b> or <b>networking</b> event at Cantina La
        Llorona. Unwind with your coworkers or meet new contacts over{' '}
        <b>signature cocktails</b>, artisanal mezcals from Oaxaca,{' '}
        <b>dishes to share</b> and <b>live music</b>, just steps away from the
        offices in Roma–Condesa.
      </>
    ),
    beneficiosTitulo: '💼 For your group',
    beneficios: [
      'Sharing menus, with vegetarian and gluten-free options',
      'Signature cocktails and artisanal mezcals',
      'Packages tailored for groups',
      'Live music and the best atmosphere in Roma–Condesa',
    ],
    ubicacion:
      '📍 Cantina La Llorona • Roma–Condesa, Mexico City • Book or get a free quote',
    reservaTitulo: 'Book the table for your after office',
    mensaje: [
      'Hi, I would like to organize an after office / networking event at Cantina La Llorona (Roma–Condesa).',
      'Company or group: __  Date: __  Guests: __',
      '[Source: landing-after-office]',
    ].join('\n'),
    marquee1: 'AFTER OFFICE',
    marquee2: 'NETWORKING',
  },
};

export default function AfterOffice() {
  return <LandingEvento config={config} />;
}
