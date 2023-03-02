import React from 'react'

import Link from 'next/link';

function QuickInfo() {
  return (
    <div className="container-llorona mt-2 px-2 py-2">
      <div>
        <h1 className="text-center text-3xl md:text-4xl uppercase font-black">La Llorona Xperience</h1>
      </div>
      <div className='row-qh'>
        <h4 className="text-center text-emerald-300 text-3xl md:text-4xl m-0">¿Cómo ser un</h4>
        <h2 className="text-center text-3xl md:text-5xl capitalize">Mexicano?</h2>
        <div className="linea"></div>
      </div>

      <div className="py-3 px-3 row-qh">
        <p className="text-center text-black sm:text-2xl text-xl ">
          Toma nuestros cocteles con <b>Pulque, Tepache o Mezcal</b>. Prueba con nosotros
          la gastronomía urbana mexicana que va desde{" "}
          <b>tacos, memelas hasta hamburguesas</b> y deleítate con una exquisita
          <b> Cerveza Artesanal Mexicana</b> que encontraras AQUÍ.
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className="py-3"
      >
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/mexican-shredded-pork-recipes-900x900.jpg"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">Tacos de Cochinita Pibil</p>
          </div>
        </Link>
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/aguachileVerde.jpg"
              alt="Aguachile Verde Camarón"
            />
            <p className="textoFotosHome">
              Aguachile Verde <br />
              de Camarón
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">
              Hamburguesa Méxicana <br />
              con especias mexicanas
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/mixologia/IMG_8064.jpg"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome">
              Pulque


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