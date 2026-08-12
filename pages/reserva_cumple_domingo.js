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
import Slider from '../components/Sliders/Slider';
import { useRouter } from 'next/router';
import LoopVideo from '../components/LoopVideo';
import useCalendlyTracking from '../lib/useCalendlyTracking';

function Reserva() {
  useCalendlyTracking('organic', 'cumple');

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: 'Pagina Reserva Cumple Domingo',
      content_category: 'landing_organic',
    });
  }, []);

  const opts = {
    height: '350',
    width: '300',
    playerVars: {
      // autoplay: 1,
    },
  };

  const videoOnReady = (event) => {
    event.target.pauseVideo();
  };

  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasInitialized]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

  // ── IMÁGENES ────────────────────────────────────────────────────────────────
  // Centralizamos la imagen de "cumple" para poder cambiarla fácil
  // Reemplaza DEFAULT_SUNDAY_IMAGE con "esto" (tu nuevo asset) o pásalo por ?img=URL
  const router = useRouter();
  const ninas_cumple = '/cumple_cover.jpg';

  const image_cubano =
    '/img/salsa/cantante-son-cubano.webp';

  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </Head>

      {/* Google Ads (se carga igual en ambos idiomas) */}
      <Head>
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
        />
      </Head>

      <NavBar onLanguageChange={handleLanguageChange} />

      <div className="w-full bg-black h-[400px]"></div>
      <div className="w-full bg-[#020a06] -mt-[200px]">
        {espa ? (
          <>
            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
              <div className="w-full">
                <h1 className="font-bold text-4xl text-white">
                  <span className="block">¡Domingo de cumpleaños!</span>
                  Piñata cumpleañera con dulces típicos mexicanos
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-top object-cover"
                      src={ninas_cumple}
                      alt="Piñata cumpleañera en Cantina La Llorona"
                    />
                    <p className="text-white">
                      Disfruta, baila <br />y festeja
                    </p>
                  </div>

                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={image_cubano}
                      alt="Son cubano en vivo"
                    />
                    <p className="text-white text-center">
                      Grandes artistas <br />
                      de son cubano
                    </p>
                  </div>
                </div>

                <p className="text-start text-white sm:text-xs md:text-md mt-3">
                  La <b>piñata cumpleañera</b> no tiene costo y aplica todos los{' '}
                  <b>domingos</b> si cumples años en el mes ❤️. Solo necesitas
                  hacer tu reservación y nosotros te regalamos dulces típicos
                  mexicanos y un pastel especial de nuestro chef Fernando Rayón.
                </p>
              </div>

              <div className="w-full">
                <Calendario />
              </div>
            </div>

            <div className="overflow-hidden bg-black">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                  TESTIMONIOS
                </h1>
                <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                  TESTIMONIOS
                </h1>
              </div>
            </div>

            <div className="bg-black py-[50px]">
              <QuickInfo5 idioma={espa} />
            </div>

            <div className="bg-white">
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                    REVISTAS
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                    RECOMENDADOS
                  </h1>
                </div>
              </div>

              <div className="py-[50px] px-2">
                <QuickInfo6 idioma={espa} />
              </div>
            </div>

            <Slider />
          </>
        ) : (
          <>
            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
              <div className="w-full">
                <h1 className="font-bold text-4xl text-white">
                  <span className="block">Sunday birthday special!</span>
                  Piñata with a bottle of mezcal
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/reserva">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={imageCumple}
                        alt="Birthday piñata at La Llorona"
                      />
                    </div>
                  </Link>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image4}
                        alt="Live Cuban son band"
                      />
                    </div>
                  </Link>
                </div>

                <p className="text-start text-white sm:text-xs md:text-md mt-3">
                  The birthday piñata is free and applies every <b>Sunday</b> if
                  your birthday is within the month. Just book your table and
                  we’ll gift you traditional Mexican candies and a bottle of our
                  handcrafted <b>madre cuishe mezcal 🍶🥃</b>.
                </p>

                <div className="overflow-auto">
                  <ModalAll className="w-[850px]" open={open} setOpen={setOpen}>
                    <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1" />
                  </ModalAll>
                </div>
              </div>

              <div className="w-full">
                <Calendario />
              </div>
            </div>

            <div className="overflow-hidden bg-black">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                  TESTIMONIALS
                </h1>
                <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                  TESTIMONIALS
                </h1>
              </div>
            </div>

            <div className="bg-black py-[50px]">
              <QuickInfo5 idioma={espa} />
            </div>

            <div className="bg-white">
              <div className="overflow-hidden">
                <div className="flex items-center gap-4 whitespace-nowrap">
                  <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                    RECOMMENDED
                  </h1>
                  <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
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
  );
}

const itemData = [
  {
    img: '/img/cumple/chica-carrito-dulces.webp',
    title: 'Piñata cumpleañera',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '',
    title: 'novios',
  },
  {
    img: '',
    title: 'Pierde almas',
  },
  {
    img: '',
    title: 'amigas',
    cols: 2,
  },
];

export default Reserva;
