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
import MySwiper from "../components/SwiperGeneral";
import CalendarioGoogleAds from "../components/CalendarioGoogleAds";
import Encontramos from "../components/Encontramos/index";

const Swiper1 = dynamic(() => import("../components/Swiper1"), {
  ssr: false,
});

function Reserva() {
  const BannerImages = {
    imagen1:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",

    imagen2:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)",
    imagen3:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)",
    imagen4:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)",
    imagen5:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)",
    imagen6:
      "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )",
  };

  const { espa } = useAppContext();
  const div1 = {
    titulo: (
      <>
        El restaurante con un diseño sorprendente
        <br />y la comida más sabrosa
      </>
    ),
    imagen1:
      "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/terrazaespecialromanceromacondesaamigoscantina.jpg",
    imagen1Texto: (
      <>
        Diseño espectacular <br />y único en cdmx
      </>
    ),
    imagen2:
      "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
    imagen2Texto: (
      <>
        Restaurante de familia, comida <br />y diversión
      </>
    ),
    descripcion: (
      <>
        <b>La Llorona es el lugar perfecto </b>para disfrutar en familia de una
        experiencia única en un ambiente acogedor y lleno de sabor. Ven a
        descubrir nuestros platillos que deleitarán a grandes y chicos, y haz de
        cada comida una ocasión especial. ¡Reserva ahora y vive un momento
        inolvidable con los que más quieres!
      </>
    ),
  };

  const div1Ingles = {
    titulo: (
      <>
        The restaurant with breathtaking design
        <br />
        and the most delicious food
      </>
    ),
    imagen1:
      "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/terrazaespecialromanceromacondesaamigoscantina.jpg",
    imagen1Texto: (
      <>
        Spectacular design <br />
        and unique in CDMX
      </>
    ),
    imagen2:
      "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
    imagen2Texto: (
      <>
        Family restaurant, food <br />
        and fun
      </>
    ),
    descripcion: (
      <>
        <b>La Llorona is the perfect spot</b> to enjoy a unique experience with
        your family in a cozy and flavorful atmosphere. Come and discover our
        dishes that will delight everyone, young and old, and turn every meal
        into a special occasion. Book now and create unforgettable memories with
        your loved ones!
      </>
    ),
  };

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
            <MySwiper BannerImages={BannerImages} />
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      {div1.titulo}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={div1.imagen1}
                            alt="Música en vivo"
                          />
                          <p className="text-white pt-2">{div1.imagen1Texto}</p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={div1.imagen2}
                            alt="Música en vivo"
                          />
                          <p className="text-white text-center">
                            {div1.imagen2Texto}
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      {div1.descripcion}
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
                </div>
              </>
            ) : (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-4xl text-white">
                      {div1Ingles.titulo}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={div1Ingles.imagen1}
                            alt="Life music"
                          />
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={div1Ingles.imagen2}
                            alt="Música en vivo"
                          />
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      {div1Ingles.descripcion}
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
                        INTERNATIONAL MAGAZINES
                      </h1>
                      <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                        RECOMMEND US
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
        <Encontramos />
      </>
    </>
  );
}

export default Reserva;
