import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"
import Link from 'next/link';

import AppContextProvider, { useAppContext } from '../context/Context';
import * as fbq from '../../lib/fpixel'



function QuickInfo() {

  const handleClick = () => {
    fbq.event('reserva')
  }

  const { ingles, espa } = useAppContext();


  return (
    <>
      {espa ? <div className="container-llorona px-2">
        <div>
          <h1 className={title.fontTitlemain}>Te queremos acá</h1>
        </div>
        <div className='row-qh'>
          <h4 className={title.fontTitleSub}>taco & Trago </h4>
          
          <div className="linea"></div>
        </div>


        <div className="py-3 px-3 row-qh">
          <p className="text-center sm:text-2xl text-xl text-black">
            En nuestra innovadora propuesta, no solamente servimos <b>tacos</b>, sino que llevamos la experiencia culinaria a un nivel superior. Cada <b>taco que ofrecemos va acompañado de una mixología única</b>, diseñada meticulosamente para complementar y realzar los sabores de cada ingrediente. Esta combinación de tradición y modernidad no solo satisface el paladar, sino que también ofrece un viaje sensorial inigualable, haciendo de cada bocado y sorbo una sinfonía de sabor inolvidable. Invitamos a todos a descubrir esta experiencia única donde la <b>gastronomía y la coctelería se entrelazan en perfecta armonía</b>.
          </p>
        </div>




       <div
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
        >
          <Link href="/menullorona/Alimentos">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2049.jpg"
                alt="Tacos y cocteles"
              />
              {/* <p className="textoFotosHome text-black">
                La más galardonada <br />
                <b> Oaxaca Burguer</b>
              </p> */}
            </div>
          </Link>
          <Link href="/menullorona/Alimentos">
            <div>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2050.jpg"
                alt="cocteles y tacos"
              />
              {/* <p className="textoFotosHome text-black">Hamburguesas deliciosas = <br /><b>Clientes felices</b></p> */}
            </div>



          </Link>
          <Link href="/menullorona/Alimentos">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2046.jpg"
                alt="tacos y cocteles"
              />
              {/* <p className="textoFotosHome text-black">
                Las más ricas hamburguesas <br />
                <b>de CDMX</b>
              </p> */}
            </div>
          </Link>

          <Link href="/menullorona/Bebidas/Artesanal">
            <div className={card.cardBox}>
              <img
                className="imagenAbajoTexto1Home"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2047.jpg"
                alt="tacos y cocteles"
              />
              {/* <p className="textoFotosHome text-black">
                Hamburguesas Ricas hacen<b>
                  <br />hombres sonrientes
                </b>


              </p> */}
            </div>
          </Link>
        </div>
      
        <div style={{ display: "flex", justifyContent: "center", marginTop:30}}>
          <Link href="/reserva">
            <button className="buttonComponente" onClick={handleClick}>
              ¡Reserva ya!
            </button>
          </Link>
        </div> 
      </div> :
      
        
        <div className="container-llorona px-2">
          <div>
            <h1 className={title.fontTitlemain}>Llorona Xperience</h1>
          </div>
          <div className='row-qh'>
            <h4 className={title.fontTitleSub}>
              How to be a</h4>
            <h2 className={title.fontTitleline}>Mexican?</h2>
            <div className="linea"></div>
          </div>


         <div className="py-3 px-3 row-qh">
            <p className="text-center sm:text-2xl text-xl text-black">
              In our innovative proposal, we don't just serve <b>tacos</b>, but we elevate the culinary experience to a higher level. Each <b>taco we offer is paired with a unique mixology</b>, meticulously designed to complement and enhance the flavors of each ingredient. This blend of tradition and modernity not only satisfies the palate but also offers an unparalleled sensory journey, making each bite and sip an unforgettable flavor symphony. We invite everyone to discover this unique experience where <b>gastronomy and mixology intertwine in perfect harmony</b>.
            </p>
          </div>




       <div
            style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}
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
                <p className="textoFotosHome text-black">Squash blossom tacos </p>
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
                  Tacos<b>
                    <br />& cocktails
                  </b>

                </p>
              </div>
            </Link>
            
          </div> 

        <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href='/reserva'>
              <button type="button" className="buttonComponente" onClick={handleClick}>
                Book now!
              </button>
            </Link>
          </div> 
        </div>}
    
    
    </>
  
  );
}

export default QuickInfo