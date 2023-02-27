import React from 'react'
import MezcalInfo from '../../Components/MezcalInfo/index';
import NuestroMezcalImages from '../../Components/NuestroMezcalImages';
import NuestroMezcalInfo from '../../Components/NuestroMezcalInfo';
import ProcesoElaboracion from '../../Components/ProcesoElaborarion/index';
import TitlebarImageList from '../../Components/TitlebarImageList/index';

function Mezcal() {
  return (
    <>
      <header
        className="col jumbotron-fluid"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/PHOTO-2022-04-27-10-56-11.jpg")`,
          backgroundSize: "cover",
          height: "80vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex subContenedor2Banner">
          <div className="subDiv2Banner">
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
          </div>
        </div>
      </header>
      {/* <MezcalInfo className="mt-0" />
      <ProcesoElaboracion />
      <TitlebarImageList />
      <NuestroMezcalInfo />
      <NuestroMezcalImages/> */}
    </>
  );
}

export default Mezcal