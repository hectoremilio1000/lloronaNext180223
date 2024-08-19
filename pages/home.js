import Head from "next/head";
import QuickInfo from "../components/Quickinfo/index";
import QuickInfo2 from "../components/QuickInfo2/index";
import QuickInfo3 from "../components/QuickInfo3/index";
import MenuDetail from "../components/MenuDetail";
import Promociones from "../components/Promociones";
// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useAppContext } from "../components/context/Context";
import Encontramos from "../components/Encontramos";
import * as fbq from "../lib/fpixel";
import Calendario from "../components/Calendario";
import QuickInfo4 from "../components/QuickInfo4";
import Slider from "../components/Sliders/Slider";
import Link from "next/link";
import NavBar from "../components/NavBarHome/NavBarHome";
import QuickInfo5 from "../components/QuickInfo5";
import QuickInfo6 from "../components/QuickInfo6";
import MySwiper from "../components/SwiperIndex";
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

  const { ingles, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  // useEffect(() => {
  //   // Solo cambiar a inglés si es la primera vez que se carga la página
  //   if (!hasInitialized) {
  //     onIdiomaIngles();
  //     setHasInitialized(true);
  //   }
  // }, [hasInitialized, onIdiomaIngles]);

  // const handleLanguageChange = (language) => {
  //   if (language === "espa") {
  //     onIdiomaEspa();
  //     setHasInitialized(true);
  //   } else {
  //     onIdiomaIngles();
  //     setHasInitialized(true);
  //   }
  // };

  return (
    <div>
      <Head>
        <title>
          La Llorona - Best Authentic Mexican Cuisine in Mexico City
        </title>
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

        <meta
          name="description"
          content="Discover the best authentic Mexican cuisine in Mexico City, crafted by renowned Chef Jorge Dumit. Experience the vibrant flavors of Mexico in the heart of Roma Condesa."
        />
        <meta
          name="keywords"
          content="Mexican cuisine, authentic Mexican food, Chef Jorge Dumit, Roma Condesa, Mexico City restaurants, best Mexican food, cantina in CDMX, dining in Mexico City"
        />

        <meta
          name="of:title"
          content="La Llorona - Best Authentic Mexican Cuisine in Mexico City"
        />
        <meta
          name="og:description"
          content="Visit La Llorona to enjoy the best authentic Mexican cuisine in the vibrant Roma Condesa district. Led by Chef Jorge Dumit, our cantina offers a true taste of Mexico."
        />

        <meta property="og:url" content="https://lalloronacantina.com/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png"
        />
        <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" />
      </Head>
      {/* <Head>
          <title>La Llorona</title>
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Llorona" />
          <meta
            name="description"
            content="Disfruta de auténtica comida mexicana preparada por el gran Chef Jorge Dumit en La Llorona. Un lugar con buen ambiente, grandes sabores y la esencia vibrante de México."
          />
          <meta
            name="keywords"
            content="cantina mexicana, comida mexicana, Chef Jorge Dumit, auténtico sabor, La Llorona, restaurante mexicano, CDMX, sabor mexicano, Roma Condesa"
          />
          <meta
            name="of:description"
            content="Somos un restaurante mexicano con buen son"
          />
          <meta
            name="og:description"
            content="Visita La Llorona para disfrutar de los sabores auténticos de México. Creado por el renombrado Chef Jorge Dumit, nuestra cantina te ofrece una experiencia culinaria inolvidable."
          />
          <meta property="og:url" content="https://lalloronacantina.com/" />
          <meta
            name="og:title"
            content="La Llorona - Auténtica Comida Mexicana con Gran Sabor"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png"
          />

          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head> */}
      <NavBar />
      <>
        <div>
          <MySwiper />
        </div>
      </>
      {/* <>
          <div>
            <MySwiper />
          </div>
        </> */}
      (
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
      )
      {/* <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marqueeleft">
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              Te queremos acá
            </h1>
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2 w-full">
              Te queremos acá
            </h1>
          </div>
        </div> */}
      <QuickInfo />
      <Slider />
      <Calendario />
      <>
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
            <QuickInfo6 idioma={ingles} />
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
          <QuickInfo5 idioma={ingles} />
        </div>
      </>
      {/* <>
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
              <QuickInfo6 idioma={ingles} />
            </div>
          </div>
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
            <QuickInfo5 idioma={ingles} />
          </div>
        </> */}
      {/* <QuickInfo4 /> */}
      <Encontramos />
    </div>
  );
}
