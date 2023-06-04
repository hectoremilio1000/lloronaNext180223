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

  const handleClick = () => {
    fbq.event('Reserva')
  }

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
      
     
      <QuickInfo />
      <QuickInfo2 />
      <QuickInfo3 />
    
      <Encontramos/>
     
    </div>
  );
}
