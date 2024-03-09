import React from "react";
import title from "../components/Main/title.module.css";
import card from "../components/Main/card.module.css";
import Link from "next/link";
import { useAppContext } from "../components/context/Context";
import YouTube from "react-youtube";
import Calendario from "../components/Calendario";
import NavBar from "../components/NavBarEs/NavBarEs";

function SalsaVivo() {
  const { ingles, espa } = useAppContext();

  const opts = {
    height: "300",
    width: "200",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,
    },
  };

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <>
      <NavBar />
      <div className="d-flex subContenedor1Banner bannerSalsa banner">
        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
            {espa ? (
              <h3 className=" font-weight-bold proximamente2 text-white">
                Los mejores grupos de <br />
                Salsa en Vivo
              </h3>
            ) : (
              <h3 className=" font-weight-bold proximamente2 text-white">
                The best live <br />
                salsa groups
              </h3>
            )}

            <div className="subSubDiv1Banner">
              <a href="https://wa.me/+5215549242477">
                <button type="button" className="buttonComponente">
                  Reservar
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <>
        {espa ? (
          <>
            <div className="container-llorona px-4">
              <div className="px-4">
                <h1 className={title.fontTitlemain}>
                  Cantina La Llorona: Un Baile de Sabores y Ritmo
                </h1>
              </div>
              <div className="row-qh px-4">
                <h4 className={title.fontTitleSub}>
                  Descubre el Alma de la Salsa
                </h4>
                <h2 className={title.fontTitleline}>
                  y la Esencia de la Cantina en un Solo Lugar
                </h2>
                <div className="linea"></div>
              </div>

              <div className="py-3 px-4 row-qh">
                <p className="text-center sm:text-2xl text-xl text-black">
                  En La Cantina La Llorona, estamos orgullosos de presentar los
                  mejores grupos de salsa en vivo que llenan nuestras{" "}
                  <b>noches de energía y pasión</b>.
                  <br />
                  Déjate llevar por el vaivén de la salsa, ritmo que se respira
                  en cada rincón de nuestro restaurante. Aquí, cada plato es un
                  pretexto para celebrar y cada canción, una invitación a
                  levantarte de la silla y bailar. Si lo tuyo es el deleite
                  auditivo y gustativo, estás en el lugar indicado.
                </p>
              </div>

              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <div>
                    <YouTube
                      videoId="VkKACB3bgpU"
                      opts={opts}
                      onReady={videoOnReady}
                    />

                    <p className="textoFotosHome text-black">
                      Grandes compositores
                      <br />y bandas de salsa Aquí
                    </p>
                  </div>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/grupo+salsa+mexico.jpg"
                        alt="Música en vivo"
                      />
                      <p className="textoFotosHome text-black">
                        Mejores grupos
                        <br />
                        Salsa en Vivo
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/grupocubanomexico.jpg"
                        alt="Baila con el mejor grupo de salsa"
                      />
                      <p className="textoFotosHome text-black">
                        Ven a bailar <br />
                        con tus amigos
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <YouTube
                          videoId="y_6bqXkCeRY"
                          opts={opts}
                          onReady={videoOnReady}
                        />

                        <p className="textoFotosHome text-black">
                          Disfrutamos del sabor
                          <br />
                          intenso de la salsa
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div id="reservacubano">
                  <Calendario />
                </div>
              </>
            </div>

            <>
              <div className="row-qh px-4">
                <h4 className={title.fontTitleSub}>
                  Ven a disfrutar de un gran
                </h4>
                <h2 className={title.fontTitleline}>Son Cubano</h2>
                <div className="linea"></div>
              </div>

              <div className="py-0 px-4 row-qh">
                <p className="text-center sm:text-2xl text-xl text-black">
                  Si eres amante de la música, te encantará saber que contamos
                  con los mejores grupos de son cubano que llenarán tus{" "}
                  <b>noches de ritmo y sabor</b>.
                  <br />
                  Pero eso no es todo,{" "}
                  <b>
                    nuestra cocina te espera con platos irresistibles, diseñados
                    para hacer que cada bocado sea un viaje de sabor
                  </b>
                  . Y para maridar tus comidas, te presentamos nuestra mixología
                  especial con{" "}
                  <b>
                    tequila y mezcal, creaciones originales que te sorprenderán
                  </b>
                  .
                  <br />
                  Así que, si estás buscando el lugar perfecto para disfrutar de
                  buena música, comida deliciosa y cocteles excepcionales,{" "}
                  <b>La Cantina La Llorona </b>es el lugar que necesitas. ¡Te
                  esperamos con los brazos abiertos y las copas listas para
                  brindar! Ven a vivir la verdadera esencia de la fiesta y la
                  gastronomía en nuestro rincón. ¡Nos vemos pronto!"
                </p>
              </div>

              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <div>
                    <YouTube
                      videoId="3-8GHQiU5vs"
                      opts={opts}
                      onReady={videoOnReady}
                    />

                    <p className="textoFotosHome text-black">
                      Son Cubano
                      <br />
                      en Vivo
                    </p>
                  </div>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/mejor+grupo+salsa+vivo+cdmx+cantina+llorona.jpg"
                        alt="mejores grupos de salsa"
                      />
                      <p className="textoFotosHome text-black">
                        Grandes Orquestas de
                        <br />
                        Salsa en Vivo
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/nin%CC%83a+bailando+cantina+llorona+.PNG"
                        alt="niñas más hermosas bailando salsa"
                      />
                      <p className="textoFotosHome text-black">
                        Aquí amamos <br />
                        el baile y la fiesta
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <YouTube
                          videoId="k9OW0v_kKeY"
                          opts={opts}
                          onReady={videoOnReady}
                        />

                        <p className="textoFotosHome text-black">
                          Disfrutamos del sabor
                          <br />
                          intenso de la salsa
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="py-3"
                >
                  <Link href="#reservacubano">
                    <button
                      type="button"
                      className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      ¡Reserva ya!
                    </button>
                  </Link>
                </div>
              </>
            </>
          </>
        ) : (
          <>
            <div className="container-llorona px-2">
              <div className="px-4">
                <h1 className={title.fontTitlemain}>
                  Cantina La Llorona: A Dance of Flavors and Rhythm
                </h1>
              </div>
              <div className="row-qh px-4">
                <h4 className={title.fontTitleSub}>
                  Discover the Soul of Salsa
                </h4>
                <h2 className={title.fontTitleline}>
                  And the Essence of the Cantina in One Place
                </h2>
                <div className="linea"></div>
              </div>

              <div className="py-3 px-4 row-qh">
                <p className="text-center sm:text-2xl text-xl text-black">
                  At Cantina La Llorona, we are proud to present the best live
                  salsa bands that fill our{" "}
                  <b>nights with energy and passion</b>. Let yourself be carried
                  away by the sway of salsa, a rhythm that is felt in every
                  corner of our restaurant. Here, every dish is an excuse to
                  celebrate, and every song is an{" "}
                  <b>invitation to get up from your seat and dance</b>. If you
                  delight in both your auditory and gustatory senses, you are in
                  the right place.
                </p>
              </div>

              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <div>
                    <YouTube
                      videoId="VkKACB3bgpU"
                      opts={opts}
                      onReady={videoOnReady}
                    />

                    <p className="textoFotosHome text-black">
                      Live Cuban <br />
                      salsa groups.
                    </p>
                  </div>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/grupo+salsa+mexico.jpg"
                        alt="Música en vivo"
                      />
                      <p className="textoFotosHome text-black">
                        Great salsa <br />
                        orchestras gathered here
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/grupocubanomexico.jpg"
                        alt="Baila con el mejor grupo de salsa"
                      />
                      <p className="textoFotosHome text-black">
                        Come dance with <br />
                        your friends
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <YouTube
                          videoId="y_6bqXkCeRY"
                          opts={opts}
                          onReady={videoOnReady}
                        />

                        <p className="textoFotosHome text-black">
                          We love food <br />
                          and salsa.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div id="reservacubano">
                  <Calendario id="reservacubano" />
                </div>
              </>
            </div>

            <>
              <div className="row-qh px-4">
                <h4 className={title.fontTitleSub}>Come enjoy a great</h4>
                <h2 className={title.fontTitleline}>Son Cubano</h2>
                <div className="linea"></div>
              </div>

              <div className="py-0 px-4 row-qh">
                <p className="text-center sm:text-2xl text-xl text-black">
                  If you are a music lover, you will be delighted to know that
                  we have the best{" "}
                  <b>
                    Cuban son bands that will fill your nights with rhythm and
                    flavor
                  </b>
                  . But that's not all, our kitchen awaits you with irresistible
                  dishes designed to make every bite a flavorful journey. And to
                  pair with your meals, we present our special mixology with
                  tequila and mezcal, original creations that will surprise you.
                  So, if you're looking for the perfect place to enjoy{" "}
                  <b>
                    good music, delicious food, and exceptional cocktails,
                    Cantina La Llorona is the place you need
                  </b>
                  . We await you with open arms and glasses ready to toast! Come
                  and experience the{" "}
                  <b>
                    true essence of celebration and gastronomy in our corner
                  </b>
                  . See you soon!
                </p>
              </div>

              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <div>
                    <YouTube
                      videoId="3-8GHQiU5vs"
                      opts={opts}
                      onReady={videoOnReady}
                    />

                    <p className="textoFotosHome text-black">
                      Cuban Son
                      <br />
                      Live
                    </p>
                  </div>

                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/mejor+grupo+salsa+vivo+cdmx+cantina+llorona.jpg"
                        alt="mejores grupos de salsa"
                      />
                      <p className="textoFotosHome text-black">
                        Great Live <br />
                        Salsa Orchestras
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div>
                      <img
                        className="imagenTopTexto"
                        src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/nin%CC%83a+bailando+cantina+llorona+.PNG"
                        alt="Most beautiful girls dancing salsa."
                      />
                      <p className="textoFotosHome text-black">
                        Here we love <br />
                        dancing and partying
                      </p>
                    </div>
                  </Link>
                  <Link href="/reserva">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <YouTube
                          videoId="k9OW0v_kKeY"
                          opts={opts}
                          onReady={videoOnReady}
                        />

                        <p className="textoFotosHome text-black">
                          We enjoy the intense
                          <br />
                          flavor of salsa.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className="py-3"
                >
                  <Link href="#reservacubano">
                    <button
                      type="button"
                      className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      ¡Book now!
                    </button>
                  </Link>
                </div>
              </>
            </>
          </>
        )}
      </>
    </>
  );
}

export default SalsaVivo;
