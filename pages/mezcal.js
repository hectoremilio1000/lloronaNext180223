import React from 'react'
// import MezcalInfo from '../../Components/MezcalInfo/index';
// import NuestroMezcalImages from '../../Components/NuestroMezcalImages';
// import NuestroMezcalInfo from '../../Components/NuestroMezcalInfo';
// import ProcesoElaboracion from '../../Components/ProcesoElaborarion/index';
// import TitlebarImageList from '../../Components/TitlebarImageList/index';

function Mezcal() {
  return (
    <>
      <div className="d-flex subContenedor1Banner "
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/PHOTO-2022-04-27-10-56-11.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          position: "relative"
        }}>

        {/* <video autoPlay muted loop src={videoPort} /> */}

        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            Cómpralo aquí o en Nuestra Sucursal de la Roma Condesa
          </h3>

          <div className="subSubDiv1Banner">
            <a href="https://wa.me/+5215549242477">
              <button type="button" className="buttonComponente">
                ¡Comprar!
              </button>
            </a>
          </div>

          {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
        </div>
      </div>
      {/* <MezcalInfo className="mt-0" />
      <ProcesoElaboracion />
      <TitlebarImageList />
      <NuestroMezcalInfo />
      <NuestroMezcalImages/> */}
    </>
  );
}

export default Mezcal