import Link from 'next/link';
import React, { useEffect } from 'react'
import Calendario from '../components/Calendario/index';

import title from "../components/Main/title.module.css"
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import YouTube from 'react-youtube';


function Reserva() {

  // useEffect(() => {
  //   fbq.event('reserva')
  // }, []);

  const opts = {
    height: '350',
    width: '300',


    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,

    },
  };

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  

  const { espa } = useAppContext();
  const image1 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg"
  const image2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg"
  const image3 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg"
  const image4 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nin%CC%83as+hermosas+en+cantina+la+llorona.JPG"

  const image5 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg"
  const image6 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg"
  const image7 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg"
  const image8 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nin%CC%83as+hermosas+cantina+llorona+mexico+cantina.JPEG"


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
          
          <>
            <div
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
            >

              
                <div>
                <Link href="/reserva">
                  <img
                    className="imagenReserva"
                    src={image1}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Mixología mexicana <br /> contemporánea
                  </p>
                </Link>
                </div>
              

              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image2}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Piñata cumpleañera<br /> con mezcal
                  </p>
                </div>
              </Link>


               <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image3}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                   Disfruta, baile <br />y festeja
                  </p>
                </div>
              </Link>



              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image4}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Grandes artistas <br />aman nuestro lugar
                  </p>
                </div>
              </Link>
            </div>




            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/reserva">
                <button className="buttonComponente" >
                  ¡Reserva ya!
                </button>
              </Link>
            </div>
          </>

        
          
          <>
            <h4 className={title.fontTitleSub}>Grupo de Salsa en Vivo</h4>
            <h2 className={title.fontTitleline}>
              Baila y festeja con Nosotros
            </h2>
            <div className="py-3 px-3 row-qh">
              <p className="text-center text-black sm:text-2xl text-xl">
                Si te gustó lo que viste en las redes y en nuestra página, te encantará la <b>experiencia en vivo aún más</b>. Cada noche, nuestro acogedor restaurante se llena de vibrante música de salsa, creando un ambiente único y emocionante que invita a todos a unirse en la pista de baile. Nuestro menú ofrece una variedad de delicias culinarias que deleitarán tu paladar mientras disfrutas del espectáculo en vivo. Además, nuestra amplia selección de vinos y cócteles te asegurará una noche inolvidable. Te <b>recomendamos hacer una reserva pronto </b> ya que nuestros eventos de salsa suelen ser muy populares y queremos asegurarnos de que tengas un lugar reservado. ¿Qué te parece si te ayudamos a asegurar tu mesa para la próxima noche de salsa?"
              </p>
            </div>

            <>
              <div
                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
              >

               
                <div>
                  <Link href="/reserva">
                    <YouTube videoId="8mRlH_RxiP8" opts={opts} onReady={videoOnReady} />
                    <p className="textoFotosHome text-black">
                      Grandes noches de<br /> grupos de salsa en vivo
                    </p>
                  </Link>
                  </div>
              

                <Link href="/reserva">
                  <div>
                    <img
                      className="imagenReserva"
                      src={image6}
                      alt="Música en vivo"
                    />
                    <p className="textoFotosHome text-black">
                      Mixología que cautiva <br />y enamora
                    </p>
                  </div>
                </Link>


                <Link href="/reserva">
                  <div>
                    <YouTube videoId="kA1hP5nFRYM" opts={opts} onReady={videoOnReady} />
                    <p className="textoFotosHome text-black">
                      Parceros aquí<br /> mucha bachata y salsa
                    </p>
                  </div>
                </Link>



                <Link href="/reserva">
                  <div>
                    <img
                      className="imagenReserva"
                      src={image8}
                      alt="Música en vivo"
                    />
                    <p className="textoFotosHome text-black">
                      Ven a disfrutar <br />de tardes cautivadoras
                    </p>
                  </div>
                </Link>
              </div>




              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/reserva">
                  <button className="buttonComponente" >
                    ¡Reserva ya!
                  </button>
                </Link>
              </div>
            </>
            
          </>


        
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

          <>
            <div
              style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
            >

              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image1}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Contemporary <br/> mexican mixology
                  </p>
                </div>
              </Link>

              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image2}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Birthday piñata<br /> with a bottle of mezcal
                  </p>
                </div>
              </Link>


              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image3}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Enjoy, dance <br />and celebrate
                  </p>
                </div>
              </Link>



              <Link href="/reserva">
                <div>
                  <img
                    className="imagenReserva"
                    src={image4}
                    alt="Música en vivo"
                  />
                  <p className="textoFotosHome text-black">
                    Great artists <br />love our place
                  </p>
                </div>
              </Link>
            </div>




            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/reserva">
                <button className="buttonComponente" >
                  ¡Reserva ya!
                </button>
              </Link>
            </div>
          </>



          <>
            <h4 className={title.fontTitleSub}>Live Salsa Band</h4>
            <h2 className={title.fontTitleline}>
              Dance and Celebrate with Us
            </h2>
            <div className="py-3 px-3 row-qh">
              <p className="text-center text-black sm:text-2xl text-xl">
                If you liked what you saw on social media and on our page, you will love the <b>live experience even more</b>. Every night, our welcoming restaurant fills with vibrant salsa music, creating a unique and exciting atmosphere that invites everyone to join the dance floor. Our menu offers a variety of culinary delights that will tantalize your palate while you enjoy the live show. In addition, our wide selection of wines and cocktails will ensure you have an unforgettable night. We <b>recommend making a reservation soon</b> as our salsa events tend to be very popular and we want to make sure you have a spot reserved. How about we help you secure your table for the next salsa night?
              </p>
            </div>

            <>
              <div
                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
              >

                <Link href="/reserva">
                  <div>
                    <YouTube videoId="8mRlH_RxiP8" opts={opts} onReady={videoOnReady} />
                    <p className="textoFotosHome text-black">
                      Great nights of <br/>live salsa bands
                    </p>
                  </div>
                </Link>

                <Link href="/reserva">
                  <div>
                    <img
                      className="imagenReserva"
                      src={image6}
                      alt="Música en vivo"
                    />
                    <p className="textoFotosHome text-black">
                      Mixology that captivates <br />and falls in love 
                    </p>
                  </div>
                </Link>


                <Link href="/reserva">
                  <div>
                    <YouTube videoId="kA1hP5nFRYM" opts={opts} onReady={videoOnReady} />
                    <p className="textoFotosHome text-black">
                      Partners here<br /> lots of bachata and salsa
                    </p>
                  </div>
                </Link>



                <Link href="/reserva">
                  <div>
                    <img
                      className="imagenReserva"
                      src={image8}
                      alt="Música en vivo"
                    />
                    <p className="textoFotosHome text-black">
                      Come and enjoy <br />captivating evenings
                    </p>
                  </div>
                </Link>
              </div>




              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/reserva">
                  <button className="buttonComponente" >
                    ¡Reserva ya!
                  </button>
                </Link>
              </div>
            </>

          </>
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