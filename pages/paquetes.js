// pages/paquetes.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBarEs from '../components/NavBarEs/NavBarEs';

const gold = '#D4AF37';
const WHATSAPP = '525549242477';

// 🔧 Helper para construir el mensaje de WhatsApp con contexto
function buildWaUrl({ source, eventType = null }) {
  const base = `https://wa.me/${WHATSAPP}`;
  const text = [
    `Hola, quiero cotizar ${
      eventType ? `un evento de *${eventType}* ` : 'un evento '
    }en Cantina La Llorona (Roma–Condesa).`,
    'Fecha: __  Personas: __  Hora: __',
    `[Fuente: ${source}]`, // ← etiqueta para identificar desde dónde escribieron
  ].join('\n');

  return `${base}?text=${encodeURIComponent(text)}`;
}

function Hero() {
  return (
    <section
      className="relative grid min-h-[88vh] place-items-center overflow-hidden bg-black"
      style={{
        backgroundImage: 'url(/images/eventos/despedida.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-3xl font-black uppercase tracking-wide text-white sm:text-5xl">
          Eventos y Contrataciones
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          Organizamos{' '}
          <b>bodas civiles, cenas de fin de año, cumpleaños, despedidas</b> y
          todo tipo de celebraciones privadas en Roma–Condesa. Disfruta de{' '}
          <b>cocina creativa, coctelería de autor y música en vivo</b> para que
          tu evento sea inolvidable.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={buildWaUrl({ source: 'hero-cotizar' })}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-bold text-black shadow-lg transition hover:bg-white/90"
          >
            Cotizar por WhatsApp
          </a>
          <Link
            href="#tipos-evento"
            className="rounded-full border px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            style={{ borderColor: gold }}
          >
            Ver paquetes de eventos
          </Link>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      title: 'Pastel del festejado',
      desc: 'Cortesía con reservas de 4+ personas.',
    },
    {
      title: 'Brindis de mezcal',
      desc: 'Shot de bienvenida para el cumpleañero.',
    },
    {
      title: 'Mesa decorada',
      desc: 'Velas, letrero y detalles (bajo reserva).',
    },
    { title: 'Música en vivo', desc: 'Son cubano y ambiente para celebrar.' },
    {
      title: 'Menús para compartir',
      desc: 'Opciones vegetarianas y sin gluten disponibles.',
    },
    { title: 'Ubicación premium', desc: 'Roma–Condesa, fácil acceso y valet.' },
  ];

  return (
    <section className="bg-neutral-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
          Beneficios para grupos y cumpleaños
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <h3 className="text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA con etiqueta propia */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href={buildWaUrl({ source: 'beneficios-cta' })}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-bold text-black shadow-lg transition hover:bg-white/90"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function EventTypes() {
  const cards = [
    {
      title: 'Cumpleaños',
      img: '/img/ambiente/mesa-tacos-domino.webp',
    },
    { title: 'Despedida de soltera', img: '/images/eventos/despedida.jpeg' },
    {
      title: 'Cenas empresariales',
      img: 'https://www.lalloronacantina.com/images/banner/posteo_chileC.jpg',
    },
    {
      title: 'Aniversarios',
      img: '/img/ambiente/terraza-noche.webp',
    },
    {
      title: 'Networking / After Office',
      img: '/img/salsa/cantante-son-cubano.webp',
    },
    { title: 'Bodas', img: '/images/eventos/bodas_2.jpeg' },
  ];

  return (
    <section className="bg-black py-14" id="tipos-evento">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
          Tipos de eventos
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-56">
                <img
                  src={c.img}
                  alt={c.title}
                  className={
                    `h-full w-full object-cover transition duration-500 group-hover:scale-105 ` +
                    (idx === 1 ? 'object-[50%_20%]' : 'object-center')
                  }
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <a
                  href={buildWaUrl({
                    source: `card-${c.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`,
                    eventType: c.title,
                  })}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block rounded-full border px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  style={{ borderColor: gold }}
                >
                  Cotizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupMenus() {
  return (
    <section className="bg-neutral-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Si en el futuro quieres listar menús, aquí */}
        <div className="mt-2 flex items-center justify-center">
          <a
            href={buildWaUrl({ source: 'group-menus-cta' })}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-bold text-black shadow-lg transition hover:bg-white/90"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Paquetes() {
  return (
    <>
      <Head>
        <title>Eventos | Cantina La Llorona</title>
        <meta
          name="description"
          content="Eventos y grupos en Roma–Condesa. Cumpleaños, cenas empresariales y celebraciones con música en vivo."
        />
      </Head>

      <NavBarEs />

      <main className="bg-black pt-[72px] sm:pt-[80px]">
        <Hero />
        <Benefits />
        <EventTypes />
        <GroupMenus />
      </main>

      <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} Cantina La Llorona. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
