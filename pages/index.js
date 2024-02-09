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
import Resena from "../components/Resena/index";
import * as fbq from "../lib/fpixel";
import Reserva from "./reserva";
import Calendario from "../components/Calendario";
import QuickInfo4 from "../components/QuickInfo4";
import Slider from "../components/Sliders/Slider";

import YouTube from "react-youtube";
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

      {espa ? (
        <div className="d-flex subContenedor1Banner bannerHomeFinal banner">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
            <img src={logo2} width={450} alt="llorona" className="mt-5" />
          </div>
        </div>
      ) : (
        <div className="d-flex subContenedor1Banner bannerHomeIngles banner">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
            <img src={logo2} width={450} alt="llorona" className="mt-5" />
          </div>
        </div>
      )}
      {espa ? (
        <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marquee">
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              Te queremos acá
            </h1>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marquee">
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
              <h1 className="inline-block animate-marquee text-white text-[70px] md:text-[100px] font-bold  w-full">
                MUSICA Y SALSA EN VIVO
              </h1>
              <h1 className="animate-marquee inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                MUSICA Y SALSA EN VIVO
              </h1>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <div className="mx-auto max-w-[1184px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
              <div>
                <YouTube
                  videoId="8mRlH_RxiP8"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Grandes noches de
                  <br /> grupos de salsa en vivo
                </p>
              </div>

              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image6}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Mixología que cautiva <br />y enamora
                </p>
              </div>

              <div>
                <YouTube
                  videoId="kA1hP5nFRYM"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Parceros aquí
                  <br /> mucha bachata y salsa
                </p>
              </div>

              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image8}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Ven a disfrutar <br />
                  de tardes cautivadoras
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h1 className="inline-block animate-marquee text-white text-[70px] md:text-[100px] font-bold  w-full">
                Live Music and Salsa
              </h1>
              <h1 className="animate-marquee inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                Live Music and Salsa
              </h1>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <div className="mx-auto max-w-[1184px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
              <div>
                <YouTube
                  videoId="8mRlH_RxiP8"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Great nights of
                  <br /> live salsa bands
                </p>
              </div>

              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image6}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Mixology that captivates <br />
                  and enchants
                </p>
              </div>

              <div>
                <YouTube
                  videoId="kA1hP5nFRYM"
                  opts={opts}
                  onReady={videoOnReady}
                />
                <p className="text-white">
                  Friends, here
                  <br /> we have a lot of bachata and salsa
                </p>
              </div>

              <div>
                <img
                  className="rounded-lg w-full h-[350px] object-cover"
                  src={image8}
                  alt="Música en vivo"
                />
                <p className="text-white">
                  Come and enjoy <br />
                  captivating afternoons
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <QuickInfo4 />
      <Encontramos />
    </div>
  );
}
