import React from 'react'

import title from "../../../../components/Main/title.module.css"
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
          <div>
            <img
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/licoresCervezasSodas.jpg"
              style={{ height: "30%", width: "100%" }}
            />
            <img
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/destilados.jpg"
              style={{ height: "30%", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Industrial