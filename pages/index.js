import Head from 'next/head';
import QuickInfo from '../components/Quickinfo/index';
import QuickInfo2 from '../components/QuickInfo2/index';
import QuickInfo3 from '../components/QuickInfo3/index';
import MenuDetail from '../components/MenuDetail';
import Promociones from '../components/Promociones';
// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import HeaderEn from '../components/Header-en/HeaderEn';
import HeaderEs from '../components/Header-es/Header-es';
import { useAppContext } from '../components/context/Context';
import Encontramos from '../components/Encontramos';
import * as fbq from '../lib/fpixel';
import Calendario from '../components/Calendario';
import QuickInfo4 from '../components/QuickInfo4';
import Slider from '../components/Sliders/Slider';
import Link from 'next/link';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import MySwiper from '../components/SwiperIndex';
// imagenes
const image1 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
const image2 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';
const image3 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg';
const image4 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2048.jpg';

const image5 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
const image6 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg';
const image7 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg';
const image8 =
  'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg';
export default function Home() {
  const opts = {
    height: '350',
    width: '100%',

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
    fbq.event('Reserva');
  };

  const router = useRouter();
  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);
  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaIngles]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };
  const { locale } = router;
  let HeaderComponent;
  const logo2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo_page_altaNUEVO_blanco.png';

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
      <NavBar onLanguageChange={handleLanguageChange} />
      {espa ? (
        <>
          <div>
            <MySwiper />
          </div>
        </>
      ) : (
        <>
          <div>
            <MySwiper />
          </div>
        </>
      )}

      <QuickInfo />
      <Slider />
      <Calendario />
      {espa ? (
        <>
          <div className="bg-white">
            <div className="overflow-hidden">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                  EN VIVO
                </h1>
                <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                  GRUPO DE SON CUBANO
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
      {/* <QuickInfo4 /> */}
      <Encontramos />
    </div>
  );
}
