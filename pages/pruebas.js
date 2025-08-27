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

import dynamic from 'next/dynamic';

// Opción robusta: toma default o named si cambia en el futuro
const Cal = dynamic(
  () => import('@calcom/embed-react').then(() => m.default ?? m.Cal),
  { ssr: false }
);

function Reserva() {
  // useEffect(() => {
  //   fbq.event('reserva')
  // }, []);

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

  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
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
  const image1 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';
  const image3 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/cumplean%CC%83os%2Bsorpresa%2Bfiesta%2Bllorona%2Bcantina%2Bnin%CC%83as.png';
  const image4 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png';

  const image5 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image6 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg';
  const image7 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg';
  const image8 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg';
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
        <NavBar onLanguageChange={handleLanguageChange} />
        <div className="w-full bg-black h-[400px]"></div>
        <div className="w-full bg-[#020a06] -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-white">
                    Los jueves piñata cumpleañera <br />
                    con una botella de mezcal
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-top object-cover"
                          src={image3}
                          alt="Música en vivo"
                        />
                        <p className="text-white">
                          Disfruta, baile <br />y festeja
                        </p>
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={image4}
                          alt="Música en vivo"
                        />
                        <p className="text-white text-center">
                          Grandes artistas <br />
                          de son cubano
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-xs md:text-md mt-3">
                    La <b>piñata cumpleañera</b> no tiene costo, y aplica todos
                    los jueves si cumples años en el mes ❤️ y solo tienen que
                    hacer reservación. Les regalamos dulces típicos mexicanos y
                    una botella de nuestro{' '}
                    <b>mezcal premium madre cuishe 🍶🥃</b>.
                  </p>
                </div>
                <div className="w-full">
                  <div style={{ width: '100%', height: 720 }}>
                    <iframe
                      src="https://cal.com/TU_USUARIO/TU_EVENTO?layout=month_view"
                      width="100%"
                      height="720"
                      frameBorder="0"
                    ></iframe>
                  </div>
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
              <>
                <Slider />
              </>
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-white">
                    On Thursdays, a birthday <br />
                    piñata with a bottle of mezcal
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={image3}
                          alt="Música en vivo"
                        />
                      </div>
                    </Link>

                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={image4}
                          alt="Música en vivo"
                        />
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-white sm:text-xs md:text-md mt-3">
                    The birthday piñata is free of charge and applies every
                    Thursday if your birthday is in the month. You just need to
                    make a reservation. We give away traditional Mexican candies
                    and a bottle of our best house mezcal 🍶🥃 madre cuishe,
                    which is handcrafted.
                  </p>
                  <div className="overflow-auto">
                    <ModalAll
                      className="w-[850px]"
                      open={open}
                      setOpen={setOpen}
                    >
                      <Cal
                        calLink="tu-usuario/reservaciones-llorona" // <-- tu slug
                        style={{ width: '100%', height: '720px', border: 0 }}
                      />
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
    </>
  );
}
const itemData = [
  {
    img: 'https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG',
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
