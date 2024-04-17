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
import CalendarioTiktok from "../components/CalendarioTiktok";
import QuickInfo5 from "../components/QuickInfo5";
import NavBar from "../components/NavBarEs/NavBarEs";

function ReservaTiktok() {
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
        <NavBar />
        <div className="w-full bg-black h-[400px]"></div>
        <div className="w-full bg-[#020a06] -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="text2xl md:text-4xl font-bold text-center text-white">
                    Los jueves piñata cumpleañera <br />
                    con una botella de mezcal
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
                  <p className="text-start text-white sm:text-xs md:text-md mt-4">
                    La <b>piñata cumpleañera</b> no tiene costo, y aplica todos
                    los jueves si cumples años en el mes ❤️ y solo tienen que
                    hacer reservación. Les regalamos dulces típicos mexicanos y
                    una botella de nuestro{" "}
                    <b>mezcal premium madre cuishe 🍶🥃</b>.
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
                  <CalendarioTiktok />
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
            </>
          )}
        </div>
      </>
    </>
  );
}
const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG",
    title: "Piñata cumpleañera",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "",
    title: "novios",
  },
  {
    img: "",
    title: "Pierde almas",
  },
  {
    img: "",
    title: "amigas",
    cols: 2,
  },
];

export default ReservaTiktok;
