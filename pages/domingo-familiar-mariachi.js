import React, { useEffect, useState } from 'react';

import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';

import CalendarioMariachiDomingo from '../components/CalendarioMariachiDomingo';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import useCalendlyTracking from '../lib/useCalendlyTracking';

function DomingoFamiliarMariachi() {
  useCalendlyTracking('organic', 'mariachi_domingo_familiar');

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: 'Pagina Domingo Familiar Mariachi',
      content_category: 'landing_mariachi_domingo_familiar',
    });

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view_mariachi_domingo_familiar',
        page_type: 'landing',
        campaign: 'domingo_familiar',
      });
    }
  }, []);

  const { espa, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  const handleLanguageChange = () => {
    setHasInitialized(true);
  };

  const heroFamilia = '/domingo-familiar/hero-familia-comiendo.png';
  const ninoMariachi = '/domingo-familiar/nino-mariachi.png';
  const mesaCenital = '/domingo-familiar/mesa-platillos-cenital.png';
  const chamorroMole = '/domingo-familiar/chamorro-mole.png';
  const mariachiTres = '/domingo-familiar/mariachi-tres-musicos.png';

  return (
    <>
      <Head>
        <title>Domingo Familiar con Mariachi en CDMX | Cantina La Llorona</title>
        <meta
          name="description"
          content="Domingo de comida en familia con mariachi en vivo en la Roma-Condesa. Chamorro en mole, mezcales artesanales y la mejor música mexicana. Reserva tu mesa en Cantina La Llorona."
        />
        <link
          rel="canonical"
          href="https://lalloronacantina.com/domingo-familiar-mariachi/"
        />
        <meta
          property="og:title"
          content="Domingo Familiar con Mariachi en CDMX | Cantina La Llorona"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lalloronacantina.com/domingo-familiar-mariachi/"
        />
        <meta
          property="og:image"
          content="https://lalloronacantina.com/domingo-familiar/hero-familia-comiendo.png"
        />
        <meta
          property="og:description"
          content="Domingo de comida en familia con mariachi en vivo en la Roma-Condesa. La sobremesa mexicana de siempre, ahora en Cantina La Llorona."
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>

      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
        />
      </Head>

      <NavBar onLanguageChange={handleLanguageChange} />

      {/* HERO full-bleed con foto de familia comiendo */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[720px] overflow-hidden">
        <img
          src={heroFamilia}
          alt={
            espa
              ? 'Familia mexicana disfrutando comida dominical con mariachi en Cantina La Llorona'
              : 'Mexican family enjoying Sunday lunch with mariachi at Cantina La Llorona'
          }
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 flex h-full items-end pb-12 md:pb-20">
          <div className="w-full max-w-[1184px] mx-auto px-6 md:px-8 text-center md:text-left">
            <p className="text-[#3eeb91] text-sm md:text-base font-semibold tracking-widest uppercase">
              {espa ? 'Cantina La Llorona · Roma-Condesa' : 'Cantina La Llorona · Roma-Condesa'}
            </p>
            <h1 className="font-bold text-4xl md:text-6xl text-white leading-tight mt-2">
              {espa
                ? 'Domingos en familia con mariachi'
                : 'Sundays with family and mariachi'}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mt-3 max-w-2xl">
              {espa
                ? 'La sobremesa mexicana de siempre: comida casera, mezcales y mariachi en vivo en la Roma-Condesa.'
                : 'The classic Mexican Sunday: home-style food, mezcal and live mariachi in Roma-Condesa.'}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-[#141414]/80 border border-[#3eeb91]/40 text-white text-sm md:text-base rounded-full px-4 py-2">
                {espa ? '🎺 Mariachi en vivo' : '🎺 Live mariachi'}
              </span>
              <span className="bg-[#141414]/80 border border-[#3eeb91]/40 text-white text-sm md:text-base rounded-full px-4 py-2">
                {espa ? '👨‍👩‍👧‍👦 Kid-friendly' : '👨‍👩‍👧‍👦 Kid-friendly'}
              </span>
              <span className="bg-[#141414]/80 border border-[#3eeb91]/40 text-white text-sm md:text-base rounded-full px-4 py-2">
                {espa ? '🍽 Comida tradicional' : '🍽 Traditional food'}
              </span>
              <a
                href="#reserva"
                className="bg-[#3eeb91] hover:bg-[#2bd17b] text-black font-bold text-sm md:text-base rounded-full px-6 py-2 transition"
              >
                {espa ? 'Reservar mesa' : 'Book a table'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-[#020a06]">
        {espa ? (
          <>
            {/* ── ESPAÑOL ── */}

            {/* Bloque info + calendario */}
            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-8 py-12 md:py-16">
              <div className="w-full">
                <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight">
                  🎶 Domingo es de comer rico, en familia, con mariachi
                </h2>
                <p className="text-[#3eeb91] text-lg font-semibold mt-3">
                  El único lugar en la Roma-Condesa con mariachi todos los domingos
                </p>

                <img
                  src={ninoMariachi}
                  alt="Niño emocionado viendo al mariachi en La Llorona Cantina"
                  className="rounded-lg w-full h-[320px] md:h-[380px] object-cover mt-6"
                />
                <p className="text-white text-sm mt-2 italic">
                  Para los chiquitos también es su momento favorito de la semana 🎺
                </p>

                <div className="text-start text-white space-y-3 pt-5">
                  <p>
                    En La Llorona el <b>domingo</b> sabe a <b>chamorro en mole</b>,
                    a <b>guacamole recién hecho</b> y a <b>mezcal artesanal de
                    Oaxaca</b>. Trae a la familia — abuelos, papás, hijos — y
                    déjate llevar por la <b>música del mariachi en vivo</b>.
                  </p>
                  <p className="text-gray-300">
                    Es la sobremesa mexicana de siempre, en una cantina con más
                    de cien años de historia.
                  </p>
                </div>

                <div className="bg-[#141414] rounded-lg p-5 border border-[#3eeb91]/30 mt-5">
                  <p className="text-[#3eeb91] font-bold text-lg">
                    ¿Qué incluye tu domingo?
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-2 text-sm md:text-base">
                    <li>🎺 <b>Mariachi en vivo</b> tocando todo el domingo</li>
                    <li>🍽 <b>Menú dominical</b> con platillos tradicionales mexicanos</li>
                    <li>🥃 <b>Mezcales artesanales</b> de Oaxaca y mixología mexicana</li>
                    <li>👨‍👩‍👧‍👦 Espacio <b>kid-friendly</b> — los niños son bienvenidos</li>
                    <li>🌿 Ambiente cálido en <b>Roma-Condesa, CDMX</b></li>
                  </ul>
                </div>

                <p className="text-gray-400 text-sm pt-4">
                  📍 Cantina La Llorona · Roma-Condesa, CDMX · Todos los domingos ·
                  Reserva para garantizar tu mesa
                </p>
              </div>

              {/* Calendario */}
              <div className="w-full">
                <CalendarioMariachiDomingo
                  utmCampaign="domingo_familiar"
                  titleEs="Reserva tu mesa familiar"
                />
              </div>
            </div>

            {/* Sección "Qué vas a comer" */}
            <div className="w-full bg-black py-14 md:py-20 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                  Qué vas a comer este domingo
                </h2>
                <p className="text-gray-400 text-center mt-2 text-base md:text-lg">
                  Cocina mexicana hecha en casa, servida con mezcal y mariachi
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div>
                    <img
                      src={mesaCenital}
                      alt="Mesa servida con chamorro, guacamole, mezcal y tortillas en La Llorona"
                      className="rounded-lg w-full h-[420px] object-cover"
                    />
                    <p className="text-white font-bold text-lg mt-3">
                      Mesa de sobremesa dominical
                    </p>
                    <p className="text-gray-400 text-sm">
                      Chamorro, guacamole, encurtidos, mezcales y tortillas recién hechas.
                    </p>
                  </div>
                  <div>
                    <img
                      src={chamorroMole}
                      alt="Chamorro en mole con arroz blanco y encurtido de cebolla morada"
                      className="rounded-lg w-full h-[420px] object-cover"
                    />
                    <p className="text-white font-bold text-lg mt-3">
                      Chamorro en mole — el platillo de la casa
                    </p>
                    <p className="text-gray-400 text-sm">
                      Cocción lenta, mole especial de la cantina. Para compartir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección Mariachi en vivo */}
            <div className="w-full bg-[#020a06] py-14 md:py-20 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <img
                    src={mariachiTres}
                    alt="Mariachi en vivo todos los domingos en Cantina La Llorona"
                    className="rounded-lg w-full h-[460px] object-cover"
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Mariachi en vivo, <span className="text-[#3eeb91]">todos los domingos</span>
                  </h2>
                  <p className="text-gray-300 mt-4 text-base md:text-lg">
                    Tres músicos, trompeta, violín y voz. Las canciones que tu abuela
                    cantaba y las que tus hijos van a recordar.
                  </p>
                  <p className="text-gray-400 mt-3 text-sm md:text-base">
                    Pide tu canción. Brinda con tu familia. Así se vive el domingo
                    en La Llorona.
                  </p>
                  <a
                    href="#reserva"
                    className="inline-block mt-6 bg-[#3eeb91] hover:bg-[#2bd17b] text-black font-bold rounded-full px-6 py-3 transition"
                  >
                    Reservar para este domingo →
                  </a>
                </div>
              </div>
            </div>

            {/* Cross-link sutil a /reserva_domingo (cumpleaños) */}
            <div className="w-full bg-black py-10 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto bg-[#141414] border border-[#3eeb91]/20 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-[#3eeb91] font-bold text-lg">
                    🪅 ¿Alguien cumple años este mes?
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    Si vienes a celebrar un cumpleaños, te regalamos la piñata cumpleañera con dulces mexicanos y mezcal artesanal.
                  </p>
                </div>
                <Link
                  href="/reserva_domingo"
                  className="bg-transparent border-2 border-[#3eeb91] text-[#3eeb91] hover:bg-[#3eeb91] hover:text-black font-bold rounded-full px-6 py-3 transition whitespace-nowrap"
                >
                  Ver promo de cumpleaños →
                </Link>
              </div>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden bg-black mt-4">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <h2 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                  DOMINGO FAMILIAR
                </h2>
                <h2 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                  MARIACHI EN VIVO
                </h2>
              </div>
            </div>

            {/* Testimonios */}
            <div className="bg-black py-[50px]">
              <QuickInfo5 idioma={espa} />
            </div>

            {/* Revistas / Recomendados */}
            <div className="bg-white">
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h2 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full">
                    RECOMENDADOS
                  </h2>
                  <h2 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    REVISTAS
                  </h2>
                </div>
              </div>
              <div className="py-[50px] px-2">
                <QuickInfo6 idioma={espa} />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ── ENGLISH ── */}

            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-8 py-12 md:py-16">
              <div className="w-full">
                <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight">
                  🎶 Sundays are for great food, family, and mariachi
                </h2>
                <p className="text-[#3eeb91] text-lg font-semibold mt-3">
                  The only place in Roma-Condesa with live mariachi every Sunday
                </p>

                <img
                  src={ninoMariachi}
                  alt="Kid watching mariachi at La Llorona Cantina"
                  className="rounded-lg w-full h-[320px] md:h-[380px] object-cover mt-6"
                />
                <p className="text-white text-sm mt-2 italic">
                  Even the little ones love their Sunday at La Llorona 🎺
                </p>

                <div className="text-start text-white space-y-3 pt-5">
                  <p>
                    Sundays at La Llorona taste like <b>chamorro in mole</b>,
                    <b> fresh guacamole</b>, and <b>artisanal mezcal from Oaxaca</b>.
                    Bring the whole family — grandparents, parents, kids — and
                    let the <b>live mariachi</b> take you back home.
                  </p>
                  <p className="text-gray-300">
                    The classic Mexican Sunday, in a cantina with over a century of history.
                  </p>
                </div>

                <div className="bg-[#141414] rounded-lg p-5 border border-[#3eeb91]/30 mt-5">
                  <p className="text-[#3eeb91] font-bold text-lg">
                    What's included in your Sunday?
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-2 text-sm md:text-base">
                    <li>🎺 <b>Live mariachi</b> playing all Sunday long</li>
                    <li>🍽 <b>Sunday menu</b> with traditional Mexican dishes</li>
                    <li>🥃 <b>Artisanal mezcals</b> from Oaxaca and Mexican mixology</li>
                    <li>👨‍👩‍👧‍👦 <b>Kid-friendly</b> — children are welcome</li>
                    <li>🌿 Warm vibe in <b>Roma-Condesa, CDMX</b></li>
                  </ul>
                </div>

                <p className="text-gray-400 text-sm pt-4">
                  📍 Cantina La Llorona · Roma-Condesa, CDMX · Every Sunday ·
                  Reserve to guarantee your table
                </p>
              </div>

              <div className="w-full">
                <CalendarioMariachiDomingo
                  utmCampaign="domingo_familiar"
                  titleEn="Book your family table"
                />
              </div>
            </div>

            <div className="w-full bg-black py-14 md:py-20 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
                  What you'll eat this Sunday
                </h2>
                <p className="text-gray-400 text-center mt-2 text-base md:text-lg">
                  Home-style Mexican food, served with mezcal and mariachi
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div>
                    <img
                      src={mesaCenital}
                      alt="Sunday table with chamorro, guacamole, mezcal and tortillas at La Llorona"
                      className="rounded-lg w-full h-[420px] object-cover"
                    />
                    <p className="text-white font-bold text-lg mt-3">
                      The Sunday spread
                    </p>
                    <p className="text-gray-400 text-sm">
                      Chamorro, guacamole, pickles, mezcales and fresh tortillas.
                    </p>
                  </div>
                  <div>
                    <img
                      src={chamorroMole}
                      alt="Chamorro in mole with white rice and pickled red onion"
                      className="rounded-lg w-full h-[420px] object-cover"
                    />
                    <p className="text-white font-bold text-lg mt-3">
                      Chamorro in mole — the house specialty
                    </p>
                    <p className="text-gray-400 text-sm">
                      Slow-cooked, with our signature mole. Made for sharing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-[#020a06] py-14 md:py-20 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <img
                    src={mariachiTres}
                    alt="Live mariachi every Sunday at Cantina La Llorona"
                    className="rounded-lg w-full h-[460px] object-cover"
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Live mariachi, <span className="text-[#3eeb91]">every Sunday</span>
                  </h2>
                  <p className="text-gray-300 mt-4 text-base md:text-lg">
                    Three musicians, trumpet, violin and voice. The songs your
                    abuela used to sing, and the ones your kids will remember.
                  </p>
                  <p className="text-gray-400 mt-3 text-sm md:text-base">
                    Request a song. Toast with your family. That's how Sundays
                    work at La Llorona.
                  </p>
                  <a
                    href="#reserva"
                    className="inline-block mt-6 bg-[#3eeb91] hover:bg-[#2bd17b] text-black font-bold rounded-full px-6 py-3 transition"
                  >
                    Book this Sunday →
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full bg-black py-10 px-6 md:px-8">
              <div className="max-w-[1184px] mx-auto bg-[#141414] border border-[#3eeb91]/20 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-[#3eeb91] font-bold text-lg">
                    🪅 Birthday in the family this month?
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    If you're celebrating a birthday, we gift you a piñata with traditional Mexican candies and an artisanal mezcal bottle.
                  </p>
                </div>
                <Link
                  href="/reserva_domingo"
                  className="bg-transparent border-2 border-[#3eeb91] text-[#3eeb91] hover:bg-[#3eeb91] hover:text-black font-bold rounded-full px-6 py-3 transition whitespace-nowrap"
                >
                  See birthday promo →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden bg-black mt-4">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <h2 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                  FAMILY SUNDAY
                </h2>
                <h2 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                  LIVE MARIACHI
                </h2>
              </div>
            </div>

            <div className="bg-black py-[50px]">
              <QuickInfo5 idioma={espa} />
            </div>

            <div className="bg-white">
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h2 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full">
                    RECOMMENDED
                  </h2>
                  <h2 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    INTERNATIONAL MAGAZINES
                  </h2>
                </div>
              </div>
              <div className="py-[50px] px-2">
                <QuickInfo6 idioma={espa} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DomingoFamiliarMariachi;
