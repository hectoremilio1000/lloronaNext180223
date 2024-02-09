import React from "react";
import title from "../Main/title.module.css";
import card from "../Main/card.module.css";
import Link from "next/link";

import AppContextProvider, { useAppContext } from "../context/Context";
import * as fbq from "../../lib/fpixel";

function QuickInfo() {
  const handleClick = () => {
    fbq.event("reserva");
  };

  const { ingles, espa } = useAppContext();

  return (
    <>
      {espa ? (
        <div className="w-full max-w-[1184px] py-[80px] px-[20px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-full flex flex-col justify-center">
            {/* <h2 className="font-bold text-2xl">No solo somos</h2> */}
            <h1 className="text-2xl md:text-5xl font-bold">
              Bienvenidos a Cantina la Llorona
            </h1>

            {/* <div className="h-2 bg-white w-full rounded"></div> */}

            <p className="text-start sm:text-2xl text-xl text-black">
              Combinación de tradición y modernidad en un espacio acogedor.
              Situados enfrente del Parque España en el corazón de la Roma
              Condesa, ofrecemos un <b>viaje sensorial único </b>, haciendo de
              cada bocado y cada sorbo una sinfonía de sabores inolvidable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="">
              <Link href="/menullorona/Alimentos">
                <div className="w-full">
                  <img
                    className="w-full h-[280px]  object-cover rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2049.jpg"
                    alt="Tacos y cocteles"
                  />
                </div>
              </Link>
              <Link href="/menullorona/Alimentos" className="mt-4 block">
                <div>
                  <img
                    className="h-[220px] object-cover w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2050.jpg"
                    alt="cocteles y tacos"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full grid grid-cols-1">
              <Link href="/menullorona/Alimentos" className="mt-12">
                <div>
                  <img
                    className="h-[220px] object-cover w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2046.jpg"
                    alt="tacos y cocteles"
                  />
                </div>
              </Link>

              <Link
                href="/menullorona/Bebidas/Artesanal"
                className="mt-4 block"
              >
                <div>
                  <img
                    className="h-[280px] object-cover w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2047.jpg"
                    alt="tacos y cocteles"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* <div
            style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
          >
            <Link href="/reserva">
              <button className="buttonComponente" onClick={handleClick}>
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
        </div>
      ) : (
        <div className="container-llorona px-2">
          <div>
            <h1 className={title.fontTitlemain}>Llorona Experience</h1>
          </div>
          <div className="row-qh">
            <h4 className={title.fontTitleSub}>Welcome to</h4>
            <h2 className={title.fontTitleline}>Cantina La Llorona</h2>
            <div className="linea"></div>
          </div>

          <div className="py-3 px-3 row-qh">
            <p className="text-center sm:text-2xl text-xl text-black">
              A blend of tradition and modernity in a cozy space. The restaurant
              overlooks Parque España in the heart of Roma Condesa, we offer a{" "}
              <b>unique sensory journey</b>, making each bite and each sip an
              unforgettable symphony of flavors.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Link href="/menullorona/Alimentos">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg"
                  alt="el cráneo"
                />
                <p className="textoFotosHome text-black">
                  Guacamole with <br />
                  <b> Grasshoppers</b>
                </p>
              </div>
            </Link>
            <Link href="/menullorona/Alimentos">
              <div>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2049.jpg"
                  alt="Baja California style shrimp tacos"
                />
                <p className="textoFotosHome text-black">
                  Squash blossom tacos{" "}
                </p>
              </div>
            </Link>
            <Link href="/menullorona/Alimentos">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2047.jpg"
                  alt="Tacos suadero"
                />
                <p className="textoFotosHome text-black">
                  Tacos Veggies <br />
                </p>
              </div>
            </Link>

            <Link href="/menullorona/Bebidas/Artesanal">
              <div className={card.cardBox}>
                <img
                  className="imagenAbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2046.jpg"
                  alt="Tacos"
                />
                <p className="textoFotosHome text-black">
                  Tacos
                  <b>
                    <br />& cocktails
                  </b>
                </p>
              </div>
            </Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/reserva">
              <button
                type="button"
                className="buttonComponente"
                onClick={handleClick}
              >
                Book now!
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default QuickInfo;
