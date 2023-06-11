import Link from 'next/link';
import React, { useEffect } from 'react'
import Calendario from '../components/Calendario/index';

import title from "../components/Main/title.module.css"
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel'


function Reserva() {

  useEffect(() => {
    fbq.event('reserva')
  }, [])
  

  const { espa } = useAppContext();
  const image1 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg"
  const image2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg"
  const image3 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg"
  const image4 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nin%CC%83as+hermosas+en+cantina+la+llorona.JPG"
  return (
    <>
      
      {espa ? 
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
        </Head> : 
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
          
        </Head>}
      <div className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG")`,
          backgroundSize: "cover",
          height: "90vh",
          backgroundPosition: "center",
          position: "relative"
        }}>
        {/* <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=267500287719039&ev=PageView" /> */}

        {/* <video autoPlay muted loop src={videoPort} /> */}

        {espa ? <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Los jueves piñata cumpleañera <br />con una botella de mezcal</b>
          </h3>

          {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
        </div> : 
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
            <h3 className=" font-weight-bold proximamente2 text-white">
              <b>On Thursdays, a birthday <br />piñata with a bottle of mezcal</b>
            </h3>

            {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
          </div>}

       
      </div>
      <Calendario />
      {espa ?
        <div className='container-llorona'>
        <div className="mt-2 px-2 py-2">
          <h4 className={title.fontTitleSub}>Celebra tu cumpleaños</h4>
          <h2 className={title.fontTitleline}>
            los jueves con nosotros
          </h2>
          <div className="linea"></div>
        </div>

        <div className="py-3 px-3 row-qh">
          <p className="text-center text-black sm:text-2xl text-xl">
            La <b>piñata cumpleañera</b> no tiene costo, y aplica todos los jueves si
            cumples años en el mes ❤️ y solo tienen que hacer reservación en
            cualquiera de nuestras redes sociales. Les regalamos dulces típicos
            mexicanos y una botella de nuestro mejor mezcal de la casa 🍶🥃
            madre cuishe el cual está elaborado artesanalmente.

            Este <b>mezcal premium </b>de la más alta calidad y está elaborado con un proceso artesanal proveniente de un gran maestro mezcalero de la Ciudad de Oaxaca, México.
          </p>
        </div>

        <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-10">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                  src={image1}
                  layout="fill"
                  className="group-hover:opacity-75"
                />
              </Link>

            </div>

            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                  src={image2}
                  layout="fill"
             
                  className="group-hover:opacity-75"
                />
              </Link>




            </div>


            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                  src={image3}
                  layout="fill"
       
                  className="group-hover:opacity-75"
                />
              </Link>
            </div>
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <Link href="/menullorona/Bebidas/Artesanal">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt=""
                  src={image4}
                  layout="fill"
         
                  className="group-hover:opacity-75"
                />
              </Link>
            </div>

          </div>
        </div>



        
      </div> : 
        <div className='container-llorona'>
          <div className="mt-2 px-2 py-2">
            <h4 className={title.fontTitleSub}>Celebrate your birthday</h4>
            <h2 className={title.fontTitleline}>
              on Thursdays with 
            </h2>
            <div className="linea"></div>
          </div>

          <div className="py-3 px-3 row-qh">
            <p className="text-center text-black sm:text-2xl text-xl">
              The <b>birthday piñata </b>is free of charge and is available every <b>Thursday </b>if you celebrate your birthday within the month ❤️. All you have to do is make a reservation through any of our social media platforms. We'll gift you traditional Mexican candies and a bottle of our finest house Mezcal, Madre Cuishe 🍶🥃, which is crafted by hand.

              <b>This premium Mezcal </b>is of the highest quality and is produced through an artisanal process by a master Mezcal distiller from Oaxaca City, Mexico.
              
              
            </p>
          </div>

          <div className="max-w-3xl mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-10">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt=""
                    src={image1}
                    layout="fill"
                
                    className="group-hover:opacity-75"
                  />
                </Link>

              </div>

              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt=""
                    src={image2}
                    layout="fill"
                  
                    className="group-hover:opacity-75"
                  />
                </Link>




              </div>


              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Link href="/menullorona/Alimentos">
                  <img style={{ width: "100%", height: "100%", objectFit:"cover" }}
                    alt=""
                    src={image3}
                    layout="fill"
                    
                    className="group-hover:opacity-75"
                  />
                </Link>
              </div>
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Link href="/menullorona/Bebidas/Artesanal">
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt=""
                    src={image4}
                    layout="fill"
                
                    className="group-hover:opacity-75"
                  />
                </Link>
              </div>

            </div>
          </div>



          {/* <div
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className="py-3"
        >
          <Link href="/menullorona/menualimentos">
            <div className="py-1">
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG"
                alt="Tacos deliciosos de Cochinita Pibil"
              />
              <p className="textoFotosHome">Festeja con Nosotros</p>
            </div>
          </Link>
          <Link href="/menullorona/menualimentos">
            <div className="py-1">
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninapinata.JPG"
                alt="Aguachile Verde Camarón"
              />
              <p className="textoFotosHome">
                Muchas Sorpresas
              </p>
            </div>
          </Link>
          <Link href="/menullorona/menualimentos">
            <div className="py-1">
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/IMG_9585.jpg"
                alt="Tacos deliciosos de Cochinita Pibil"
              />
              <p className="textoFotosHome">
                Regalos
                Únicos
              </p>
            </div>
          </Link>
          <Link href="/menullorona/menubebidas/artesanal">
            <div className="py-1">
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninas4pinata.JPG"
                alt="Pierde Almas con Mezcal"
              />
              <p className="textoFotosHome">
                Fiesta en grande


              </p>
            </div>
          </Link>
        </div> */}
        </div>}
      




    </>
  );
}
const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG",
    title: "Piñata cumpleañera",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "",
    title: "novios",
  },
  {
    img: "",
    title: "Pierde almas",
  },
  {
    img: "",
    title: "amigas",
    cols: 2,
  },
];

export default Reserva