import Link from 'next/link';
import React from 'react'


import Calendario from '../components/Calendario/index';


function Reserva() {
  return (
    <>
      <header
        className="col jumbotron-fluid pt-5"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG")`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              <b>Los jueves piñata cumpleañera con una botella de mezcal</b>
            </h3>

            <div className="subSubDiv1Banner"></div>
          </div>
        </div>
      </header>
      <Calendario />
      <div>
        <div className="mt-2 px-2 py-2">
          <h4 className="text-center text-emerald-300 text-3xl md:text-4xl m-0">Celebra tu cumpleaños</h4>
          <h2 className="text-center text-3xl md:text-5xl capitalize">
            los jueves con nosotros
          </h2>
          <div className="linea"></div>
        </div>

        <div className="py-3 px-3">
          <p className="text-center text-black sm:text-2xl text-xl">
            La piñata cumpleañera no tiene costo, y aplica todos los jueves si
            cumples años en el mes ❤️🪅 y solo tienen que hacer reservación en
            cualquiera de nuestras redes sociales. Les regalamos dulces típicos
            mexicanos y una botella de nuestro mejor mezcal de la casa 🍶🥃
            madre cuishe el cual está elaborado artesanalmente.
          </p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} className="py-3"
      >
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">Festeja con Nosotros</p>
          </div>
        </Link>
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninapinata.JPG"
              alt="Aguachile Verde Camarón"
            />
            <p className="textoFotosHome">
              Muchas Sorpresas
            </p>
          </div>
         </Link> 
        <Link href="/menullorona/menualimentos">
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/IMG_9585.jpg"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">
              Regalos
              Únicos
            </p>
          </div>
        </Link>
        <Link href="/menullorona/menubebidas/artesanal"> 
          <div className="py-1">
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninas4pinata.JPG"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome">
              Fiesta en grande
             
             
            </p>
          </div>
        </Link>
      </div>


    
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