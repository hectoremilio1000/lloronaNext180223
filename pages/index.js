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
import InfoVisita from '../components/InfoVisita';
import * as fbq from '../lib/fpixel';
import Calendario from '../components/Calendario';
import QuickInfo4 from '../components/QuickInfo4';
import Slider from '../components/Sliders/Slider';
import Link from 'next/link';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import MySwiper from '../components/SwiperIndex';
import useCalendlyTracking from '../lib/useCalendlyTracking';
// imagenes
const image1 =
  '/img/reserva/chica-coctel-calavera.webp';
const image2 =
  '/img/cumple/chica-carrito-dulces.webp';
const image3 =
  '/img/cumple/festejo-bengala-terraza.webp';
const image4 =
  '/img/ambiente/mesa-tacos-domino.webp';

const image5 =
  '/img/reserva/chica-coctel-calavera.webp';
const image6 =
  '/img/mixologia/amigas-martini-rosa.webp';
const image7 =
  '/img/cumple/festejo-bengala-terraza.webp';
const image8 =
  '/img/mixologia/coctel-mazapan-martini.webp';
export default function Home() {
  useCalendlyTracking('organic', 'general');

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
    '/img/logo/logo-llorona-blanco.webp';

  return (
    <div>
      {espa ? (
        <Head>
          <title>La Llorona Cantina | Restaurante Mexicano en Roma Condesa CDMX – Música en Vivo y Mezcal</title>
          <link rel="preload" as="image" href="/img/ambiente/mesa-tacos-domino.webp" fetchpriority="high" />
          <meta
            name="description"
            content="Cantina mexicana premium en Roma Condesa, CDMX. Tacos, aguachile, mezcal artesanal y música cubana en vivo. Reserva tu mesa hoy. ¡Piñata cumpleañera los jueves!"
          />
          <link rel="icon" href="../favicon.ico" />
          <meta property="og:title" content="La Llorona Cantina | Restaurante Mexicano Roma Condesa CDMX" />
          <meta
            property="og:description"
            content="Cantina mexicana premium en Roma Condesa, CDMX. Tacos, aguachile, mezcal artesanal y música cubana en vivo. Reserva tu mesa hoy."
          />
          <meta property="og:url" content="https://www.lalloronacantina.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cantina La Llorona" />
          <meta property="og:locale" content="es_MX" />
          <meta
            property="og:image"
            content="https://www.lalloronacantina.com/img/logo/logo-llorona-calaca.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />
          <meta property="og:image:alt" content="Logo de Cantina La Llorona" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="La Llorona Cantina | Restaurante Mexicano Roma Condesa CDMX" />
          <meta
            name="twitter:description"
            content="Cantina mexicana premium en Roma Condesa, CDMX. Tacos, aguachile, mezcal artesanal y música cubana en vivo. Reserva tu mesa hoy."
          />
          <meta
            name="twitter:image"
            content="https://www.lalloronacantina.com/img/logo/logo-llorona-calaca.png"
          />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>
      ) : (
        <Head>
          <title>Llorona Best Mexican cousine in town</title>
          <link rel="preload" as="image" href="/img/ambiente/mesa-tacos-domino.webp" fetchpriority="high" />
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
          <meta property="og:title" content="Cantina La Llorona | Mexican restaurant in Roma Condesa" />
          <meta
            property="og:description"
            content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant."
          />
          <meta property="og:url" content="https://www.lalloronacantina.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cantina La Llorona" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:image"
            content="https://www.lalloronacantina.com/img/logo/logo-llorona-calaca.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />
          <meta property="og:image:alt" content="Cantina La Llorona logo" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Cantina La Llorona | Mexican restaurant in Roma Condesa" />
          <meta
            name="twitter:description"
            content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant."
          />
          <meta
            name="twitter:image"
            content="https://www.lalloronacantina.com/img/logo/logo-llorona-calaca.png"
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
                <div className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                  EN VIVO
                </div>
                <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                  GRUPO DE SON CUBANO
                </div>
              </div>
            </div>

            <div className="py-[50px] px-2">
              <QuickInfo6 idioma={espa} />
            </div>
          </div>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                TESTIMONIO
              </div>
              <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                TESTIMONIO
              </div>
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
                <div className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                  RECOMMENDED
                </div>
                <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                  INTERNATIONAL MAGAZINES
                </div>
              </div>
            </div>

            <div className="py-[50px] px-2">
              <QuickInfo6 idioma={espa} />
            </div>
          </div>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <div className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                TESTIMONIALS
              </div>
              <div className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                TESTIMONIALS
              </div>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <QuickInfo5 idioma={espa} />
          </div>
        </>
      )}
      {/* <QuickInfo4 /> */}
      <InfoVisita />
      <Encontramos />
    </div>
  );
}
