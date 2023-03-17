import React from 'react'
import title from "../../../components/Main/title.module.css"
import ButtonComponent from '../../../components/ButtonComponent';

function Bebidas() {
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
        <h4 className={title.fontTitleSub}>Bebidas</h4>
        <h2 className={title.fontTitleline}>
          Llorona
        </h2>
        <div className="linea"></div>
      </div>
      <div className="contenedorMenu mb-3">
        <ButtonComponent
          titulo="LO MEXICANO: CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON SABORES Y DESTILADOS MEXICANOS"
          enlace="Bebidas/Artesanal"
        />


        <ButtonComponent titulo="SODAS, DESTILADOS Y CERVEZAS INDUSTRIALES" enlace="Bebidas/Industrial" />

      </div>
    </>
  );
}

export default Bebidas