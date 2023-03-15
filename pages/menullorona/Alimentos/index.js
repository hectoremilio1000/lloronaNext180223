import React from 'react'
import title from "../../../components/Main/title.module.css"
// import Image from 'next/image';
import Link from "next/link";
// import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles';

function Alimentos() {
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
        <h4 className={title.fontTitleSub}>Platillos mexicanos</h4>
        <h2 className={title.fontTitleline}>
          Cocinados con amor y mucho sazón
        </h2>
        <div className="linea"></div>
        <div className='row-qh'>
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/menuComida1.jpg"
            style={{ height: "30%", width: "100%" }}
          />
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/menuComida2.jpg"
            style={{ height: "30%", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Alimentos