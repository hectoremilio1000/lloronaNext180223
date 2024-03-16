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

function ReservaTiktokTree() {
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
                    Los jueves piñata cumpleañera <br />
                    con una botella de mezcal para disfrutar
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={image3}
                          alt="Música en vivo"
                        />
                        <p className="text-gray-900">
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
                        <p className="text-gray-900 text-center">
                          Grandes artistas <br />
                          aman nuestro lugar
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-gray-900 sm:text-xs md:text-md">
                    La <b>piñata cumpleañera</b> no tiene costo, y aplica todos
                    los jueves si cumples años en el mes ❤️ y solo tienen que
                    hacer reservación en cualquiera de nuestras redes sociales.
                    Les regalamos dulces típicos mexicanos y una botella de
                    nuestro mejor mezcal de la casa 🍶🥃 madre cuishe el cual
                    está elaborado artesanalmente. Este <b>mezcal premium </b>de
                    la más alta calidad y está elaborado con un proceso
                    artesanal proveniente de un gran maestro mezcalero de la
                    Ciudad de Oaxaca, México.
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
                <div
                  className="elfsight-app-061d54f3-a4df-48b1-96c3-7355ad5360c9"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-gray-900">
                    Los jueves piñata cumpleañera <br />
                    con una botella de mezcal para disfrutar
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/reserva">
                      <div>
                        <img
                          className="rounded-lg w-full h-[350px] object-cover"
                          src={image3}
                          alt="Música en vivo"
                        />
                        <p className="text-gray-900">
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
                        <p className="text-gray-900 text-center">
                          Grandes artistas <br />
                          aman nuestro lugar
                        </p>
                      </div>
                    </Link>
                  </div>
                  <p className="text-start text-gray-900 sm:text-xs md:text-md">
                    La <b>piñata cumpleañera</b> no tiene costo, y aplica todos
                    los jueves si cumples años en el mes ❤️ y solo tienen que
                    hacer reservación en cualquiera de nuestras redes sociales.
                    Les regalamos dulces típicos mexicanos y una botella de
                    nuestro mejor mezcal de la casa 🍶🥃 madre cuishe el cual
                    está elaborado artesanalmente. Este <b>mezcal premium </b>de
                    la más alta calidad y está elaborado con un proceso
                    artesanal proveniente de un gran maestro mezcalero de la
                    Ciudad de Oaxaca, México.
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
                  data-elfsight-app-lazy
                ></div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}

export default ReservaTiktokTree;
