import Link from 'next/link';
import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"
import { useAppContext } from '../context/Context';


function QuickInfo3() {

  const { espa } = useAppContext();

  return (
    <>
      {espa ? <div className="container-llorona px-2 py-2">
        <div>
          <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Llorona's Passion</h1>
        </div>
        <div>
          <h4 className={title.fontTitleSub}>Buen Son y Sazón</h4>
          <h2 className={title.fontTitleline}>para todo Corazón</h2>
          <div className="linea"></div>
        </div>

        <div className="row-qh py-3 px-3">
          <p className="text-center sm:text-2xl text-xl text-black">
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
              <p className="textoFotosHome text-black">
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
              <p className="textoFotosHome text-black">
                Djs <br />
                por día
              </p>
            </div>
          </Link>
          <Link href="/menullorona/Bebidas/Artesanal">
            <div>
              <img
                className="imagen2AbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.39.png"
                alt="Bebe y Baila la vida "
              />
              <p className="textoFotosHome text-black">
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
      </div> : <div className="container-llorona px-2 py-2">
        <div>
          <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Llorona's Passion</h1>
        </div>
        <div>
            <h4 className={title.fontTitleSub}>Satisfying flavors</h4>
            <h2 className={title.fontTitleline}>Warm every heart</h2>
          <div className="linea"></div>
        </div>

        <div className="row-qh py-3 px-3">
          <p className="text-center sm:text-2xl text-xl text-black">
              "On Thursdays, enjoy live <b> Salsa with our Orchestra</b>, bringing you the best Cumbias and Salsas for you to dance in true Mexican style. On Fridays, Saturdays, and Sundays, you'll experience the <b>best DJs</b> from around the world who will make you groove with their vinyl records or amazing <b>Tropical House and Latin music sets</b>. Dare to dance and enjoy the Mexican happiness Cantina we bring to you."
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
              <p className="textoFotosHome text-black">
                  Enjoy live Salsa 
                <br />
                  with our Orchestra
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
              <p className="textoFotosHome text-black">
                Tropical House and   <br />
                 Latin music Dj sets
              </p>
            </div>
          </Link>
          <Link href="/menullorona/Bebidas/Artesanal">
            <div>
              <img
                className="imagen2AbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.39.png"
                alt="Bebe y Baila la vida "
              />
              <p className="textoFotosHome text-black">
                  Mixology with
                  Pulque,<br /> Mezcal
                  and tequila
              </p>
            </div>
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
          <Link href="/reserva">
            <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              ¡Book now!
            </button>
          </Link>
        </div>
      </div>}
    </>
    
  );
}

export default QuickInfo3