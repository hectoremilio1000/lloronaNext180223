import React, { useEffect, useState } from "react";
import Head from "next/head";
import { FB_PIXEL_ID } from "../lib/fpixel";
import { useAppContext } from "../components/context/Context";
import Script from "next/script";
import NavBarWhite from "../components/NavbarWhite";
import ModalAll from "../components/ModalAll";
import { InlineWidget } from "react-calendly";
import CalendarioFoodie from "../components/CalendarioFoodie";
import QuickInfo5 from "../components/QuickInfo5";
function MariscosCantina() {
  const image4 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2048.jpg";
  const image3 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/Tacos-de-aguachile-de-pulpo-LLORONA.jpg";
  const { espa } = useAppContext();
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
                    Mariscos Frescos y Sabrosos de Cantina
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
                    recordarnos al méxico que nos hace vibrar. Nuestro menú es
                    creado por el famoso y reconocido internacionalmente chef
                    Jorge Dumit.{" "}
                    <a
                      href="https://www.instagram.com/jorgedumit/?hl=en"
                      target="_blank"
                    >
                      {" "}
                      Jorge Dumit
                    </a>
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
                  <CalendarioFoodie />
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
                    </div>
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

export default MariscosCantina;
