import Head from "next/head";
import QuickInfo from "../components/Quickinfo/index";
import QuickInfo2 from "../components/QuickInfo2/index";
import QuickInfo3 from "../components/QuickInfo3/index";
import MenuDetail from "../components/MenuDetail";
import Promociones from "../components/Promociones";
// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from "next/router";
import HeaderEn from "../components/Header-en/HeaderEn";
import HeaderEs from "../components/Header-es/Header-es";
import { useAppContext } from "../components/context/Context";
import Encontramos from "../components/Encontramos";
import * as fbq from "../lib/fpixel";
import Calendario from "../components/Calendario";
import QuickInfo4 from "../components/QuickInfo4";
import Slider from "../components/Sliders/Slider";
import Link from "next/link";
import NavBar from "../components/NavBarEs/NavBarEs";
import QuickInfo5 from "../components/QuickInfo5";
// imagenes
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
export default function Home() {
  const opts = {
    height: "350",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,
    },
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const handleClick = () => {
    fbq.event("Reserva");
  };

  const router = useRouter();
  const { locale } = router;
  let HeaderComponent;
  const logo2 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo_page_altaNUEVO_blanco.png";

  const { ingles, espa } = useAppContext();

  return (
    <div>
      {espa ? (
        <Head>
          <title>La Llorona</title>
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Llorona" />
          <meta
            name="of:description"
            content="Somos un restaurante mexicano con buen son"
          />
          <meta
            name="og:description"
            content="Somos un restaurante mexicano con buen son"
          />
          <meta property="og:url" content="https://lalloronacantina.com/" />
          <meta name="og:title" content="La Llorona" />
          <meta property="og:type" content="La Llorona" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png"
          />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>
      ) : (
        <Head>
          <title>Llorona Best Mexican cousine in town</title>
          <link
            rel="alternate"
            hrefLang="en"
            href="https://lalloronacantina.com"
          />
          <link
            rel="alternate"
            hrefLang="es"
            href="https://lalloronacantina.com"
          />
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Llorona" />
          <meta
            name="of:description"
            content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant."
          />
          <meta
            name="og:description"
            content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant."
          />
          <meta property="og:url" content="https://lalloronacantina.com/" />
          <meta name="og:title" content="Llorona" />
          <meta property="og:type" content="Llorona" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png"
          />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>
      )}
      <NavBar />
      {espa ? (
        <div className="d-flex subContenedor1Banner bannerHomeFinal banner">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada trans-transform">
            {/* <img src={logo2} width={450} alt="llorona" className="mt-5" /> */}
            <video
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
            </video>
            <Link
              href={"/reserva"}
              className="inline-block max-w-max mx-auto px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div>
          <div className="absolute overflow-hidden z-[1000] top-[50%] translate-y-[-50%] left-0 w-full flex flex-col justify-center">
            <div className="flex items-center whitespace-nowrap rail-left">
              <div className="whitespace-nowrap inline-block  animate-marquee">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap inline-block  animate-marquee">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap rail-right">
              <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
            </div>
            <div className="flex items-center whitespace-nowrap rail-left">
              <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap inline-block  animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none  ">
                  AHORA
                </h1>
              </div>
              <div className="whitespace-nowrap  inline-block animate-marquee delay-300">
                <h1 className="inline-block text-white text-[70px] md:text-[140px] leading-none font-bold">
                  RESERVA
                </h1>
                <h1 className="inline-block text-[#3eeb91] text-[70px] md:text-[140px] font-bold leading-none">
                  AHORA
                </h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex subContenedor1Banner bannerHomeFinal banner">
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
      {espa ? (
        <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marqueeleft">
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              Te queremos acá
            </h1>
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              Te queremos acá
            </h1>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marqueeleft">
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              We want you here
            </h1>
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              We want you here
            </h1>
          </div>
        </div>
      )}

      <QuickInfo />
      <Slider />
      <Calendario />
      {espa ? (
        <>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                TESTIMONIO
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                TESTIMONIO
              </h1>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <QuickInfo5 idioma={espa} />
          </div>
        </>
      ) : (
        <>
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
      {/* <QuickInfo4 /> */}
      <Encontramos />
    </div>
  );
}
