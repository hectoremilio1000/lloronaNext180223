import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';
import title from '../components/Main/title.module.css';
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import YouTube from 'react-youtube';
import { FB_PIXEL_ID } from '../lib/fpixel';
import QuickInfo6 from '../components/QuickInfo6';

import { InlineWidget } from 'react-calendly';
import ModalAll from '../components/ModalAll';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import '../styles/Slider.module.css'; // Importa el archivo CSS aquí

import dynamic from 'next/dynamic';
import MySwiper from '../components/Swiper4';
import CalendarioGoogleAds from '../components/CalendarioGoogleAds';

function Reserva() {
  useEffect(() => {
    fbq.event('reserva')
  }, []);

  const opts = {
    height: '350',
    width: '300',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,
    },
  };

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const { espa } = useAppContext();
  const image1 =
    '/img/reserva/chica-coctel-calavera.webp';
  const image2 =
    '/img/cumple/chica-carrito-dulces.webp';
  const image3 =
    '/img/salsa/cantante-son-cubano.webp';
  const image4 =
    '/img/ambiente/mesa-tacos-domino.webp';

  const image5 =
    '/img/reserva/chica-coctel-calavera.webp';
  const image6 =
    '/img/mixologia/amigas-martini-rosa.webp';
  const image7 =
    '/img/cumple/festejo-bengala-terraza.webp';
  const image8 =
    '/img/mixologia/coctel-mazapan-martini.webp';
  const [open, setOpen] = useState(false);

  return (
    <>
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
                src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
              />
            </Head>
          ) : (
            <Head>
              <Script
                strategy="beforeInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
              />
            </Head>
          )}
          <NavBar />
          <div>
            <MySwiper />
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="text-3xl md:text-4xl text-white pt-4 font-bold">
                      Disfruta de la única Cantina con Son Cubano en Vivo
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image3}
                            alt="Música en vivo"
                          />
                          <p className="text-white pt-2 font-bold ">
                            Grandes orquestas <br />
                            de son cubano
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover "
                            src={image4}
                            alt="Música en vivo"
                          />
                          <p className="text-white text-center font-bold ">
                            El mejor <br />
                            ambiente
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      En <b>Cantina La Llorona</b>, ofrecemos una experiencia
                      vibrante y auténtica con grupos de son cubano, que te
                      transportará con sus ritmos cálidos y contagiosos. Cada
                      semana tenemos grandes orquestas directamente desde{' '}
                      <b>Cuba 🇨🇺</b>.
                    </p>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      No pierdas la oportunidad de reservar y vivir esta
                      experiencia única en Cantina La Llorona. ¡Te esperamos
                      para compartir una noche de sabores exquisitos y música en
                      vivo que te harán sentir la verdadera esencia de una
                      <b> Cantina Mexicana! 🥁🪇🎺🇲🇽</b>
                    </p>
                  </div>
                  <div className="w-full">
                    <CalendarioGoogleAds />
                  </div>
                </div>
                <div className="overflow-hidden bg-black">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                      EN VIVO
                    </div>
                    <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      ORQUESTAS SON CUBANO
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
                        RECOMENDADOS
                      </div>
                      <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                        REVISTAS
                      </div>
                    </div>
                  </div>

                  <div className="py-[50px] px-2">
                    <QuickInfo6 idioma={espa} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      Enjoy the only Cantina with Live Cuban Son
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image3}
                            alt="Great Cuban 
                            Son Orchestras Llorona Cantina"
                          />
                          <p className="text-white pt-2">
                            Great Cuban <br />
                            Son Orchestras
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image4}
                            alt="The best atmosphere Llorona"
                          />
                          <p className="text-white pt-2">
                            The best <br />
                            atmosphere
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      At <b>Cantina La Llorona</b>, we offer a vibrant and
                      authentic experience with Cuban son groups that will
                      transport you with their warm and infectious rhythms.
                      Every week we feature great orchestras directly from{' '}
                      <b>Cuba 🇨🇺</b>.
                    </p>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      Don't miss the opportunity to book and live this unique
                      experience at Cantina La Llorona. We look forward to
                      sharing a night of exquisite flavors and live music that
                      will make you feel the true essence of a{' '}
                      <b>Mexican Cantina! 🥁🪇🎺🇲🇽</b>
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
    </>
  );
}

export default Reserva;
