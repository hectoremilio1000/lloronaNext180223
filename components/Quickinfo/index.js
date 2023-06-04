import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"
import Link from 'next/link';
import image1 from '../../public/images/home/quickinfo1/mexican-shredded-pork-recipes-900x900 (1).jpg'

import image2 from '../../public/images/home/quickinfo1/aguachileVerde (1).jpg'
import image3 from '../../public/images/home/quickinfo1/HAMBURGUESA_jack_suizo (2).jpeg'
import image4 from '../../public/images/home/quickinfo1/IMG_8064.jpg'
import AppContextProvider, { useAppContext } from '../context/Context';
import * as fbq from '../../lib/fpixel'



function QuickInfo() {

  const handleClick = () => {
    fbq.event('track', 'Reserva')
  }

  const { ingles, espa } = useAppContext();


  return (
    <>
      {espa ? <div className="container-llorona px-2">
        <div>
          <h1 className={title.fontTitlemain}>La Llorona Xperience</h1>
        </div>
        <div className='row-qh'>
          <h4 className={title.fontTitleSub}>¿Cómo ser un</h4>
          <h2 className={title.fontTitleline}>Mexicano?</h2>
          <div className="linea"></div>
        </div>


        <div className="py-3 px-3 row-qh">
          <p className="text-center sm:text-2xl text-xl text-black">
            Atrévete a probar una experiencia mexicana diferente. Somos un restaurante con una propuesta inovadora que fusiona <b>la cocina urbana contemporánea con la vida de la cantina Mexicana</b>. Prueba las hamburguesas más premiadas de todo México, en especial la galardonada <b>Miss Jack</b> que tiene una torre de aros de cebolla y un fondue de Quesos. Toma las pocimas (mixología) de la llorona, preparadas con <b>Pulque, Tepache o Mezcal</b>, y deleítate con nuestra exquisita selección de
            <b> Cervezas Artesanales Mexicanas</b>.
          </p>
        </div>




        <div
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
        >
          <Link href="/menullorona/Alimentos">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG"
                alt="Tacos deliciosos de Cochinita Pibil"
              />
              <p className="textoFotosHome text-black">
                La más galardonada <br />
                <b> Oaxaca Burguer</b>
              </p>
            </div>
          </Link>
          <Link href="/menullorona/Alimentos">
            <div>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/FotosBurguer/IMG_2177.jpg"
                alt="Las hamburguesas más deliciosas CDMX LLORONA"
              />
              <p className="textoFotosHome text-black">Hamburguesas deliciosas = <br /><b>Clientes felices</b></p>
            </div>



          </Link>
          <Link href="/menullorona/Alimentos">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/FotosBurguer/IMG_2178.jpg"
                alt="Las hamburguesas más ricas"
              />
              <p className="textoFotosHome text-black">
                Las más ricas hamburguesas <br />
                <b>de CDMX</b>
              </p>
            </div>
          </Link>

          <Link href="/menullorona/Bebidas/Artesanal">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/FotosBurguer/IMG_2179.jpg"
                alt="Pierde Almas con Mezcal"
              />
              <p className="textoFotosHome text-black">
                Hamburguesas Ricas hacen<b>
                  <br />hombres sonrientes
                </b>


              </p>
            </div>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="reserva">
            <button className="buttonComponente" onClick={handleClick}>
              ¡Reserva ya!
            </button>
          </Link>
        </div>
      </div> : 
      
        
        <div className="container-llorona px-2">
          <div>
            <h1 className={title.fontTitlemain}>Llorona Xperience</h1>
          </div>
          <div className='row-qh'>
            <h4 className={title.fontTitleSub}>
              How to be a</h4>
            <h2 className={title.fontTitleline}>Mexican?</h2>
            <div className="linea"></div>
          </div>


          <div className="py-3 px-3 row-qh">
            <p className="text-center sm:text-2xl text-xl text-black">
              Experience the true spirit of Mexico at La Llorona Restaurant! To immerse yourself in the authentic Mexican culture, you must come and savor our exquisite dishes. Taste our mouth-watering <b>Suadero tacos</b>, a delectable treasure from Mexico City, or indulge in traditional Mexican <b>Pulque, Mezcal or Tepache </b>. And if you're looking for a unique twist on a classic guacamole, try our special <b>Guacamole with grasshoppers and our Oaxacan peanuts, brought to you straight from Oaxaca</b>. Don't miss the chance to awaken your senses with the vibrant flavors of Mexico!
            </p>
          </div>




          <div
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
          >
            <Link href="/menullorona/Alimentos">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/receta-de-guacamole-con-chapulines.jpg"
                  alt="guacamole con chapulines"
                />
                <p className="textoFotosHome text-black">
                  Guacamole with <br />
                  <b> Grasshoppers</b>
                </p>
              </div>
            </Link>
            <Link href="/menullorona/Alimentos">
              <div>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/tacosEstiloBaja.png"
                  alt="Baja California style shrimp tacos"
                />
                <p className="textoFotosHome text-black">Baja California style <br /><b>shrimp Tacos</b></p>
              </div>



            </Link>
            <Link href="/menullorona/Alimentos">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/tacosdesuadero2.jpg"
                  alt="Tacos suadero"
                />
                <p className="textoFotosHome text-black">
                  Tacos Suadero = <br />
                  <b>Happy Clients</b>
                </p>
              </div>
            </Link>

            <Link href="/menullorona/Bebidas/Artesanal">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/hamburguesaLlorona.jpg"
                  alt="Llorona Burger with a jalapeño"
                />
                <p className="textoFotosHome text-black">
                  Llorona Burger<b>
                    <br />with a jalapeño
                  </b>

                </p>
              </div>
            </Link>
            <Link href="/menullorona/Bebidas/Artesanal">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/hawaiian-pizza.jpg"
                  alt="Pizza hawaiana with sesame seeds"
                />
                <p className="textoFotosHome text-black">
                  Pizza hawaiana<b>
                    <br />with sesame seeds
                  </b>

                </p>
              </div>
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="reserva">
              <button type="button" className="buttonComponente" onClick={handleClick}>
                Book now!
              </button>
            </Link>
          </div>
        </div>}
    
    
    </>
  );
}

export default QuickInfo