import React from 'react'
import title from "../../../../components/Main/title.module.css"

import { menuEspa1 } from '../../../../data/menu/menuEspa/menuEspa'
import { menuEspa2 } from '../../../../data/menu/menuEspa/menuEspa'
import { menuEspa3 } from '../../../../data/menu/menuEspa/menuEspa'
import { mixoEspa } from '../../../../data/menu/menuEspa/menuEspa'
import { CervezaArte } from '../../../../data/menu/menuEspa/menuEspa'
import { sodaEspa } from '../../../../data/menu/menuEspa/menuEspa'
import { destiladosEspa } from '../../../../data/menu/menuEspa/menuEspa'
import { mezcaEspa } from '../../../../data/menu/menuEspa/menuEspa'


function Artesanal() {
  const menuComida1 = menuEspa1;
  const menuComida2 = menuEspa2;
  const menuComida3 = menuEspa3;
  const mixologia = mixoEspa;
  const soda = sodaEspa;
  const cervezaArtesanal = CervezaArte;
  const mezcales = mezcaEspa
  const destilados = destiladosEspa; 
  return (
    <>
      <div className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/banner/bannerMenu.jpg")`,
          backgroundSize: "cover",
          height: "40vh",
          backgroundPosition: "center",
          position: "relative"
        }}>

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Mexican Experience</b>
          </h3>
        </div>
      </div>
      <div className='mt-16 mb-16'>
        <div className="row-qh">
          <h4 className={title.fontTitleSub}>Bebidas Mexicanas</h4>
          <h2 className={title.fontTitleline}>
            CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON SABORES Y DESTILADOS MEXICANOS
          </h2>
          <div className="linea"></div>
          <div className="w-full px-4">
            <img
              src={mixologia}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
          <div className="w-full px-4">
            <img
              src={mezcales}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
          <div className="w-full px-4">
            <img
              src={cervezaArtesanal}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
          <>
            <h4 className={title.fontTitleSub}>Platillos mexicanos</h4>
            <h2 className={title.fontTitleline}>
              Cocinados con amor y mucho sazón
            </h2>
            <div className="linea"></div>

            <div className="w-full px-4">
              <img
                src={menuComida1}
                alt="comida sabrosa"
                width={1000}
                height={500}
                className="w-full"
              />
            </div>
            <div className="w-full px-4">
              <img
                src={menuComida2}
                alt="comida sabrosa"
                width={1000}
                height={500}
                className="w-full"
              />
            </div>
            <div className="w-full px-4">
              <img
                src={menuComida3}
                alt="comida sabrosa"
                width={1000}
                height={500}
                className="w-full"
              />
            </div>
          </>
          <>
            <h4 className={title.fontTitleSub}>Sodas, Destilados</h4>
            <h2 className={title.fontTitleline}>Cervezas Industriales</h2>
            <div className="linea"></div>
            <div className="w-full px-4">
              <img
                src={destilados}
                alt="destilados"
                width={1000}
                height={500}
                className="w-full"
              />
            </div> <div className="w-full px-4">
              <img
                src={soda}
                alt="soda"
                width={1000}
                height={500}
                className="w-full"
              />
            </div>

          </>
        </div>
      </div>
    </>
  );
}

export default Artesanal