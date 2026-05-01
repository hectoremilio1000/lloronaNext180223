import React, { useEffect, useState } from 'react';

import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';

import CalendarioMariachi from '../components/CalendarioMariachi';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import useCalendlyTracking from '../lib/useCalendlyTracking';

function JuevesMariachi() {
  /* Tracking de Calendly: stamp UTMs en el embed para que el webhook las
   * reciba en el payload y las matchee con el lead first-party. */
  useCalendlyTracking('organic', 'mariachi');

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: 'Jueves de Mariachi',
      content_category: 'landing_mariachi',
    });

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view_mariachi',
        page_type: 'landing',
        campaign: 'jueves_mariachi',
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

  const imageMariachi = '/mariachi_cantando.jpg';
  const imageCumple =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/cumplean%CC%83os%2Bsorpresa%2Bfiesta%2Bllorona%2Bcantina%2Bnin%CC%83as.png';
  const imagePinata =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';

  return (
    <>
      <Head>
        <title>Jueves de Mariachi - Cumpleaños | Cantina La Llorona</title>
        <meta
          name="description"
          content="Celebra tu cumpleaños con mariachi en vivo todos los jueves en Cantina La Llorona. Te regalamos tu piñata cumpleañera con dulces mexicanos y mezcal artesanal."
        />
        <link
          rel="canonical"
          href="https://lalloronacantina.com/jueves_mariachi/"
        />
        <meta
          property="og:title"
          content="Jueves de Mariachi - Celebra tu Cumpleaños | Cantina La Llorona"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lalloronacantina.com/jueves_mariachi/"
        />
        <meta
          property="og:image"
          content="https://lalloronacantina.com/mariachi_cantando.jpg"
        />
        <meta
          property="og:description"
          content="Mariachi en vivo todos los jueves. Piñata cumpleañera gratis si cumples en el mes. Reserva ya."
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
                    🎺 Jueves de Mariachi
                  </h1>
                  <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                    Celebra tu cumpleaños con mariachi en vivo
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover object-top"
                        src={imageMariachi}
                        alt="Mariachi en vivo en La Llorona Cantina"
                      />
                      <p className="text-white font-bold pt-2">
                        Mariachi en vivo <br />
                        todos los jueves
                      </p>
                    </div>

                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={imageCumple}
                        alt="Cumpleaños en La Llorona Cantina"
                      />
                      <p className="text-white text-center font-bold pt-2">
                        Festeja tu cumpleaños <br />
                        con nosotros
                      </p>
                    </div>
                  </div>

                  <div className="text-start sm:text-xs md:text-md pt-4 space-y-3">
                    <p className="text-white">
                      Cada <b>jueves</b> la cantina se llena de las mejores
                      canciones de mariachi 🎶. Ven a celebrar tu{' '}
                      <b>cumpleaños</b> con música en vivo mientras disfrutas de
                      nuestra <b>mixología mexicana</b> y mezcales artesanales
                      de Oaxaca.
                    </p>
                    <div className="bg-[#141414] rounded-lg p-4 border border-[#3eeb91]/30">
                      <p className="text-[#3eeb91] font-bold text-lg">
                        🪅🍾 Te regalamos tu piñata cumpleañera
                      </p>
                      <p className="text-gray-300 mt-1">
                        <b>
                          Piñata con dulces típicos mexicanos + botella de mezcal
                          artesanal
                        </b>{' '}
                        <span className="text-[#3eeb91] font-bold text-xl">
                          GRATIS
                        </span>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Aplica todos los jueves si cumples años en el mes.
                        Solo haz tu reservación y nosotros nos encargamos de la
                        fiesta 🎉
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      📍 Cantina La Llorona • Todos los jueves • Reserva para
                      garantizar tu lugar
                    </p>
                  </div>
                </div>

                {/* Columna derecha: Calendario */}
                <div className="w-full">
                  <CalendarioMariachi />
                </div>
              </div>

              {/* Marquee */}
              <div className="overflow-hidden bg-black mt-12">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                    JUEVES DE MARIACHI
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    CUMPLEAÑOS
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
                    🎺 Mariachi Thursdays
                  </h1>
                  <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                    Celebrate your birthday with live mariachi
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover object-top"
                        src={imageMariachi}
                        alt="Live mariachi at La Llorona Cantina"
                      />
                      <p className="text-white font-bold pt-2">
                        Live mariachi <br />
                        every Thursday
                      </p>
                    </div>

                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={imageCumple}
                        alt="Birthday celebration at La Llorona Cantina"
                      />
                      <p className="text-white text-center font-bold pt-2">
                        Celebrate your birthday <br />
                        with us
                      </p>
                    </div>
                  </div>

                  <div className="text-start sm:text-xs md:text-md pt-4 space-y-3">
                    <p className="text-white">
                      Every <b>Thursday</b> the cantina comes alive with the
                      best mariachi music 🎶. Come celebrate your{' '}
                      <b>birthday</b> with live music while enjoying our{' '}
                      <b>Mexican mixology</b> and artisanal mezcals from Oaxaca.
                    </p>
                    <div className="bg-[#141414] rounded-lg p-4 border border-[#3eeb91]/30">
                      <p className="text-[#3eeb91] font-bold text-lg">
                        🪅🍾 We gift you a birthday piñata
                      </p>
                      <p className="text-gray-300 mt-1">
                        <b>
                          Piñata with traditional Mexican candies + bottle of
                          artisanal mezcal
                        </b>{' '}
                        <span className="text-[#3eeb91] font-bold text-xl">
                          FREE
                        </span>
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Available every Thursday if your birthday is this month.
                        Just make a reservation and we take care of the party 🎉
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      📍 Cantina La Llorona • Every Thursday • Reserve to
                      guarantee your spot
                    </p>
                  </div>
                </div>

                <div className="w-full">
                  <CalendarioMariachi />
                </div>
              </div>

              {/* Marquee */}
              <div className="overflow-hidden bg-black mt-12">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
                    MARIACHI THURSDAYS
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                    BIRTHDAY PARTY
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

export default JuevesMariachi;
