import Head from "next/head";
import QuickInfo from '../components/Quickinfo/index';
import QuickInfo2 from '../components/QuickInfo2/index';
import QuickInfo3 from '../components/QuickInfo3/index';
import MenuDetail from "../components/MenuDetail";
import Promociones from "../components/Promociones";
// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from 'next/router';
import HeaderEn from '../components/Header-en/HeaderEn';
import HeaderEs from '../components/Header-es/Header-es';
import { useAppContext } from "../components/context/Context";
import Encontramos from "../components/Encontramos";
import Resena from '../components/Resena/index';
import * as fbq from '../lib/fpixel'

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  let HeaderComponent;
  const logo2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo_page_altaNUEVO_blanco.png"

  const { ingles, espa } = useAppContext();


  return (
    <div>
      
    
      {espa ?
        <Head>
        <title>La Llorona</title>
        <link rel="icon" href="../favicon.ico" />
        <meta name="of:title" content="Llorona" />
        <meta name="of:description" content="Somos un restaurante mexicano con buen son" />
        <meta name="og:description" content="Somos un restaurante mexicano con buen son" />
        <meta property="og:url" content="https://lalloronacantina.com/" />
        <meta name="og:title" content="La Llorona" />
        <meta property="og:type" content="La Llorona" />
        <meta property="og:image" content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png" />
        <link rel="apple-touch-icon" href="../logo192.png" />
        <link rel="manifest" href="../manifest.json" />
      </Head>
        :
        <Head>
          <title>Llorona Best Mexican cousine in town</title>
          <link rel="alternate" hrefLang="en" href="https://lalloronacantina.com" />
          <link rel="alternate" hrefLang="es" href="https://lalloronacantina.com" />
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Llorona" />
          <meta name="of:description" content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant." />
          <meta name="og:description" content="Experience the best cuisine in Mexico City in Roma Condesa at our restaurant." />
          <meta property="og:url" content="https://lalloronacantina.com/" />
          <meta name="og:title" content="Llorona" />
          <meta property="og:type" content="Llorona" />
          <meta property="og:image" content="https://imagenesrutalab.s3.amazonaws.com/llorona/logo/logo_alta_sin_nombre.png" />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>}
      
      {/* <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=267500287719039&ev=PageView" /> */}
      {
        espa ? <div className="d-flex subContenedor1Banner bannerHomeFinal banner">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
            <img src={logo2} width={450}
              alt="llorona" className="mt-5" />
          </div>
        </div> : 
          <div className="d-flex subContenedor1Banner bannerHomeIngles banner">
            <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
              <img src={logo2} width={450}
                alt="llorona" className="mt-5" />
            </div>
          </div>
      }
      
      {/* <video autoPlay muted loop src={videoPort} /> */}
      {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
      {/* <div className="d-flex subContenedor1Banner banner bannerHome">
        <video autoPlay muted loop src={videoPort} /> 

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <img src={logo2} width={450}
            alt="llorona" className="mt-5"  />
           <h3 className=" font-weight-bold text-3xl md:text-4xl uppercase font-black text-center text-white">
            Mexican Experience
          </h3>

           <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <MenuDetail /> */}
      {/* <Promociones /> */}
      <QuickInfo />
      <QuickInfo2 />
      <QuickInfo3 />
      {/* <Resena/> */}
      <Encontramos/>
      {/* <div className="">
        <div>
          <h4 className="text-center text-emerald-300 text-3xl md:text-4xl m-0">Ubicación</h4>
          <h2 className="text-center text-3xl md:text-5xl capitalize">
            de esta gran experiencia
          </h2>
          <div className="linea"></div>
        </div>

        <div className="py-3 px-3">
          <p className="text-center text-black sm:text-2xl text-xl">
            Alvaro obregón 308 Roma Condesa CDMX México
          </p>

          <div className="subSubDiv1Banner py-3">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}
