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
import CalendarioTiktokTree from "../components/CalendarioTiktokTree";

function FoodieLlorona() {
  // useEffect(() => {
  //   fbq.event('reserva')
  // }, []);

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
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/aguacateRibeyeLlorona.jpg";
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
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
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
        <NavBarWhite />
        <div className="w-full bg-white h-[400px]"></div>
        <div className="w-full bg-white -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-gray-900">
                    Cantina La Llorona <br />
                    Donde los sabores de México se fusionan con técnicas de
                    vanguardia
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <Link href="/reserva"> */}
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image3}
                        alt=""
                      />
                      {/* <p className="text-gray-900">
                          Disfruta, baile <br />y festeja
                        </p> */}
                    </div>
                    {/* </Link> */}

                    {/* <Link href="/reserva"> */}
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image4}
                        alt="Música en vivo"
                      />
                      {/* <p className="text-gray-900 text-center">
                          Grandes artistas <br />
                          aman nuestro lugar
                        </p> */}
                    </div>
                    {/* </Link> */}
                  </div>
                  <p className="text-start text-gray-900 sm:text-xs md:text-md">
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
                      <InlineWidget url="https://calendly.com/reservaciones-14/tiktok-reservaciones-llorona-clon?hide_gdpr_banner=1" />
                    </ModalAll>
                  </div>
                </div>
                <div className="w-full">
                  <CalendarioTiktokTree />
                </div>
              </div>
              <div className="w-full max-w-[1184px] mx-auto my-16">
                <h1 className="font-bold text-4xl text-center text-gray-900 mt-16 mb-8">
                  Clientes satisfechos
                </h1>
                <div className="elfsight-app-061d54f3-a4df-48b1-96c3-7355ad5360c9"></div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-gray-900">
                    Cantina La Llorona <br />
                    Where Mexico's flavors blend with cutting-edge culinary
                    techniques
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* <Link href="/reserva"> */}
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image3}
                        alt="Avocado with rib eye"
                      />
                      {/* <p className="text-gray-900">
                          Disfruta, baile <br />y festeja
                        </p> */}
                    </div>
                    {/* </Link> */}

                    {/* <Link href="/reserva"> */}
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image4}
                        alt="Delicious food"
                      />
                      {/* <p className="text-gray-900 text-center">
                          Grandes artistas <br />
                          aman nuestro lugar
                        </p> */}
                    </div>
                    {/* </Link> */}
                  </div>
                  <p className="text-start text-gray-900 sm:text-xs md:text-md">
                    Menu inspired by <b>Mexican Cantinas</b>. It's authentic yet
                    playful, designed to complement exquisite mixology and evoke
                    the vibrant Mexico that stirs our souls.
                  </p>
                  <div className="overflow-auto">
                    <ModalAll
                      className="w-[850px]"
                      open={open}
                      setOpen={setOpen}
                    >
                      <InlineWidget url="https://calendly.com/reservaciones-14/tiktok-reservaciones-llorona-clon" />
                    </ModalAll>
                  </div>
                </div>
                <div className="w-full">
                  <CalendarioTiktokTree />
                </div>
              </div>
              <div className="w-full max-w-[1184px] mx-auto my-16">
                <h1 className="font-bold text-4xl text-center text-gray-900 mt-16 mb-8">
                  Satisfied Customers
                </h1>
                <div
                  className="elfsight-app-061d54f3-a4df-48b1-96c3-7355ad5360c9"
                ></div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}

export default FoodieLlorona;
