import React from 'react'
import Section from "../../Modules/styles/section";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";
import "../../styles/global.css";

function NuestroMezcalInfo() {
  return (
    <Section className="mt-2">
      <div>
        <h4 className="text-center tituloSection">Nuestro Mezcal</h4>
        <h2 className="text-center subTituloSection">
          Agaves Coyote, Coyote Cannabis & Jabalí
        </h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center">
          Preferimos la exclusividad, por tanto decidimos elaborar nuestro
          mezcal con agaves silvestes muy escazos siendo el Jabalí y el Coyote
          nuestra elección por su identidad en sus sabores y facilidad al
          paladar.
        </p>

        <div>
          <p className="text text-justify">
            <ol>
              <li>
                Jabalí: el maguey Jabalí es un agave extravagante rojo de hojas
                anchas y puntas filosas, se adorna con filos rojos y sus espinas
                parecen sierras. Endémico en el Estado de Oaxaca, árido,
                requiere poca agua y crece en las barrancas de clima árido.
              </li>
              <li>
                Coyote: Los maestros mezcaleros coinciden que es un maguey
                escurridizo como un “coyote” de ahí viene el origen de su nombre
                común.
              </li>
            </ol>
          </p>
        </div>
      </QuickInfoWrapper>
    </Section>
  );
}

export default NuestroMezcalInfo;