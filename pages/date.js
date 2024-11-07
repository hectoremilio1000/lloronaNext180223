import Head from 'next/head';
import QuickInfo from '../components/QuickinfoGeneral';

// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useAppContext } from '../components/context/Context';
import Encontramos from '../components/EncontramosIngles/index';
import * as fbq from '../lib/fpixel';
import Calendario from '../components/CalendarioIngles';
import Slider from '../components/SlidersIngles/Slider';
import NavBar from '../components/NavBarHome/NavBarHome';
import QuickInfo5 from '../components/QuickInfo5';
import QuickInfo6 from '../components/QuickInfo6';
import MySwiper from '../components/SwiperGeneral';

export default function Home() {
  const BannerImages = [
    {
      imagen1:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)',

      imagen2:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)',
      imagen3:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)',
      imagen4:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)',
      imagen5:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)',
      imagen6:
        'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )',
    },
  ];

  const dateInfo = {};

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
  const { locale } = router;
  let HeaderComponent;
  const logo2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo_page_altaNUEVO_blanco.png';

  const { ingles, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  return (
    <div>
      <Head>
        <title>
          La Llorona - The Perfect Spot for Your Next Date in Mexico City
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
          content="Looking for a unique date spot in Mexico City? Discover La Llorona, the perfect place to enjoy authentic Mexican cuisine and vibrant cocktails in the heart of Roma Condesa. Ideal for users of Bumble, Tinder, and other dating apps"
        />
        <meta
          name="keywords"
          content="date spot in Mexico City, Bumble date, Tinder date, Hinge date, OkCupid date, Coffee Meets Bagel date, Happn date, The League date, authentic Mexican food, Roma Condesa, best date spots in CDMX"
        />

        <meta
          name="of:title"
          content="La Llorona - The Perfect Spot for Your Next Date in Mexico City"
        />
        <meta
          name="og:description"
          content="Visit La Llorona for a unique date experience in Mexico City. Perfect for Bumble, Tinder, and other dating app users, our cantina offers a vibrant atmosphere and authentic Mexican cuisine."
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

      <NavBar />
      <>
        <div>{/* <MySwiper BannerImages={BannerImages} /> */}</div>
      </>

      <div className="overflow-hidden bg-black">
        <div className="inline-block whitespace-nowrap animate-marqueeleft">
          <h1 className="inline-block text-red-500 text-[70px] md:text-[100px] font-bold px-4 py-2">
            The Perfect Spot for Your Next Date
          </h1>
          <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2">
            The Perfect Spot for Your Next Date
          </h1>
        </div>
      </div>

      <QuickInfo Info={dateInfo} />
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

      <Encontramos />
    </div>
  );
}
