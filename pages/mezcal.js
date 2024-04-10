import React from "react";
import MezcalInfo from "../components/MezcalInfo";
import ProcesoElaboracion from "../components/ProcesoElaborarion/index";
import TitlebarImageList from "../components/TitlebarImageList/index";

import NuestroMezcalInfo from "../components/NuestroMezcalInfo/index";
import NuestroMezcalImages from "../components/NuestroMezcalImages/index";
import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";

function Mezcal() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Descubre la Experiencia del Mezcal en Cantina la Llorona en México 🥃"
        ></meta>
        <meta
          property="og:description"
          content="Sumérgete en el mundo del mezcal con nosotros. En Cantina la Llorona, ofrecemos una selección única de mezcales artesanales, cuidadosamente seleccionados para ofrecerte una experiencia auténtica. ¡Haz tu reserva y déjate llevar por los sabores de México! 🌵 #Mezcal #ExperienciaMexicana #Cantina"
        ></meta>
        <title>
          Mezcal artesanal y Cómodo lugar en México | Cantina la llorona
        </title>
      </Head>
      <NavBar />
      <div className="pb-4">
        <div
          className="d-flex subContenedor1Banner"
          style={{
            backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/PHOTO-2022-04-27-10-56-11.jpg")`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "right center",
            position: "relative",
          }}
        >
          {/* <video autoPlay muted loop src={videoPort} /> */}

          <div className="flex w-full mx-2 title-portada">
            <h1 className="text-4xl text-white font-bold">
              Vive la experiencia de tomar un buen
            </h1>
            <h1 className="text-5xl text-white font-bold">Mezcal artesanal</h1>
            <p className="text-2xl text-white font-medium">
              en compañia de amigos internacionales
            </p>

            <div className="subSubDiv1Banner">
              <a href="https://wa.me/+5215549242477">
                <button
                  type="button"
                  className="px-4 py-4 text-3xl font-bold bg-black hover:bg-green-500 text-white duration-300"
                >
                  ¡Contactar y Catar!
                </button>
              </a>
            </div>

            {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
          </div>
        </div>
        <MezcalInfo className="mt-0" />

        <NuestroMezcalImages />
      </div>
    </>
  );
}

export default Mezcal;
