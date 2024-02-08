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
            <h1 className="text2xl md:text-5xl font-bold">
              No solo somos Un Restaurante, sino una experiencia
            </h1>

            {/* <div className="h-2 bg-white w-full rounded"></div> */}

            <p className="text-start sm:text-2xl text-xl text-black">
              Esta combinación de tradición y modernidad no solo satisface el
              paladar, sino que también ofrece un viaje sensorial inigualable,
              haciendo de cada bocado y sorbo una sinfonía de sabor inolvidable.
              Invitamos a todos a descubrir esta experiencia única donde la{" "}
              <b>
                gastronomía y la coctelería se entrelazan en perfecta armonía
              </b>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <Link href="/menullorona/Alimentos">
                <div className="w-full">
                  <img
                    className="w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2049.jpg"
                    alt="Tacos y cocteles"
                  />
                </div>
              </Link>
              <Link href="/menullorona/Alimentos" className="mt-4 block">
                <div>
                  <img
                    className="h-[150px] object-cover w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2050.jpg"
                    alt="cocteles y tacos"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full grid grid-cols-1">
              <Link href="/menullorona/Alimentos" className="mt-12">
                <div className={card.cardBox}>
                  <img
                    className="h-[250px] object-cover w-full rounded"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2046.jpg"
                    alt="tacos y cocteles"
                  />
                </div>
              </Link>

              <Link href="/menullorona/Bebidas/Artesanal">
                <div className={card.cardBox}>
                  <img
                    className="h-[250px] object-cover w-full rounded"
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
            <h1 className={title.fontTitlemain}>Llorona Xperience</h1>
          </div>
          <div className="row-qh">
            <h4 className={title.fontTitleSub}>How to be a</h4>
            <h2 className={title.fontTitleline}>Mexican?</h2>
            <div className="linea"></div>
          </div>

          <div className="py-3 px-3 row-qh">
            <p className="text-center sm:text-2xl text-xl text-black">
              In our innovative proposal, we don't just serve <b>tacos</b>, but
              we elevate the culinary experience to a higher level. Each{" "}
              <b>taco we offer is paired with a unique mixology</b>,
              meticulously designed to complement and enhance the flavors of
              each ingredient. This blend of tradition and modernity not only
              satisfies the palate but also offers an unparalleled sensory
              journey, making each bite and sip an unforgettable flavor
              symphony. We invite everyone to discover this unique experience
              where <b>gastronomy and mixology intertwine in perfect harmony</b>
              .
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
