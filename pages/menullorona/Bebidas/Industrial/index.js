import React from 'react'

import title from "../../../../components/Main/title.module.css"
import menuComida1 from '../../../../public/images/menuEspa/menuComida1.jpg'
import menuComida2 from '../../../../public/images/menuEspa/menuComida2.jpg'
import mixologia from '../../../../public/images/menuEspa/Mixologia.jpg'
import soda from '../../../../public/images/menuEspa/licoresCervezasSodas.jpg'
import cervezaArtesanal from '../../../../public/images/menuEspa/cervezaArtesanal.jpg'
import mezcales from '../../../../public/images/menuEspa/mezcales.jpg'
import destilados from '../../../../public/images/menuEspa/destilados.jpg'
import Image from 'next/image'
function Industrial() {
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
          <h4 className={title.fontTitleSub}>Sodas, Destilados</h4>
          <h2 className={title.fontTitleline}>Cervezas Industriales</h2>
          <div className="linea"></div>
          <div className="w-full px-4">
            <Image
              src={destilados}
              alt="destilados"
              width={1000}
              height={500}
              className="w-full"
            />
          </div> <div className="w-full px-4">
            <Image
              src={soda}
              alt="soda"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <>
        <h4 className="text-center tituloSection">Platillos mexicanos</h4>
        <h2 className="text-center subTituloSection">
          Cocinados con amor y mucho sazón
        </h2>
        <div className="linea"></div>

        <div className="w-full px-4">
          <Image
            src={menuComida1}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
        <div className="w-full px-4">
          <Image
            src={menuComida2}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
      </>
      <>
        <h4 className="text-center tituloSection">Bebidas Mexicanas</h4>
        <h2 className="text-center subTituloSection">
          CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON SABORES Y DESTILADOS MEXICANOS
        </h2>
        <div className="linea"></div>

        <div className="w-full px-4">
          <Image
            src={mixologia}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
        <div className="w-full px-4">
          <Image
            src={mezcales}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
        <div className="w-full px-4">
          <Image
            src={cervezaArtesanal}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div> 
      </>
    </>
  );
}

export default Industrial