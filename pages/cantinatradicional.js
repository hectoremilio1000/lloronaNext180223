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
import MySwiper from '../components/SwiperCantina';
import CalendarioGoogleAds from '../components/CalendarioGoogleAds';
import { FaWhatsapp } from 'react-icons/fa';

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

  const bannerData = espa
  ? {
      title: 'Disfruta un buen trago con comida sabrosa',
      imageURL:
        'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/cantina/terraza%2Bcomida%2Bdeliciosa%2Bcantina.jpeg',
    }
  : {
      title: 'From the sea to your palate',
      imageURL:
        'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg',
    };

    
  const image1 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';
  const image3 =
    'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/cantina/ribeye%2Bcantina%2Bcdmx%2Bmexico%2Broma%2Bcondesa.jpg';
  const image4 =
    'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/cantina/clienta%2Bfeliz%2Bcantina%2Bla%2Bllorona%2Bcdmx.jpg';

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
          <div>
          <MySwiper title={bannerData.title} imageURL={bannerData.imageURL}/>
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      PREGUNTA por nuestro menú cantinero
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-bottom"
                            src={image3}
                            alt="Música en vivo"
                          />
                          <p className="text-white pt-2">
                            Rib eye <br />
                            cantinero
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
                          <p className="text-white text-center">
                            Terraza <br />
                            espectacular
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-justify text-white sm:text-xs md:text-2xl mt-3">
                    El menú cantinero representa tradición, comunidad y cultura. Ven con tus amigos y familia, crea tus propios momentos en este rincón de sabores en la Condesa.
                    </p>
                   

                  </div>
                  <div className="w-full">
                    <CalendarioGoogleAds />
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
                {/* <p className="text-white pt-2 text-center text-2xl md:text-4xl">
                  ¿Por qué somos <br />
                  los <b>preferidos</b>?
                </p> */}
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
                  <div className='px-2 pb-2'>
                  <a
                      href="https://wa.me/525549242477?text=Hola,%20me%20gustaría%20cotizar%20con%20ustedes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-2 md:mx-36 rounded-full shadow-lg transition duration-200 ease-in-out"
                    >
                      <FaWhatsapp className="mr-2" />
                      Reserva ya
                    </a>
                      </div>
                </div>
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
                      Thursday if your birthday is in the month. You just need
                      to make a reservation. We give away traditional Mexican
                      candies and a bottle of our best house mezcal 🍶🥃 madre
                      cuishe, which is handcrafted.
                    </p>
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
              </>
            )}
          </div>
        </>
      </>
    </>
  );
}

export default Reserva;
