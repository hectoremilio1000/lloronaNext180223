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
import QuickInfo6 from "../components/QuickInfo6";

import { InlineWidget } from "react-calendly";
import ModalAll from "../components/ModalAll";
import NavBar from "../components/NavBarEs/NavBarEs";
import QuickInfo5 from "../components/QuickInfo5";
import "../styles/Slider.module.css"; // Importa el archivo CSS aquí

import dynamic from "next/dynamic";
import MySwiper from "../components/Swiper5";
import CalendarioGoogleAds from "../components/CalendarioGoogleAds";

function Reserva() {
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
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png";
  const image4 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/cumplean%CC%83os%2Bsorpresa%2Bfiesta%2Bllorona%2Bcantina%2Bnin%CC%83as.png";

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
          <div>
            <MySwiper />
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      Disfruta del mejor cumpleaños
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
                            Djs & <br />
                            Son Cubano en Vivo
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-top"
                            src={image4}
                            alt="Música en vivo"
                          />
                          <p className="text-white text-center">
                            Postres <br />
                            suaves y dulces
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      🎁 ¡Celebra tu cumpleaños como nunca en Cantina La
                      Llorona! 🎁
                    </p>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      ¿Estás listo para una fiesta inolvidable? 🎉 Disfruta de
                      nuestros exquisitos sabores, la mejor música en vivo y un
                      ambiente vibrante que hará de tu cumpleaños una
                      experiencia mágica. ¡Ven y celebra en el corazón de la
                      Roma Condesa!
                    </p>

                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      La <b>piñata cumpleañera no tiene costo</b>, y aplica
                      todos los jueves si cumples años en el mes ❤️ y solo
                      tienen que hacer reservación. Les regalamos dulces típicos
                      mexicanos y una botella de nuestro mezcal premium madre
                      cuishe 🍶🥃 .{" "}
                    </p>
                  </div>
                  <div className="w-full">
                    <CalendarioGoogleAds />
                  </div>
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
              </>
            ) : (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      Enjoy the Best Birthday Celebration
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserve">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-bottom"
                            src={image3}
                            alt="DJs & Live Cuban Son"
                          />
                          <p className="text-white pt-2">
                            DJs & <br />
                            Live Cuban Son
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserve">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-top"
                            src={image4}
                            alt="Live Music"
                          />
                          <p className="text-white text-center">
                            Soft and <br />
                            Sweet Desserts
                          </p>
                        </div>
                      </Link>
                    </div>

                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      🎁 Celebrate your birthday like never before at Cantina La
                      Llorona! 🎁
                    </p>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      Are you ready for an unforgettable party? 🎉 Enjoy our
                      exquisite flavors, the best live music, and a vibrant
                      atmosphere that will make your birthday a magical
                      experience. Come and celebrate in the heart of Roma
                      Condesa!
                    </p>

                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      The <b>birthday piñata is free of charge</b> and is
                      available every Thursday for those celebrating their
                      birthday in the month ❤️. All you need to do is make a
                      reservation. We gift you traditional Mexican sweets and a
                      bottle of our premium Madre Cuishe mezcal 🍶🥃.
                    </p>
                  </div>
                  <div className="w-full">
                    <Calendario />
                  </div>
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
