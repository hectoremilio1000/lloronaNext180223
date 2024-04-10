import React from "react";
import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent/index";
import { useAppContext } from "../components/context/Context";
import Alimentos from "./menullorona/Alimentos";
import Food from "./menullorona/menufood";
import NavBar from "../components/NavBarEs/NavBarEs";

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

  const { espa } = useAppContext();

  return (
    <div>
      <NavBar />
      <div
        className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/banner/bannerMenu.jpg")`,
          backgroundSize: "cover",
          height: "40vh",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Menú</b>
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
      <div
        className="mt-2"
        style={{
          padding: "2rem 0",
          width: "90vw",
          margin: "0 auto",
        }}
      >
        <div className="max-w-[1184px] mx-auto w-full px-[20px]">
          <div className="contenedorLenguaje">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onEnglish}
            >
              English
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSpanish}
            >
              Español
            </button>
          </div>
        </div>

        {spanish && (
          <div className="max-w-[1184px] mx-auto w-full px-[20px] py-[40px]">
            <Alimentos />
            {/* <ButtonComponent
              titulo="BEBIDAS"
              enlace="/menullorona/Bebidas"
            /> */}
          </div>
        )}

        {english && (
          <div className="max-w-[1184px] mx-auto w-full px-[20px] py-[40px]">
            <Food />
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuLlorona;
