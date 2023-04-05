import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"
import Link from 'next/link';
import image1 from '../../public/images/home/quickinfo1/mexican-shredded-pork-recipes-900x900 (1).jpg'

import image2 from '../../public/images/home/quickinfo1/aguachileVerde (1).jpg'
import image3 from '../../public/images/home/quickinfo1/HAMBURGUESA_jack_suizo (2).jpeg'
import image4 from '../../public/images/home/quickinfo1/IMG_8064.jpg'



function QuickInfo() {
  return (
    <div className="container-llorona px-2">
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
        Atrévete a probar las hamburguesas más premiadas de todo México, sobre toda la galardonada <b>Oaxaca Burguer</b>. Toma las pocimas de la llorona preparadas con <b>Pulque, Tepache o Mezcal</b>, y deleítate con nuestra exquisita selección de
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
            <p className="textoFotosHome text-black">Hamburguesas deliciosas = <br/><b>Clientes felices</b></p>
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
                <br/>hombres sonrientes
              </b>


            </p>
          </div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="reserva">
          <button type="button" className="buttonComponente">
            ¡Reserva ya!
          </button>
        </Link>
      </div>
    </div>

  );
}

export default QuickInfo