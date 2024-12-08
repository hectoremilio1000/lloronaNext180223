import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../components/context/Context';
import { FB_PIXEL_ID } from '../lib/fpixel';
import NavBar from '../components/NavBarEs/NavBarEs';
import Script from 'next/script';
import MySwiper from '../components/SwiperCantina';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CalendarioInversion from '../components/CalendarioInversion';

function Recursoshumanos() {
  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaEspa]);

  const bannerData = espa
    ? {
        title: 'Únete al mejor equipo',
        imageURL:
          'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/recursoshumanos/recursos%2Bhumanos%2Bllorona%2Bcantina.jpg',
      }
    : {
        title: 'From the sea to your palate',
        imageURL:
          'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg',
      };

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

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
            <MySwiper title={bannerData.title} imageURL={bannerData.imageURL} />
          </div>
        </>
      ) : (
        <>
          <div>
            <MySwiper />
          </div>
        </>
      )}
      <>
        {espa ? (
          <div className="w-full max-w-[1184px] ">
            <div className="w-full flex flex-col justify-center">
              {/* <h2 className="font-bold text-2xl">No solo somos</h2> */}
              <h1 className="text-2xl md:text-5xl font-bold text-center md:text-center">
                Bienvenidos a Cantina la Llorona
              </h1>

              <p className="text-start sm:text-2xl text-xl text-black md:text-left px-8">
                Para empezar tu proceso de contratación...
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[1184px] py-[80px] px-[20px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="w-full flex flex-col justify-center">
              {/* <h2 className="font-bold text-2xl">No solo somos</h2> */}
              <h1 className="text-2xl md:text-5xl font-bold">
                Welcome to Cantina La Llorona
              </h1>

              {/* <div className="h-2 bg-white w-full rounded"></div> */}

              <p className="text-start sm:text-2xl text-xl text-black">
                A combination of tradition and modernity in a cozy space.
                Located in front of Parque España in the heart of Roma Condesa,
                we offer a<b> unique sensory journey</b>, making each bite and
                each sip an unforgettable symphony of flavors
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 30,
              }}
            >
              <Link href="/reserva">
                <button className="buttonComponente" onClick={handleClick}>
                  ¡Book now!
                </button>
              </Link>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Recursoshumanos;
