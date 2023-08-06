import Link from 'next/link';
import React, { useEffect } from 'react'
import Calendario from '../components/Calendario/index';

import title from "../components/Main/title.module.css"
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import YouTube from 'react-youtube';


function Migologia() {

    useEffect(() => {
        fbq.event('mixologia')
    }, []);

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
    const image1 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/nin%CC%83as+tequila+mezcal+pulque.jpg"
    const image2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/llorona+mixologia+cdmx+.PNG"
    const image3 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/mixologia+sin+alcohol+modelo+cdmx+roma+condesa+llorona.jpg"
    const image4 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/amigas+disfrutando+mixologia+cdmx+bares.PNG"

    const image5 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/mixologia+exotica+mexico+ciudad.PNG"
    const image6 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/tragos+calavera+aperol+fresa.jpg"
    const image7 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mazapan+matini+nin%CC%83as.jpg"
    const image8 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/lugar+sorprendente+coctel+mixology.jpg"


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
                    backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/mixologia+tragos+roma+condesa+mujer+cdmx+llorona.PNG")`,
                    backgroundSize: "cover",
                    height: "90vh",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: "relative"
                }}>
                {/* <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=267500287719039&ev=PageView" /> */}

                {/* <video autoPlay muted loop src={videoPort} /> */}

                {espa ? <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
                    <h3 className=" font-weight-bold proximamente2 text-white">
                        <b>Mixología mexicana <br />utilizando ingredientes y destilados tradicionales de México</b>
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
                            <b>Mexican mixology <br />using traditional ingredients and distillates from Mexico</b>
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
            
            {espa ?
                <div className='container-llorona'>
                    <div className="mt-2 px-2 py-2">
                        <h4 className={title.fontTitleSub}>Bienvenidos amantes</h4>
                        <h2 className={title.fontTitleline}>
                            de la mixología
                        </h2>
                        <div className="linea"></div>
                    </div>

                    <div className="py-3 px-3 row-qh">
                        <p className="text-center text-black sm:text-2xl text-xl">
                            Nuestra barra de mixología no es simplemente un lugar para disfrutar de una bebida, es un <b>rincón donde la cultura mexicana y la innovación </b>se encuentran para celebrar la magia de nuestros sabores autóctonos. Nos especializamos en utilizar destilados tradicionales mexicanos, como <b>el tequila, el mezcal y el tepache,</b> y los transformamos en cócteles excepcionales mediante técnicas modernas y vanguardistas.
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
                                        style={{objectPosition:"center"}}
                                        src={image1}
                                        alt="mixologia mexicana cdmx"
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
                                        alt="mezcal mexico"
                                    />
                                    <p className="textoFotosHome text-black">
                                        Pierde<br />Almas con mezcal
                                    </p>
                                </div>
                            </Link>


                            <Link href="/reserva">
                                <div>
                                    <img
                                        className="imagenReserva"
                                        src={image3}
                                        alt="Música en vivo"
                                        style={{ objectPosition: "center" }}
                                    />
                                    <p className="textoFotosHome text-black">
                                        Mixología <br />sin alcohol
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
                        <h4 className={title.fontTitleSub} style={{marginTop:"20px"}}>Cada coctel es una historia</h4>
                        <h2 className={title.fontTitleline}>
                            que plasma México 
                        </h2>
                        <div className="linea"></div>
                        <div className="py-3 px-3 row-qh">
                            <p className="text-center text-black sm:text-2xl text-xl">
                                Imagínense un lugar donde <b>cada trago es una historia</b>, una narración que captura la esencia y la riqueza de nuestra tierra. Imagínense los ricos sabores de los agaves, las técnicas de destilación que han sido transmitidas de generación en generación, todo mezclado con toques contemporáneos y creatividad sin límites. Esa es la experiencia que les ofrecemos aquí, en la Llorona.

                                <br /><br />
                                Permítanos llevarles en un <b>viaje culinario que trasciende lo convencional</b>. Nuestros bartenders son artistas que pintan con sabores y aromas, mezclando lo familiar con lo sorprendente, creando cócteles que encantarán tanto a los paladares tradicionales como a los más aventureros.
                            </p>
                        </div>

                        <>
                            <div
                                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
                            >


                                <div>
                                    <Link href="/reserva">
                                        <div>
                                            <img
                                                className="imagenReserva"
                                                src={image5}
                                                alt="Mixologia que sorprende"
                                                style={{ objectPosition: "center" }}
                                            />
                                            <p className="textoFotosHome text-black">
                                                Mixología que <br />soprende paladares
                                            </p>
                                        </div>
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
                                        <img
                                            className="imagenReserva"
                                            src={image7}
                                            alt="mixología mexicana"
                                        />
                                        <p className="textoFotosHome text-black">
                                            Tardes de mixología <br />de autor
                                        </p>
                                    </div>
                                </Link>



                                <Link href="/reserva">
                                    <div>
                                        <img
                                            className="imagenReserva"
                                            src={image8}
                                            alt="sabores increíbles"
                                        />
                                        <p className="textoFotosHome text-black">
                                            Cuidando sabores<br />y presentaciones
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
                        <h4 className={title.fontTitleSub}>Welcome lovers</h4>
                        <h2 className={title.fontTitleline}>
                            of mixology
                        </h2>
                        <div className="linea"></div>
                    </div>

                    <div className="py-3 px-3 row-qh">
                        <p className="text-center text-black sm:text-2xl text-xl">
                            Our mixology bar is not just a place to enjoy a drink; it is a corner <b>where Mexican culture </b>and innovation come together to celebrate the magic of our native flavors. We specialize in using traditional Mexican spirits, such as <b>tequila, mezcal, and tepache, </b>and transform them into exceptional cocktails through modern and cutting-edge techniques.
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
                                        style={{ objectPosition: "center" }}
                                        src={image1}
                                        alt="mexican mixology cdmx"
                                    />
                                    <p className="textoFotosHome text-black">
                                        contemporary mexican <br/>mixology
                                    </p>
                                </Link>
                            </div>


                            <Link href="/reserva">
                                <div>
                                    <img
                                        className="imagenReserva"
                                        src={image2}
                                        alt="mezcal mexico"
                                    />
                                    <p className="textoFotosHome text-black">
                                        Lose<br />Souls with mezcal
                                    </p>
                                </div>
                            </Link>


                            <Link href="/reserva">
                                <div>
                                    <img
                                        className="imagenReserva"
                                        src={image3}
                                        alt="mixologia sin alcohol"
                                        style={{ objectPosition: "center" }}
                                    />
                                    <p className="textoFotosHome text-black">
                                        Mixology <br />without alcohol
                                    </p>
                                </div>
                            </Link>



                            <Link href="/reserva">
                                <div>
                                    <img
                                        className="imagenReserva"
                                        src={image4}
                                        alt="great artists love our place"
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
                                    ¡Book now!
                                </button>
                            </Link>
                        </div>
                    </>



                    <>
                        <h4 className={title.fontTitleSub} style={{ marginTop: "20px" }}>Every cocktail is a story</h4>
                        <h2 className={title.fontTitleline}>
                            that embodies Mexico
                        </h2>
                        <div className="linea"></div>
                        <div className="py-3 px-3 row-qh">
                            <p className="text-center text-black sm:text-2xl text-xl">
                                <b>Imagine a place where each drink is a story</b>, a narrative that captures the essence and richness of our land. Picture the rich flavors of agaves, the distillation techniques passed down from generation to generation, all blended with contemporary touches and boundless creativity. That's the experience we offer here, at La Llorona.

                                <br/><br/>Let us take you on a culinary journey that transcends the conventional. Our <b>bartenders are artists </b>who paint with flavors and aromas, mixing the familiar with the surprising, creating cocktails that will delight both traditional palates and the most adventurous ones.
                            </p>
                        </div>

                        <>
                            <div
                                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
                            >


                                <div>
                                    <Link href="/reserva">
                                        <div>
                                            <img
                                                className="imagenReserva"
                                                src={image5}
                                                alt="Surprising mixology"
                                                style={{ objectPosition: "center" }}
                                            />
                                            <p className="textoFotosHome text-black">
                                                Mixology that <br />surprises palates
                                            </p>
                                        </div>
                                    </Link>
                                </div>


                                <Link href="/reserva">
                                    <div>
                                        <img
                                            className="imagenReserva"
                                            src={image6}
                                            alt="Mixology that captivates"
                                        />
                                        <p className="textoFotosHome text-black">
                                            Mixology that captivates <br />and falls in love
                                        </p>
                                    </div>
                                </Link>


                                <Link href="/reserva">
                                    <div>
                                        <img
                                            className="imagenReserva"
                                            src={image7}
                                            alt="Mexican mixology"
                                        />
                                        <p className="textoFotosHome text-black">
                                            Afternoons of <br/>author mixology
                                        </p>
                                    </div>
                                </Link>



                                <Link href="/reserva">
                                    <div>
                                        <img
                                            className="imagenReserva"
                                            src={image8}
                                            alt="amazing flavors"
                                        />
                                        <p className="textoFotosHome text-black">
                                            Taking care of flavors<br />and presentations
                                        </p>
                                    </div>
                                </Link>
                            </div>




                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Link href="/reserva">
                                    <button className="buttonComponente" >
                                        ¡Book now!
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

export default Migologia;