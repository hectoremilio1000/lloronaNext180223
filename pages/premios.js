import React from 'react'

import Link from 'next/link';
import PremiosInfo from '../components/Premios/PremiosInfo';
import title from "../components/Main/title.module.css"
import card from "../components/Main/card.module.css"



function Mezcal() {
    return (
        <div className='pb-4'>
            <div className="d-flex subContenedor1Banner bannerPremios banner">

                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
                    <h3 className=" font-weight-bold proximamente2 text-white">
                        ¡Somos galardonados <br /> con el premio a la mejor 
                        hamburguesa 2023!
                    </h3>

                    <div className="subSubDiv1Banner">
                        <Link href="/reserva">
                            <button type="button" className="buttonComponente">
                                ¡Reserva!
                            </button>
                        </Link>
                    </div>

                   
                </div>
            </div>
            <PremiosInfo />
            <div
                style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
            >

                <Link href="/menullorona/Alimentos">
                    <div>
                        <img
                            className="imagenAbajoTexto1Home"
                            src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/hamburguesas/1528926142blue-cheese-and-caramelized-onion-burgers-large.jpg"
                            alt="Premio pruébala"
                        />
                        <p className="textoFotosHome text-black">Hamburguesa Caramelo <br/>con queso azul</p>
                    </div>



                </Link>
                
                <Link href="/menullorona/Alimentos">
                    <div className={card.cardBox}>
                        <img
                            className="imagenAbajoTexto1Home"
                            src="https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG"
                            alt="Hamburguesa deliciosa Llorona"
                        />
                        <p className="textoFotosHome text-black">
                            Hamburguesa Méxicana <br />
                            con especias mexicanas
                        </p>
                    </div>
                </Link>
              
                <Link href="/menullorona/Alimentos">
                    <div className={card.cardBox}>
                        <img
                            className="imagenAbajoTexto1Home"
                            src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/hamburguesaChile.jpg"
                            alt="Hamburguesa chile llorona"
                        />
                        <p className="textoFotosHome text-black">
                            Hamburguesa Llorona <br />
                            con Chile Jalapeño
                        </p>
                    </div>
                </Link>
            </div>
           
            <div className="subSubDiv1Banner">
                <Link href="/reserva">
                    <button type="button" className="buttonComponente">
                        ¡Reserva!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Mezcal