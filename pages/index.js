import Head from "next/head";
import Link from "next/link";
import QuickInfo from '../components/Quickinfo/index';
import Image from 'next/image'
import logo2 from '../public/images/nombrelogo.png'
import QuickInfo2 from '../components/QuickInfo2/index';
import QuickInfo3 from '../components/QuickInfo3/index';
import MenuDetail from "../components/MenuDetail";
import Promociones from "../components/Promociones";
// import videoPort from '../data/assets/portada.mp4'

export default function Home() {
  return (
    <div>
      <Head>
        <title>La Llorona</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="d-flex subContenedor1Banner banner bannerHome">
        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <Image src={logo2} width={600}
            alt="llorona" priority />
          {/* <h3 className=" font-weight-bold text-3xl md:text-4xl uppercase font-black text-center text-white">
            Mexican Experience
          </h3> */}

          {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
        </div>
      </div>
      <MenuDetail />
      {/* <Promociones /> */}
      <QuickInfo />
      <QuickInfo2 />
      <QuickInfo3 />
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
