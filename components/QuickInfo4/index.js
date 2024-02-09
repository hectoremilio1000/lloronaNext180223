import React from "react";
import title from "../Main/title.module.css";
import { useAppContext } from "../context/Context";
import Link from "next/link";

function QuickInfo4() {
  const { espa } = useAppContext();

  return (
    <>
      {espa ? (
        <div className="overflow-hidden bg-black">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <h1 className="inline-block animate-marquee text-white text-[70px] md:text-[100px] font-bold  w-full">
              LOS MEJORES MEZCALES ESTAN AQUI
            </h1>
            <h1 className="animate-marquee inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
              LOS MEJORES MEZCALES ESTAN AQUI
            </h1>
          </div>
          <div className="bg-black py-[50px]">
            <div className="mx-auto max-w-[1184px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
              <Link href="/reserva">
                <div>
                  <img
                    className="w-full object-cover h-[400px]"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcalArtesanalllorona.jpg"
                    alt="mezcales oaxaca"
                  />
                </div>
              </Link>

              <Link href="/reserva">
                <div>
                  <img
                    className="w-full object-cover h-[400px]"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcales+artesanales+de+oaxaca+cdmx.jpg"
                    alt="mezcales oaxaca"
                  />
                </div>
              </Link>
              <Link href="/reserva">
                <div>
                  <img
                    className="w-full object-cover h-[400px]"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcales+con+sabor+unico+traidos+directamente+de+oaxaca.jpg"
                    alt="mezcales oaxaca"
                  />
                </div>
              </Link>
              <Link href="/menullorona/Bebidas/Artesanal">
                <div>
                  <img
                    className="w-full object-cover h-[400px]"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/sotoles+bacanoras+mezcales+en+cdmx+unicos.jpg"
                    alt="mezcales oaxaca"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-llorona px-2 py-2">
          <div>
            <h1 className="text-center text-3xl md:text-4xl uppercase font-black">
              Salsa Live
            </h1>
          </div>
          <div>
            <h4 className={title.fontTitleSub}>Dance Salsa</h4>
            <h2 className={title.fontTitleline}>With Us</h2>
            <div className="linea"></div>
          </div>

          <div className="row-qh py-3 px-3">
            <p className="text-center sm:text-2xl text-xl text-black">
              <b>Experience the Authenticity of Oaxaca at La Llorona!</b>
              <br />
              Are you a mezcal enthusiast or simply someone with a curious and
              adventurous palate? La Llorona is your ideal destination. We're
              not just a bar; we offer an experience that transports you to the
              most authentic and traditional corners of Oaxaca.
              <br />
              <br />
              🌵 <b>Authentic Mezcals</b>: Our collection of artisanal mezcals
              is unparalleled. Distilled directly from wild agaves like Madre
              Cuishe, Arroqueño, and Espadín, each drop tells the story of the
              maguey and the master mezcalero behind the bottle. Moreover, we
              invite you to dive into specialized tastings where you'll learn
              about the richness and diversity of each type of agave and its
              distinctive flavor.
              <br />
              <br />
              🌍 <b>International Meeting Point</b>: Our space isn't just about
              beverages; it's a melting pot of cultures. Foreigners from all
              over the world choose La Llorona to gather, share stories, and
              discover the secrets of mezcal together.
              <br />
              <br />
              🧂 Worm Salt and Chicatana Ant Salt: They will elevate your mezcal
              experience to another level. These salts, traditional to Oaxaca,
              add a unique and earthy touch to your drink, offering a blend you
              won't find anywhere else.
              <br />
              <br />
              🥑 <b>Flavor and Tradition on Your Table</b>: Our guacamole with
              grasshoppers is a delight you must try. Imagine the creaminess of
              the avocado combined with the crispiness and unique taste of the
              grasshopper, a true delicacy full of tradition.
              <br />
              <br />
              🥃 <b>Bacanora and Pulque</b>: Beyond our extensive mezcal menu,
              we offer other Mexican gems. Bacanora, native to Sonora, and
              Pulque, the ancient fermented drink from the maguey, await your
              discovery.
              <br />
              <br />
              <b>La Llorona isn't just a place</b>, it's an experience, a
              journey through flavors, aromas, and traditions. We look forward
              to sharing this unique and genuine adventure with you! 🍷
              #LaLloronaExperience.
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
            <Link href="/reserva">
              <div>
                <img
                  className="imagen2AbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcalArtesanalllorona.jpg"
                  alt="mezcales oaxaca"
                />
              </div>
            </Link>

            <Link href="/reserva">
              <div>
                <img
                  className="imagen2AbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcales+artesanales+de+oaxaca+cdmx.jpg"
                  alt="mezcales oaxaca"
                />
              </div>
            </Link>
            <Link href="/reserva">
              <div>
                <img
                  className="imagen2AbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/mezcales+con+sabor+unico+traidos+directamente+de+oaxaca.jpg"
                  alt="mezcales oaxaca"
                />
              </div>
            </Link>
            <Link href="/menullorona/Bebidas/Artesanal">
              <div>
                <img
                  className="imagen2AbajoTexto1Home"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/sotoles+bacanoras+mezcales+en+cdmx+unicos.jpg"
                  alt="mezcales oaxaca"
                />
              </div>
            </Link>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="py-3"
          >
            <Link href="/reserva">
              <button
                type="button"
                className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                ¡Book now!
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default QuickInfo4;
