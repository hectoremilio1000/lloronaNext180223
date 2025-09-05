// pages/paquetes.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBarEs from '../components/NavBarEs/NavBarEs';

const gold = '#D4AF37';
const WHATSAPP = '525549242477';
const waText = encodeURIComponent(
  'Hola, quiero cotizar un evento/grupo en Cantina La Llorona (Roma–Condesa). Fecha: __ Personas: __ Hora: __'
);
const WA_URL = `https://wa.me/${WHATSAPP}?text=${waText}`;

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
          Eventos en CDMX
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:text-xl">
          Restaurantes para grupos en Roma–Condesa. Cocina creativa, coctelería
          de autor y música en vivo.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 font-bold text-black shadow-lg transition hover:bg-white/90"
          >
            Cotizar por WhatsApp
          </a>
          <Link
            href="#menus"
            className="rounded-full border px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            style={{ borderColor: gold }}
          >
            Eventos especiales
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
      </div>
    </section>
  );
}

function EventTypes() {
  const cards = [
    {
      title: 'Cumpleaños',
      img: 'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/inicio/amigastomandoCantinaLlorona.JPG',
    },
    {
      title: 'Despedida de soltera',
      img: '/images/eventos/despedida.jpeg',
    },
    {
      title: 'Cenas empresariales',
      img: 'https://www.lalloronacantina.com/images/banner/posteo_chileC.jpg',
    },
    {
      title: 'Aniversarios',
      img: 'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/inicio/clienta%2Bfeliz%2Bcantina%2Bla%2Bllorona%2Bcdmx.jpg',
    },
    {
      title: 'Networking / After Office',
      img: 'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/inicio/llorona%2Bson%2Bgrupo%2Bcuano%2Bcantina%2Bweb.jpg',
    },
    {
      title: 'Bodas',
      img: '/images/eventos/bodas_2.jpeg',
    },
  ];

  return (
    <section className="bg-black py-14" id="menus">
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
                    (idx === 1 ? 'object-[50%_20%]' : 'object-center') // 50% horizontal (centro), 20% vertical (sube encuadre)
                  }
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <a
                  href={WA_URL}
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
  const menus = [
    {
      name: 'Menú Compartir – Clásicos',
      desc: 'Entradas al centro, plato fuerte a elegir, postre para compartir. Opciones vegetarianas disponibles.',
      link: '/menullorona',
    },
    {
      name: 'Mar y Tierra – 3 tiempos',
      desc: 'Selección de mariscos + cortes. Ideal para celebraciones de 8–20 personas.',
      link: '/menullorona',
    },
    {
      name: 'Coctelería de Autor + Botellas',
      desc: 'Paquetes de botellas y cocteles firma para celebrar en grande.',
      link: '/menullorona',
    },
  ];

  return (
    <section className="bg-neutral-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* <h2 className="text-center text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
          Menús para grupos
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <h3 className="text-lg font-bold text-white">{m.name}</h3>
              <p className="mt-2 text-sm text-white/70">{m.desc}</p>
              <Link
                href={m.link}
                className="mt-4 inline-block rounded-full border px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                style={{ borderColor: gold }}
              >
                Ver menú
              </Link>
            </div>
          ))}
        </div> */}

        <div className="mt-12 flex items-center justify-center">
          <a
            href={WA_URL}
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
