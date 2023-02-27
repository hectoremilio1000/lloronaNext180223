import React from 'react'
import Section from "../../Modules/styles/section";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";
import "../../styles/global.css";

function MezcalInfo() {
  return (
    <Section className="mt-2">
      <div>
        <h1 className="text-center font-weight-bold">Mezcal Llorona</h1>
      </div>
      <div>
        <h4 className="text-center tituloSection">Nuestro Mezcal</h4>

        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center">
          La llorona es una canción escrita en la comunidad zapoteca del Istmo
          de Tehuantepec, Oaxaca; cuenta la historia de la búsqueda de un gran
          amor.
        </p>

        <p className="text text-center">
          En honor a esta búsqueda del amor hacia la perfección elaboramos un
          sabor que se remonta a 500 años de tradición en la elaboración del
          elixir llamado “mezcal minero”, haciendo alusión al nombre de la
          población donde lo producimos y el cuál se caracteriza por su
          elaboración a mano y su doble destilación en olla de barro.
        </p>
      </QuickInfoWrapper>
      <div className="subSubDiv1Banner">
        <a href="https://wa.me/+5215549242477">
          <button type="button" className="buttonComponente">
            ¡Ordenar ya!
          </button>
        </a>
      </div>
    </Section>
  );
}

export default MezcalInfo