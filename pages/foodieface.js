import Link from "next/link";
import React, { useEffect, useState } from "react";
import Calendario from "../components/Calendario/index";

import title from "../components/Main/title.module.css";
import { useAppContext } from "../components/context/Context";
import Head from "next/head";
import Script from "next/script";
import * as fbq from "../lib/fpixel";
import YouTube from "react-youtube";
import { FB_PIXEL_ID } from "../lib/fpixel";

import { InlineWidget } from "react-calendly";
import ModalAll from "../components/ModalAll";
import NavBarWhite from "../components/NavbarWhite";
import QuickInfo5 from "../components/QuickInfo5";
import NavBar from "../components/NavBarEs/NavBarEs";
import CalendarioFoodieFacebook from "../components/CalendarioFoodieFacebook";

function Foodieface() {
  const opts = {
    height: "350",
    width: "300",

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
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg";
  const image2 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg";
  const image3 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg";
  const image4 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2048.jpg";

  const image5 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg";
  const image6 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg";
  const image7 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg";
  const image8 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg";
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Busca el elemento <a> con la ruta específica
      const specificLink = document.querySelector(
        'a[href="https://elfsight.com/google-reviews-widget/?utm_source=websites&utm_medium=clients&utm_content=google-reviews&utm_term=www.lalloronacantina.com&utm_campaign=free-widget"]'
      );

      // Si se encuentra el elemento, elimínalo del DOM y detén la verificación
      if (specificLink) {
        specificLink.parentNode.removeChild(specificLink);
        clearInterval(intervalId);
      }
    }, 1000); // Verifica cada 1 segundo

    // Detén la verificación cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // Ejecuta el efecto solo una vez al montar el componente
  return (
    <>
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
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
        <div className="w-full bg-black h-[400px]"></div>
        <div className="w-full bg-[#020a06] -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-white">
                    Donde los sabores de México se fusionan con técnicas de
                    vanguardia
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
                  <p className="text-start text-white sm:text-xs md:text-md">
                    Menú inspirado en <b>Cantinas Mexicanas</b>. Es honesto pero
                    con jiribilla para acompañar una buena mixología y
                    recordarnos al méxico que nos hace vibrar.
                  </p>

                  <div className="overflow-auto">
                    <ModalAll
                      className="w-[850px]"
                      open={open}
                      setOpen={setOpen}
                    >
                      <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1" />
                    </ModalAll>
                  </div>
                </div>
                <div className="w-full">
                  <CalendarioFoodieFacebook />
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
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-white">
                    Where Mexico's flavors blend with cutting-edge culinary
                    techniques
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
                  <p className="text-start text-white sm:text-xs md:text-md">
                    Menu inspired by <b>Mexican Cantinas</b>. It's authentic yet
                    playful, designed to complement exquisite mixology and evoke
                    the vibrant Mexico that stirs our souls.
                  </p>
                  om
                  <div className="overflow-auto">
                    <ModalAll
                      className="w-[850px]"
                      open={open}
                      setOpen={setOpen}
                    >
                      <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1" />
                    </ModalAll>
                  </div>
                </div>
                <div className="w-full">
                  <CalendarioFoodieFacebook />
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
  );
}

export default Foodieface;
