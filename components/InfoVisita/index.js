import Link from 'next/link';
import { useAppContext } from '../context/Context';

// Datos de la visita. El horario es el del Perfil de Google de Cantina La
// Llorona (verificado el 2026-11-16). Si cambia allá, hay que cambiarlo aquí.
const DIRECCION =
  'Av. Álvaro Obregón 308, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX';

const HORARIO = {
  es: [
    ['Lunes a miércoles', '1:00 p.m. – 11:00 p.m.'],
    ['Jueves', '1:00 p.m. – 1:00 a.m.'],
    ['Viernes y sábado', '1:00 p.m. – 2:00 a.m.'],
    ['Domingo', '1:00 p.m. – 11:00 p.m.'],
  ],
  en: [
    ['Monday to Wednesday', '1:00 p.m. – 11:00 p.m.'],
    ['Thursday', '1:00 p.m. – 1:00 a.m.'],
    ['Friday and Saturday', '1:00 p.m. – 2:00 a.m.'],
    ['Sunday', '1:00 p.m. – 11:00 p.m.'],
  ],
};

const TEXTOS = {
  es: {
    horarioTitulo: 'Horario',
    reservaTitulo: 'Reserva directo con nosotros',
    reservaTexto:
      'En el botón de reservar entras a nuestro calendario: eliges el día y la hora disponibles y dejas tus datos para apartar tu mesa.',
    reservaBoton: 'Reservar mesa',
    faqTitulo: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cómo reservo una mesa?',
        a: 'Entra a la página de reservas, elige en el calendario el día y la hora disponibles y deja tus datos.',
        link: { href: '/reserva', text: 'Ir a reservar' },
      },
      {
        q: '¿Dónde están?',
        a: `Estamos en ${DIRECCION}, en la Roma Condesa.`,
      },
      {
        q: '¿Dónde puedo ver el menú?',
        a: 'Nuestro menú de alimentos y bebidas está en la sección de menú del sitio.',
        link: { href: '/menullorona', text: 'Ver el menú' },
      },
      {
        q: '¿Cuál es su horario?',
        a: 'Abrimos todos los días desde la 1:00 p.m. De lunes a miércoles y domingo cerramos a las 11:00 p.m.; los jueves a la 1:00 a.m., y viernes y sábado a las 2:00 a.m.',
      },
    ],
  },
  en: {
    horarioTitulo: 'Opening hours',
    reservaTitulo: 'Book directly with us',
    reservaTexto:
      'The booking button opens our calendar: pick an available day and time and leave your details to hold your table.',
    reservaBoton: 'Book a table',
    faqTitulo: 'Frequently asked questions',
    faq: [
      {
        q: 'How do I book a table?',
        a: 'Go to the booking page, pick an available day and time in the calendar and leave your details.',
        link: { href: '/reserva', text: 'Book now' },
      },
      {
        q: 'Where are you?',
        a: `We are at ${DIRECCION}, in Roma Condesa.`,
      },
      {
        q: 'Where can I see the menu?',
        a: 'Our food and drinks menu is in the menu section of the site.',
        link: { href: '/menullorona', text: 'See the menu' },
      },
      {
        q: 'What are your opening hours?',
        a: 'We open every day at 1:00 p.m. Monday to Wednesday and Sunday we close at 11:00 p.m.; Thursday at 1:00 a.m., and Friday and Saturday at 2:00 a.m.',
      },
    ],
  },
};

export default function InfoVisita() {
  const { espa } = useAppContext();
  const lang = espa ? 'es' : 'en';
  const t = TEXTOS[lang];

  return (
    <section className="w-full bg-white py-[50px]">
      <div className="max-w-[1184px] mx-auto w-full px-[20px] grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-black">
            {t.horarioTitulo}
          </h2>
          <dl className="mt-4 divide-y divide-gray-200">
            {HORARIO[lang].map(([dias, horas]) => (
              <div key={dias} className="flex justify-between py-2 text-base md:text-lg">
                <dt className="font-semibold text-black">{dias}</dt>
                <dd className="text-gray-700">{horas}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-gray-700">{DIRECCION}</p>

          <h2 className="mt-10 text-2xl md:text-3xl font-black uppercase text-black">
            {t.reservaTitulo}
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700">{t.reservaTexto}</p>
          <Link
            href="/reserva"
            className="inline-block mt-4 text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {t.reservaBoton}
          </Link>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-black">
            {t.faqTitulo}
          </h2>
          <div className="mt-4 divide-y divide-gray-200">
            {t.faq.map((item) => (
              <details key={item.q} className="py-3" open>
                <summary className="cursor-pointer font-semibold text-black text-base md:text-lg">
                  {item.q}
                </summary>
                <p className="mt-2 text-gray-700">
                  {item.a}{' '}
                  {item.link && (
                    <Link href={item.link.href} className="underline text-red-600">
                      {item.link.text}
                    </Link>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
