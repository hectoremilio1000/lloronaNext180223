import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';

import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import Slider from '../components/Sliders/Slider';
import useCalendlyTracking from '../lib/useCalendlyTracking';

function Futbol() {
  useCalendlyTracking('organic', 'futbol');

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: 'Pagina Futbol en vivo',
      content_category: 'landing_futbol',
    });
  }, []);

  const { espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);
  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaIngles]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

  const image1 = '/img/futbol/amigos-brindis-cerveza.webp';
  const image2 = '/img/futbol/aficionado-cerveza.webp';

  return (
    <>
      <Head>
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
        {espa ? (
          <Head>
            <title>Fútbol en vivo en Cantina La Llorona | Roma Condesa</title>
            <meta
              name="description"
              content="Vive todos los partidos de fútbol en pantalla grande en Cantina La Llorona, Roma Condesa. Comida mexicana, mezcal y micheladas. Reserva tu mesa."
            />
            <Script
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
            />
          </Head>
        ) : (
          <Head>
            <title>Live Football at Cantina La Llorona | Roma Condesa</title>
            <meta
              name="description"
              content="Watch every football match on big screens at Cantina La Llorona, Roma Condesa. Mexican food, mezcal and micheladas. Book your table."
            />
            <Script
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
            />
          </Head>
        )}
        <NavBar onLanguageChange={handleLanguageChange} />
        <div className="w-full bg-black h-[400px]"></div>
        <div className="w-full bg-[#020a06] -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <p className="text-[#3eeb91] font-bold tracking-widest uppercase mb-2">
                    El torneo del verano 2026
                  </p>
                  <h1 className="font-bold text-4xl text-white">
                    Vive el fútbol en pantalla grande en La Llorona
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover object-center"
                          src={image1}
                          alt="Amigos brindando viendo el futbol en Cantina La Llorona"
                        />
                        <p className="text-white mt-1">
                          Cada partido <br />
                          con tu banda
                        </p>
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover object-center"
                          src={image2}
                          alt="Aficionado disfrutando una cerveza durante el partido"
                        />
                        <p className="text-white text-center mt-1">
                          Apoya a tu equipo <br />
                          con el mejor ambiente
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-base md:text-md mt-4">
                    Reúne a tu banda y vive <b>cada partido</b> en nuestras
                    pantallas, con la mejor cocina mexicana, mezcal artesanal y
                    mariachi en vivo en el corazón de la Roma Condesa. Aparta tu
                    mesa y disfruta el ambiente del fútbol como se debe. ⚽🎺
                  </p>
                  <p className="text-start text-[#7e8a79] text-[11px] mt-3 mb-0">
                    Evento de transmisión en establecimiento. No afiliado,
                    patrocinado ni avalado por la FIFA.
                  </p>
                </div>
                <div className="w-full">
                  <Calendario />
                </div>
              </div>
              <div className="overflow-hidden bg-black">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                    AMBIENTE
                  </div>
                  <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                    AMBIENTE
                  </div>
                </div>
              </div>
              <div className="bg-black py-[50px]">
                <QuickInfo5 idioma={espa} />
              </div>
              <div className="bg-white">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <div className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                      PANTALLAS
                    </div>
                    <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      BUEN SON
                    </div>
                  </div>
                </div>

                <div className="py-[50px] px-2">
                  <QuickInfo6 idioma={espa} />
                </div>
              </div>
              <>
                <Slider />
              </>
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <p className="text-[#3eeb91] font-bold tracking-widest uppercase mb-2">
                    The big summer of football 2026
                  </p>
                  <h1 className="font-bold text-4xl text-white">
                    Watch football on big screens at La Llorona
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover object-center"
                          src={image1}
                          alt="Friends cheering while watching football at Cantina La Llorona"
                        />
                        <p className="text-white mt-1">
                          Every match <br />
                          with your crew
                        </p>
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover object-center"
                          src={image2}
                          alt="Fan enjoying a beer during the match"
                        />
                        <p className="text-white text-center mt-1">
                          Cheer your team <br />
                          with the best vibes
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-base md:text-md mt-4">
                    Bring your crew and live <b>every match</b> on our screens,
                    with the best Mexican food, artisanal mezcal and live
                    mariachi in the heart of Roma Condesa. Book your table and
                    enjoy the football atmosphere the right way. ⚽🎺
                  </p>
                  <p className="text-start text-[#7e8a79] text-[11px] mt-3 mb-0">
                    In-venue broadcast event. Not affiliated with, sponsored or
                    endorsed by FIFA.
                  </p>
                </div>
                <div className="w-full">
                  <Calendario />
                </div>
              </div>

              <div className="overflow-hidden bg-black">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                    ATMOSPHERE
                  </div>
                  <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                    ATMOSPHERE
                  </div>
                </div>
              </div>
              <div className="bg-black py-[50px]">
                <QuickInfo5 idioma={espa} />
              </div>
              <div className="bg-white">
                <div className="overflow-hidden">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <div className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                      BIG SCREENS
                    </div>
                    <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      GOOD VIBES
                    </div>
                  </div>
                </div>

                <div className="py-[50px] px-2">
                  <QuickInfo6 idioma={espa} />
                </div>
              </div>
              <>
                <Slider />
              </>
            </>
          )}
        </div>
      </>
    </>
  );
}

export default Futbol;
