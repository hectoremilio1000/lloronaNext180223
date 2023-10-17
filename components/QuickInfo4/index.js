import React from 'react'
import title from "../Main/title.module.css"
import { useAppContext } from '../context/Context';
import Link from 'next/link';

function QuickInfo4() {
    const { espa } = useAppContext();


  return (
      <>
          {espa ? <div className="container-llorona px-2 py-2">
              <div>
                  <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Los mejores mezcales los tenemos nosotros</h1>
              </div>
              <div>
                  <h4 className={title.fontTitleSub}>Agaves silveltres</h4>
                  <h2 className={title.fontTitleline}>Nuestros mezcales artesanales</h2>
                  <div className="linea"></div>
              </div>

              <div className="row-qh py-3 px-3">
                  <p className="text-center sm:text-2xl text-xl text-black">
                      <b> ¡Vive la Autenticidad de Oaxaca en La Llorona!</b>
                      <br/>
                      ¿Eres un apasionado del mezcal o simplemente alguien con un paladar curioso y aventurero? La Llorona es tu destino ideal. No solo somos un bar, somos una experiencia que transporta a los rincones más auténticos y tradicionales de Oaxaca.
                      <br />
                      <br />
                      🌵 <b>Mezcales Auténticos</b>: Nuestra colección de mezcales artesanales es inigualable. Destilados directamente de agaves silvestres como Madre Cuishe, Arroqueño y Espadín, cada gota cuenta la historia del maguey y del maestro mezcalero detrás de la botella. Además, te invitamos a sumergirte en catas especializadas donde aprenderás sobre la riqueza y diversidad de cada tipo de agave y su sabor distintivo.
<br />
                      <br />
                      🌍 <b>Punto de Encuentro Internacional</b>: Nuestro espacio no solo ofrece bebidas, es un crisol de culturas. Extranjeros de todas partes del mundo eligen La Llorona para reunirse, intercambiar historias y descubrir juntos los secretos del mezcal.
                      <br />
                      <br />
                      🧂 Sal de Gusano y Sal de Chicatana: Elevará tu experiencia del mezcal a otro nivel. Estas sales, tradicionales de Oaxaca, aportan un toque especial y terroso a tu bebida, ofreciendo una combinación que no encontrarás en ningún otro lugar.
<br />
                      <br />
                      🥑 <b>Sabor y Tradición en tu Mesa</b>: Nuestro guacamole con chapulín es una delicia que tienes que probar. Imagina la cremosidad del aguacate combinada con el crujiente y sabor característico del chapulín, un manjar auténtico y lleno de tradición.
<br />
                      <br />
                      🥃 <b>Bacanora y Pulque</b>: Además de nuestro extenso menú de mezcales, ofrecemos otras joyas mexicanas. El Bacanora, originario de Sonora, y el Pulque, bebida milenaria fermentada del maguey, esperan ser descubiertos por ti.
                      <br />
                      <br />
                      <b>La Llorona no es solo un lugar</b>, es una experiencia, un viaje a través de sabores, aromas y tradiciones. ¡Te esperamos para vivir juntos esta aventura única y auténtica! 🍷 #ExperienciaLlorona.
                  </p>
              </div>
              <div
                  style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
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

              <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
                  <Link href="/reserva">
                      <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          ¡Reserva ya!
                      </button>
                  </Link>
              </div>
          </div> : <div className="container-llorona px-2 py-2">
              <div>
                  <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Salsa Live</h1>
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
                          Are you a mezcal enthusiast or simply someone with a curious and adventurous palate? La Llorona is your ideal destination. We're not just a bar; we offer an experience that transports you to the most authentic and traditional corners of Oaxaca.
                          <br />
                          <br />
                          🌵 <b>Authentic Mezcals</b>: Our collection of artisanal mezcals is unparalleled. Distilled directly from wild agaves like Madre Cuishe, Arroqueño, and Espadín, each drop tells the story of the maguey and the master mezcalero behind the bottle. Moreover, we invite you to dive into specialized tastings where you'll learn about the richness and diversity of each type of agave and its distinctive flavor.
                          <br />
                          <br />
                          🌍 <b>International Meeting Point</b>: Our space isn't just about beverages; it's a melting pot of cultures. Foreigners from all over the world choose La Llorona to gather, share stories, and discover the secrets of mezcal together.
                          <br />
                          <br />
                          🧂 Worm Salt and Chicatana Ant Salt: They will elevate your mezcal experience to another level. These salts, traditional to Oaxaca, add a unique and earthy touch to your drink, offering a blend you won't find anywhere else.
                          <br />
                          <br />
                          🥑 <b>Flavor and Tradition on Your Table</b>: Our guacamole with grasshoppers is a delight you must try. Imagine the creaminess of the avocado combined with the crispiness and unique taste of the grasshopper, a true delicacy full of tradition.
                          <br />
                          <br />
                          🥃 <b>Bacanora and Pulque</b>: Beyond our extensive mezcal menu, we offer other Mexican gems. Bacanora, native to Sonora, and Pulque, the ancient fermented drink from the maguey, await your discovery.
                          <br />
                          <br />
                          <b>La Llorona isn't just a place</b>, it's an experience, a journey through flavors, aromas, and traditions. We look forward to sharing this unique and genuine adventure with you! 🍷 #LaLloronaExperience.
                      </p>

              </div>
                  <div
                      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
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

              <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
                  <Link href="/reserva">
                      <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          ¡Book now!
                      </button>
                  </Link>
              </div>
          </div>}
      </>
  )
}

export default QuickInfo4