import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';

import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import { FB_PIXEL_ID } from '../lib/fpixel';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import Slider from '../components/Sliders/Slider';

function TacoAnticruda() {
  const { espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaIngles, onIdiomaEspa]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

  const tacoImage = '/landing/taco-anticruda/taco-anticruda.jpeg';
  const sonCubanoImage = '/landing/taco-anticruda/grupo-son-cubano.png';

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
            <Script
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
            />
          </Head>
        ) : (
          <Head>
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
                  <h1 className="font-bold text-4xl text-white">
                    Taco anticruda en CDMX: el más pedido del momento
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={tacoImage}
                          alt="Taco anticruda"
                        />
                        <p className="text-white text-center">Taco anticruda</p>
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={sonCubanoImage}
                          alt="Grupo de son cubano"
                        />
                        <p className="text-white text-center">
                          Son cubano en vivo
                          <br />
                          todos los días
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-xs md:text-md mt-3">
                    Quesadilla con queso y carne especial de cordero cocinado a
                    baja temperatura, rábano sandía, cilantro y consomé. El taco
                    anticruda más pedido del momento en CDMX: ideal para venir
                    en grupo y reservar.
                  </p>
                </div>
                <div className="w-full">
                  <Calendario />
                </div>
              </div>
              <div className="overflow-hidden bg-black">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                    TESTIMONIOS
                  </div>
                  <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                    TESTIMONIOS
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
                      REVISTAS
                    </div>
                    <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      RECOMENDADOS
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
                  <h1 className="font-bold text-4xl text-white">
                    Hangover taco in CDMX: the most in-demand right now
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={tacoImage}
                          alt="Hangover taco"
                        />
                        <p className="text-white text-center">
                          Quesabirria with consommé $160
                        </p>
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={sonCubanoImage}
                          alt="Son cubano group"
                        />
                        <p className="text-white text-center">
                          Live son cubano
                          <br />
                          every day
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-xs md:text-md mt-3">
                    Cheesy quesadilla with slow-cooked lamb, watermelon radish,
                    cilantro, and consommé. The most ordered hangover taco in
                    CDMX, perfect for groups and reservations.
                  </p>
                </div>
                <div className="w-full">
                  <Calendario />
                </div>
              </div>

              <div className="overflow-hidden bg-black">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                    TESTIMONIALS
                  </div>
                  <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                    TESTIMONIALS
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
                      RECOMMENDED
                    </div>
                    <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      INTERNATIONAL MAGAZINES
                    </div>
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

export default TacoAnticruda;
