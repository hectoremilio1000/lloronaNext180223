import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';

import { InlineWidget } from 'react-calendly';
import ModalAll from '../components/ModalAll';
import CalendarioNorteno from '../components/CalendarioNorteno';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import useCalendlyTracking from '../lib/useCalendlyTracking';

function MartesNortenoPromo() {
  // Tracking: source 'tiktok' para medir campañas, tipo 'norteno'
  useCalendlyTracking('tiktok', 'norteno_promo');

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: 'Martes de Norteño',
      content_category: 'landing_norteno_promo',
    });

    // TikTok pixel ViewContent
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track('ViewContent', {
        content_name: 'Martes de Norteño',
        content_type: 'product',
        description: 'landing_norteno_promo_tiktok',
      });
    }

    // GTM dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view_norteno',
        page_type: 'landing',
        campaign: 'martes_norteno_promo',
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

  const handleLanguageChange = (language) => {
    setHasInitialized(true);
  };

  // Imágenes — reemplaza con fotos reales de tus noches de norteño
  const heroImage =
    '/img/reserva/chica-coctel-calavera.webp';
  const image1 =
    '/grupo_tocando.png';
  const image2 =
    '/img/mixologia/amigas-martini-rosa.webp';
  const image3 =
    '/ninas_norteno2.png';
  const image4 =
    '/grupo_tocando.png';

  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Martes de Norteño | Cantina La Llorona</title>
        <meta
          name="description"
          content="Todos los martes, música norteña en vivo en Cantina La Llorona. Reserva tu mesa y disfruta de las mejores noches de norteño con mezcal artesanal."
        />
        <link rel="canonical" href="https://lalloronacantina.com/martesnortenopromo/" />
        <meta property="og:title" content="Martes de Norteño Promo | Cantina La Llorona" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lalloronacantina.com/martesnortenopromo/" />
        <meta property="og:image" content="https://lalloronacantina.com/grupo_tocando.png" />
        <meta
          property="og:description"
          content="Música norteña en vivo todos los martes. Charro Pilsner + Espadín artesanal $180. Reserva ya."
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

      <>
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
          />
        </Head>

        <NavBar onLanguageChange={handleLanguageChange} />

        {/* Hero Section */}
        <div className="w-full bg-black h-[400px]"></div>

        <div className="w-full bg-[#020a06] -mt-[250px]">
          {espa ? (
            <>
              {/* ── ESPAÑOL ── */}
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                {/* Columna izquierda: Info */}
                <div className="w-full">
                  <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
                    🤠 Martes de Norteño
                  </h1>
                  <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                    Todos los martes • Música norteña en vivo
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover object-top"
                        src={image3}
                        alt="Noche de norteño en La Llorona"
                      />
                      <p className="text-white font-bold pt-2">
                        Música en vivo <br />
                        que te hace sentir
                      </p>
                    </div>

                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image1}
                        alt="Ambiente cantina La Llorona"
                      />
                      <p className="text-white text-center font-bold pt-2">
                        El mejor ambiente <br />
                        de cantina mexicana
                      </p>
                    </div>
                  </div>

                  <div className="text-start text-white sm:text-xs md:text-md pt-4 space-y-3">
                    <p>
                      Cada <b>martes</b> la cantina se llena de las mejores
                      canciones norteñas 🎶. Ven a disfrutar de música en vivo
                      con los mejores grupos mientras disfrutas de nuestra{' '}
                      <b>mixología mexicana</b> y mezcales artesanales de Oaxaca.
                    </p>
                    <div className="bg-[#141414] rounded-lg p-4 border border-[#3eeb91]/30">
                      <p className="text-[#3eeb91] font-bold text-lg">
                        🍺🍶 Promoción Martes de Norteño
                      </p>
                      <p className="text-gray-300 mt-1">
                        <b>Charro Pilsner de barril + Espadín artesanal derecho</b>{' '}
                        por solo <span className="text-[#3eeb91] font-bold text-xl">$180</span>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Reserva tu mesa y disfruta la mejor combinación para una noche norteña 🤠
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      📍 Cantina La Llorona • Todos los martes • Reserva para garantizar tu lugar
                    </p>
                  </div>

                  <div className="overflow-auto">
                    <ModalAll className="w-[850px]" open={open} setOpen={setOpen}>
                      <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1" />
                    </ModalAll>
                  </div>
                </div>

                {/* Columna derecha: Calendario */}
                <div className="w-full">
                  <CalendarioNorteno />
                </div>
              </div>

              {/* Marquee */}
              <div className="overflow-hidden bg-black mt-12">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                    MARTES DE NORTEÑO
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    MÚSICA EN VIVO
                  </h1>
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
                    <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full">
                      RECOMENDADOS
                    </h1>
                    <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                      REVISTAS
                    </h1>
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
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
                    🤠 Norteño Tuesdays
                  </h1>
                  <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                    Every Tuesday • Live Norteño Music
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover object-top"
                        src={image3}
                        alt="Norteño night at La Llorona"
                      />
                      <p className="text-white font-bold pt-2">
                        Live music <br />
                        that moves your soul
                      </p>
                    </div>

                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image1}
                        alt="La Llorona cantina vibe"
                      />
                      <p className="text-white text-center font-bold pt-2">
                        The best Mexican <br />
                        cantina experience
                      </p>
                    </div>
                  </div>

                  <div className="text-start text-white sm:text-xs md:text-md pt-4 space-y-3">
                    <p>
                      Every <b>Tuesday</b> the cantina comes alive with the best
                      norteño music 🎶. Enjoy live performances while sipping on our{' '}
                      <b>Mexican mixology</b> and artisanal mezcals from Oaxaca.
                    </p>
                    <div className="bg-[#141414] rounded-lg p-4 border border-[#3eeb91]/30">
                      <p className="text-[#3eeb91] font-bold text-lg">
                        🍺🍶 Norteño Tuesday Special
                      </p>
                      <p className="text-gray-300 mt-1">
                        <b>Charro Pilsner draft + Espadín artesanal mezcal</b>{' '}
                        just <span className="text-[#3eeb91] font-bold text-xl">$180 MXN</span>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Book your table and enjoy the perfect combo for a norteño night 🤠
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      📍 Cantina La Llorona • Every Tuesday • Reserve to guarantee your spot
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <CalendarioNorteno />
                </div>
              </div>

              {/* Marquee */}
              <div className="overflow-hidden bg-black mt-12">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                    NORTEÑO TUESDAYS
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    LIVE MUSIC
                  </h1>
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-black py-[50px]">
                <QuickInfo5 idioma={espa} />
              </div>

              <div className="bg-white">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full">
                      RECOMMENDED
                    </h1>
                    <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                      INTERNATIONAL MAGAZINES
                    </h1>
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
    </>
  );
}

export default MartesNortenoPromo;
