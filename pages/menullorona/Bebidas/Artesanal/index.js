import React from 'react'
import title from "../../../../components/Main/title.module.css"


function Artesanal() {
  const menuComida1 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/menuComida1.jpg";
  const menuComida2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/menuComida2.jpg";
  const mixologia = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/Mixologia.jpg";
  const soda = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/licoresCervezasSodas.jpg";
  const cervezaArtesanal = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/cervezaArtesanal.jpg";
  const mezcales = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mezcales.jpg";
  const destilados = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/destilados.jpg";
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