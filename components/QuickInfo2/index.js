import Link from 'next/link';
import React from 'react'



function QuickInfo2() {
  return (
    <div className="mt-2 fondo2 py-2 px-2">
      <div>
        <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Llorona's Culture</h1>
      </div>
      <div>
        <h4 className="text-center tituloSection2 m-0">Nuestras</h4>
        <h2 className="text-center subTituloSection1">Raíces</h2>
        <div className="linea1"></div>
      </div>

      <div className="py-3 px-3">
        <p className="text-center text-black sm:text-2xl text-xl">
          La Llorona surge de la fusión de la riqueza de la cocina urbana
          contemporánea y la vida de la cantina mexicana. Nuestros sabores son
          inconfundibles y amados en todo el mundo. Nuestra{" "}
          <b>
            fiesta, nuestra energía, nuestra vibra, nuestro baile y nuestra
            gastronomía.
          </b>
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link href="/menullorona/menualimentos">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/bol.png"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">Menú Alimentos</p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/tequila.png"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome">Mixología Artesanal</p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/mezcal.png"
              alt="Mezcales y Pulque Artesanal"
            />
            <p className="textoFotosHome">
              Mezcales & Sotoles
              <br />
              Artesanales
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/cerveza+(1).png"
              alt="Cervezas Artesanales"
            />
            <p className="textoFotosHome">
              Cerveza Artesanal
              <br />
              Mexicana
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/industrial">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/whisky.png"
              alt="Destilados"
            />
            <p className="textoFotosHome">Destilados</p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/industrial">
          <div>
            <img
              className="iconoAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/iconos/taza-de-cafe.png"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome">
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