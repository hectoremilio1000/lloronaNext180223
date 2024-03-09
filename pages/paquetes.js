import React from "react";
import { useAppContext } from "../components/context/Context";
import { useState } from "react";
import ButtonComponent from "../components/ButtonComponent/index";
import title from "../components/Main/title.module.css";
import { paqueteSinAlcohol } from "../data/paquetes";
import NavBar from "../components/NavBarEs/NavBarEs";

function Paquetes() {
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(true);

  const whatsappNumber = "525549242477"; // Código de país +52 para México y tu número local
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría reservar una mesa para las fiestas navideñas."
  ); // Mensaje predeterminado

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
    <>
      <NavBar />
      <div
        className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/Screenshot+2023-11-10+at+22.04.18.png")`,
          backgroundSize: "cover",
          height: "90vh",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Celebra con nosotros</b>
          </h3>
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
        <div>
          {espa ? (
            <>
              <div>
                <h1 className="text-center text-3xl md:text-4xl uppercase font-black">
                  La Llorona - Una Navidad Inolvidable
                </h1>
              </div>
              <div>
                <h4 className={title.fontTitleSub}>
                  Celebra la Navidad en La Llorona
                </h4>
                <h2 className={title.fontTitleline}>
                  Donde cada bocado es una celebración
                </h2>
                <div className="linea"></div>
              </div>

              <p className="text-center text-black sm:text-2xl text-xl">
                Esta Navidad, envuelve a tus seres queridos con la magia de una
                celebración inolvidable en La Llorona. Nuestra cálida atmósfera,
                los sabores auténticos de nuestros platos especiales y el brillo
                festivo te esperan para compartir momentos mágicos en la Roma
                Condesa. Deja que cada bocado te transporte a una festividad
                llena de sabor y alegría. Con ingredientes seleccionados y
                recetas que hablan la lengua de la tradición y la innovación,
                nuestros paquetes navideños están diseñados para deleitar y
                crear recuerdos eternos.
              </p>
              <p className="text-center text-black sm:text-2xl text-xl">
                Haz que esta Navidad sea memorable y reserva tu mesa ahora. Con
                espacio limitado, ofrecemos una experiencia exclusiva donde cada
                detalle está pensado para tu disfrute. Ven y celebra con
                nosotros - cada sonrisa, cada brindis, cada momento cuenta en La
                Llorona.
              </p>
              <p className="text-center text-black sm:text-2xl text-xl">
                Estamos ubicados en el corazón de la Roma Condesa, un lugar
                donde la historia y la modernidad se encuentran para brindarte
                una experiencia única. Nuestro personal está dedicado a hacer de
                tu visita algo más que una comida, es una celebración de la vida
                misma.
              </p>

              <div className="flex justify-center items-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Reserva por WhatsApp
                </a>
              </div>

              {/* Aquí puedes agregar una imagen representativa de tu menú o del restaurante */}
              <div className="my-4 flex justify-center">
                <img
                  src={paqueteSinAlcohol}
                  alt="comida sabrosa"
                  width={1000}
                  height={500}
                  className="w-full"
                />
              </div>
            </>
          ) : (
            <>hola</>
          )}
        </div>
      </div>
    </>
  );
}

export default Paquetes;
