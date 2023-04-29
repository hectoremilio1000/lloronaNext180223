import Link from 'next/link';
import React, { useState } from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"



function QuickInfo2() {

  return (
    <div className="container-llorona px-2">
      <div>
        <h1 className={title.fontTitlemain}>Llorona's Culture</h1>
      </div>
      <div>
        <h4 className={title.fontTitleSub}>Nuestras</h4>
        <h2 className={title.fontTitleline}>Raíces</h2>
        <div className="linea1"></div>
      </div>

      <div className="py-3 px-3 row-qh">
        <p className="text-center sm:text-2xl text-xl text-black">
          If you're looking to explore a wide selection of <b>Mexican craft beers </b> or indulge in mixology with Mexican flavors featuring Mezcal and Tequila, this is the place to be. Enjoy our <b>Avocado Martini or Mazapan Martini </b>, or try some of our cocktails made with Pulque, an ancient Mexican beverage. Experience the fusion of tradition and innovation in every sip!
        </p>
      </div>
      <div
        style={{ gap: "20px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link href="/menullorona/Alimentos">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/bol.png"
              alt="menú alimentos"
            />
            <p className="textoFotosHome text-black">Menú Alimentos</p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/tequila.png"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome text-black">Mixología Artesanal</p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/mezcal.png"
              alt="Mezcales y Pulque Artesanal"
            />
            <p className="textoFotosHome text-black">
              Mezcales & Sotoles
              <br />
              Artesanales
            </p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/cerveza+(1).png"
              alt="Cervezas Artesanales"
            />
            <p className="textoFotosHome text-black">
              Cerveza Artesanal
              <br />
              Mexicana
            </p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Industrial">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/whisky.png"
              alt="Destilados"
            />
            <p className="textoFotosHome text-black">Destilados</p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Industrial">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/taza-de-cafe.png"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome text-black">
              Café, Sodas <br /> y Cervezas Industriales
            </p>
          </div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
        <Link href="/reserva">
          <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            ¡Reserva ya!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default QuickInfo2