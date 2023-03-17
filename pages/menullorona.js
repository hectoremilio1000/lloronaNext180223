import React from 'react'
import { useState } from "react";
// import { Button } from "react-bootstrap";
import Link from "next/link";
import ButtonComponent from '../Components/ButtonComponent';
import { Button } from 'antd';

function MenuLlorona() {
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(true);

  const onEnglish = () => {
    setEnglish(true);
    setSpanish(false);
  };

  const onSpanish = () => {
    setEnglish(false);
    setSpanish(true);
  };

  return (
    <div>
      <div className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/banner/bannerMenu.jpg")`,
          backgroundSize: "cover",
          height: "40vh",
          backgroundPosition: "center",
          position: "relative"
        }}>

        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Mexican Experience</b>
          </h3>

          {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
        </div>
      </div>
      <div className="mt-2" style={{
        padding: "2rem 0",
        width: "90vw",
        margin: "0 auto"
      }}>
        <div>
          <h2 className="text-center font-weight-bold">Menú</h2>
          <div className="contenedorLenguaje">
            <Button onClick={onEnglish} type="primary" className='buttonCheck'>English</Button>
            <Button onClick={onSpanish} type="primary" className='buttonCheck'>Español</Button>
          </div>
        </div>

        {spanish && (
          <div className="contenedorMenu">
            <ButtonComponent
              titulo="ALIMENTOS"
              enlace="/menullorona/Alimentos"
            />
            <ButtonComponent
              titulo="BEBIDAS"
              enlace="/menullorona/Bebidas"
            />
            <ButtonComponent
              titulo="ESPECIAL"
              enlace="/menullorona/Cantinero"
            />
          </div>
        )}

        {english && (
          <div className="contenedorMenu">
            <ButtonComponent titulo="FOOD" enlace="/menullorona/menufood" />
            <ButtonComponent titulo="DRINKS & BEERS" enlace="/menullorona/drinks" />
            <ButtonComponent titulo="SPECIAL" enlace="/menullorona/special" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuLlorona