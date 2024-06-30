import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import QuickInfo5 from "../components/QuickInfo5";
import QuickInfo6 from "../components/QuickInfo6";
import CalendarioFoodie from "../components/CalendarioFoodie";
import CalendarioGoogleAds from "../components/CalendarioGoogleAds";

function Cita() {
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
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalalloronaromacondesa.JPG";
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
        {espa ? (
          <div className="d-flex subContenedor1Banner bannerHomeFinal1">
            <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada trans-transform">
              {/* <img src={logo2} width={450} alt="llorona" className="mt-5" /> */}
              {/* <video
                className="h-[75vh] scale-100"
                playsInline={true}
                webkit-playsinline="true"
                x-webkit-airplay="true"
                preload="auto"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                poster=""
              >
                <source
                  src="https://www.goiko.com/es/wp-content/uploads/2023/07/KB-360x2-1.mov"
                  type='video/mp4; codecs="hvc1"'
                />
                <source
                  src="https://www.goiko.com/es/wp-content/uploads/2023/07/kb-360x2-1.webm"
                  type="video/webm"
                />
              </video> */}
              <h1 className="text-center text-white text-[40px] md:text-[60px] leading-none font-bold">
                Una terraza única
              </h1>
              <Link
                href={"/reserva"}
                className="inline-block max-w-max mx-auto px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
              >
                Reserva Ahora
              </Link>
            </div>
            {/* <div className="absolute overflow-hidden z-[1000] top-[50%] translate-y-[-50%] left-0 w-full flex flex-col justify-center">
              <div className="flex items-center whitespace-nowrap rail-left">
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee">
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] font-bold leading-none">
                    PERFECTA
                  </h1>
                </div>
              </div>
              <div className="flex items-center whitespace-nowrap rail-right">
                <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] font-bold leading-none">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] font-bold leading-none">
                    AHORA
                  </h1>
                </div>
              </div>
              <div className="flex items-center whitespace-nowrap rail-left">
                <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none  ">
                    PERFECTA
                  </h1>
                </div>
                <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    LA TERRAZA
                  </h1>
                  <h1 className="inline-block text-[#e82127] text-[70px] md:text-[140px] font-bold leading-none">
                    PERFECTA
                  </h1>
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          <div className="d-flex subContenedor1Banner bannerHomeFinal1 banner">
            <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada trans-transform">
              {/* <img src={logo2} width={450} alt="llorona" className="mt-5" /> */}
              <video
                className="h-[75vh] scale-100"
                playsinline="true"
                webkit-playsinline="true"
                x-webkit-airplay="true"
                preload="auto"
                autoplay="autoplay"
                loop="loop"
                muted="muted"
                poster=""
              >
                <source
                  src="https://www.goiko.com/es/wp-content/uploads/2023/07/KB-360x2-1.mov"
                  type='video/mp4; codecs="hvc1"'
                />
                <source
                  src="https://www.goiko.com/es/wp-content/uploads/2023/07/kb-360x2-1.webm"
                  type="video/webm"
                />
              </video>
              <Link
                href={"/reserva"}
                className="inline-block max-w-max mx-auto px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
              >
                Book Now
              </Link>
            </div>
            <div className="absolute overflow-hidden z-[1000] top-[50%] translate-y-[-50%] left-0 w-full flex flex-col justify-center">
              <div className="flex items-center whitespace-nowrap rail-left">
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
              </div>
              <div className="flex items-center whitespace-nowrap rail-right">
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
              </div>
              <div className="flex items-center whitespace-nowrap rail-left">
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
                <div className="whitespace-nowrap inline-block  animate-marquee">
                  <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                    BOOK
                  </h1>
                  <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                    NOW
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full bg-white h-[250px]"></div>
        <div className="w-full bg-white -mt-[200px]">
          {espa ? (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-gray-900">
                    Disfruta de la terraza más impactante de CDMX
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={image3}
                        alt=""
                      />
                    </div>
                    {/* </Link> */}
                  </div>
                  <p className="text-start text-gray-900 sm:text-xs md:text-md mt-4">
                    El <b>lugar perfecto </b>para tus citas y eventos
                    especiales. Ven a disfrutar de la terraza más impactante de
                    CDMX con una buena mixología y grandes sabores con el menú
                    creado por el chef galardonado internacionalmente{" "}
                    <a
                      href="https://www.instagram.com/jorgedumit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="font-bold text-red-900"
                    >
                      Jorge Dumit
                    </a>
                    .
                  </p>

                  <p className="text-start text-gray-900 sm:text-xs md:text-md pt-2">
                    <Link
                      href={"/reserva"}
                      className=" text-red-900 font-bold "
                    >
                      Reserva ahora
                    </Link>{" "}
                    y pide en tu confirmación por whatsapp un postre especial
                    por parte de uno los mejores chefs de México.
                  </p>
                  {/* <div className="overflow-auto">
                    <ModalAll
                      className="w-[850px]"
                      open={open}
                      setOpen={setOpen}
                    >
                      <InlineWidget url="https://calendly.com/reservaciones-14/googleads-foodie-llorona" />
                    </ModalAll>
                  </div> */}
                </div>
                <div className="w-full">
                  <CalendarioGoogleAds />
                </div>
              </div>
              <>
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

              <>
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

                <div className="py-[50px]">
                  <QuickInfo6 idioma={espa} />
                </div>
              </>
            </>
          ) : (
            <>
              <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                <div className="w-full">
                  <h1 className="font-bold text-4xl text-gray-900">
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
                  <CalendarioFoodie />
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

export default Cita;
