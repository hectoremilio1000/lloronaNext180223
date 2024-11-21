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

import { InlineWidget } from 'react-calendly';
import ModalAll from '../components/ModalAll';
import CalendarioTiktok from '../components/CalendarioTiktok';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';

function ReservaTiktok() {
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

  const { espa } = useAppContext();
  const image1 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';
  const image3 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg';
  const image4 =
    'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/reservatiktok/WhatsApp+Image+2024-11-08+at+15.10.24+(6).jpeg';

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
      <NavBar />
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
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" 
            />
          </Head>
        )}
        <div className="w-full bg-black h-[400px]"></div>
        <div className="w-full bg-[#020a06] -mt-[250px]">
          {espa ? (
            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
              <div className="w-full">
                <h1 className="font-bold text-4xl text-white">
                  Los jueves piñata cumpleañera <br />
                  con una botella de mezcal
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <div>
                    <Link href="/reserva">
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image1}
                        alt="Música en vivo"
                      />
                      <p className="text-white">
                        Mixología mexicana <br /> contemporánea
                      </p>
                    </Link>
                  </div>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image2}
                        alt="Música en vivo"
                      />
                      <p className="text-white">
                        Piñata cumpleañera
                        <br /> con mezcal
                      </p>
                    </div>
                  </Link> */}

                  <Link href="/reserva">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image3}
                        alt="Música en vivo"
                      />
                      <p className="text-white font-bold pt-2">
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
                      <p className="text-white text-center font-bold pt-2">
                        Grandes artistas <br />
                        aman nuestro lugar
                      </p>
                    </div>
                  </Link>
                </div>
                <p className="text-start text-white sm:text-xs md:text-md pt-2">
                  La <b>piñata cumpleañera</b> no tiene costo, y aplica todos
                  los jueves si cumples años en el mes ❤️ y solo tienen que
                  hacer reservación. <br/><br/>
                  Les regalamos dulces típicos mexicanos y una botella de
                  nuestro mejor mezcal de la casa 🍶🥃 madre cuishe. Este <b>mezcal premium </b>de la más
                  alta calidad y está elaborado con un proceso artesanal
                  proveniente de un gran maestro mezcalero de la Ciudad de
                  Oaxaca, México.
                </p>
              
                <div className="overflow-auto">
                  <ModalAll className="w-[850px]" open={open} setOpen={setOpen}>
                    <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1" />
                  </ModalAll>
                </div>
              </div>
              <div className="w-full">
                

                <CalendarioTiktok />
              </div>
            </div>
          ) : (
            <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
              <h3 className=" font-weight-bold proximamente2 text-white">
                <b>
                  On Thursdays, a birthday <br />
                  piñata with a bottle of mezcal
                </b>
              </h3>

              <CalendarioTiktok />

              {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
            </div>
          )}
        </div>
        <div className="w-full bg-[#020a06] py-12">
          <div className="overflow-hidden bg-black">
            <div className="inline-block whitespace-nowrap animate-marqueeleft">
              <h1 className="inline-block text-white text-[100px] font-bold px-4 py-2">
                MUSICA Y SALSA EN VIVO EN CANTINA LA LLORONA
              </h1>
            </div>
          </div>

          <div className="overflow-hidden bg-black">
                  {/* <div className="flex items-center gap-4 whitespace-nowrap">
                    <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                      TESTIMONIOS
                    </h1>
                    <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      TESTIMONIOS
                    </h1>
                  </div> */}
                </div>
               
                <div className="bg-black py-[50px]">
                  <QuickInfo5 idioma={espa} />
                </div>
                <div className="bg-white">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                        RECOMENDADOS
                      </h1>
                      <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                        REVISTAS
                      </h1>
                    </div>
                  </div>

                  <div className="py-[50px] px-2">
                    <QuickInfo6 idioma={espa} />
                  </div>
                </div>
          {/* <div className="mx-auto max-w-[1184px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 px-8">
            <div>
              <Link href="/reserva">
                <YouTube
                  videoId="8mRlH_RxiP8"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Grandes noches de
                  <br /> grupos de salsa en vivo
                </p>
              </Link>
            </div>

            <Link href="/reserva">
              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image6}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Mixología que cautiva <br />y enamora
                </p>
              </div>
            </Link>

            <Link href="/reserva">
              <div>
                <YouTube
                  videoId="kA1hP5nFRYM"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Parceros aquí
                  <br /> mucha bachata y salsa
                </p>
              </div>
            </Link>

            <Link href="/reserva">
              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image8}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Ven a disfrutar <br />
                  de tardes cautivadoras
                </p>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden bg-black">
            <div className="inline-block whitespace-nowrap animate-marqueeleft">
              <h1 className="inline-block text-white text-[100px] font-bold px-4 py-2">
                YO SOY COMO EL CHILE VERDE LLORONA, PICANTE PERO SABROSO
              </h1>
            </div>
          </div> */}
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

export default ReservaTiktok;
