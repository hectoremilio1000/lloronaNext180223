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
import CalendarioTiktokTree from "../components/CalendarioTiktokTree";
import NavBarWhite from "../components/NavbarWhite";

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
        <NavBarWhite />
        <div className="w-full bg-white h-[400px]"></div>
        <div className="w-full bg-white -mt-[200px]">
          {espa ? (
            <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
              <div className="w-full">
                <h1 className="font-bold text-4xl text-gray-900">
                  Los jueves piñata cumpleañera <br />
                  con una botella de mezcal para disfrutar
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* <div>
                    <Link href="/reserva">
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image1}
                        alt="Música en vivo"
                      />
                      <p className="text-gray-900">
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
                      <p className="text-gray-900">
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
                  nuestro mejor mezcal de la casa 🍶🥃 madre cuishe el cual está
                  elaborado artesanalmente. Este <b>mezcal premium </b>de la más
                  alta calidad y está elaborado con un proceso artesanal
                  proveniente de un gran maestro mezcalero de la Ciudad de
                  Oaxaca, México.
                </p>
                {/* <button
                  className="bg-[#3eeb91] px-4 py-3 text-gray-900 text-xs font-bold"
                  onClick={() => setOpen(true)}
                >
                  Reservar Ahora
                </button> */}
                <div className="overflow-auto">
                  <ModalAll className="w-[850px]" open={open} setOpen={setOpen}>
                    <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
                  </ModalAll>
                </div>
              </div>
              <div className="w-full">
                {/* <div className="bg-[#3eeb91] grid grid-cols-1 px-10 py-12 gap-4 sticky top-[100px]">
                  <h1 className="text-black text-3xl">Reserva Ahora</h1>
                  <div className="box w-full">
                    <label
                      htmlFor="nombres"
                      className="text-black font-bold mb-3"
                    >
                      Nombres
                    </label>

                    <input
                      type="text"
                      placeholder="Ingresa aqui tus nombres completos"
                      className="border-2 w-full bg-black border-black text-gray-900 rounded px-4 py-2"
                    />
                  </div>
                  <div className="box w-full">
                    <label
                      htmlFor="nombres"
                      className="text-black font-bold mb-3"
                    >
                      Nombres
                    </label>

                    <input
                      type="text"
                      placeholder="Ingresa aqui tus nombres completos"
                      className="border-2 w-full bg-black border-black text-gray-900 rounded px-4 py-2"
                    />
                  </div>
                  <div className="box w-full">
                    <label
                      htmlFor="nombres"
                      className="text-black font-bold mb-3"
                    >
                      Nombres
                    </label>

                    <input
                      type="text"
                      placeholder="Ingresa aqui tus nombres completos"
                      className="border-2 w-full bg-black border-black text-gray-900 rounded px-4 py-2"
                    />
                  </div>
                  <div className="box w-full">
                    <label
                      htmlFor="nombres"
                      className="text-black font-bold mb-3"
                    >
                      Nombres
                    </label>

                    <input
                      type="text"
                      placeholder="Ingresa aqui tus nombres completos"
                      className="border-2 w-full bg-black border-black text-gray-900 rounded px-4 py-2"
                    />
                  </div>
                  <button className="bg-black text-gray-900 text-sm font-bold px-4 py-3">
                    Rerservar
                  </button>
                </div> */}

                <CalendarioTiktokTree />
              </div>
            </div>
          ) : (
            <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
              <h3 className=" font-weight-bold proximamente2 text-gray-900">
                <b>
                  On Thursdays, a birthday <br />
                  piñata with a bottle of mezcal
                </b>
              </h3>

              <CalendarioTiktokTree />

              {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-gray-900 bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
            </div>
          )}
        </div>
      </>
    </>
  );
}

export default ReservaTiktokTree;
