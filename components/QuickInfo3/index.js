import Link from 'next/link';
import React from 'react'


function QuickInfo3() {
  return (
    <div className="container-llorona px-2 py-2">
      <div>
        <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Llorona's Passion</h1>
      </div>
      <div>
        <h4 className="text-center text-emerald-300 text-3xl md:text-4xl m-0">Buen Son y Sazón</h4>
        <h2 className="text-center text-white text-3xl md:text-5xl capitalize">para todo Corazón</h2>
        <div className="linea"></div>
      </div>

      <div className="row-qh py-3 px-3">
        <p className="text-center sm:text-2xl text-xl">
          Los <b>jueves</b> disfruta de <b>Música en vivo</b>. Así como de diferentes
          djs que tocarán los mejores sones para ti. Atrévete a <b>bailar</b> y
          disfrutar de la <b>felicidad Mexicana </b>que traemos para ti.
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
      >
        <Link href="/reserva">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+1.43.06.png"
              alt="Música en vivo"
            />
            <p className="textoFotosHome pt-2">
              Jueves Música
              <br />
              en Vivo
            </p>
          </div>
        </Link>
        <Link href="/reserva">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.30.png"
              alt="Djs por día"
            />
            <p className="textoFotosHome pt-2">
              Djs <br />
              por día
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.39.png"
              alt="Bebe y Baila la vida "
            />
            <p className="textoFotosHome pt-2">
              Mixología con
              <br />
              Pulque, Mezcal
              <br />y Tequila
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

export default QuickInfo3