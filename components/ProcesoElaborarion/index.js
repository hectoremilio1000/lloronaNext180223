import React from 'react'
import Section from "../../Modules/styles/section";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";
import "../../styles/global.css";

function ProcesoElaboracion() {
  return (
    <Section className="mt-0">
      <div>
        <h4 className="text-center tituloSection">PROCESO ANCESTRAL</h4>
        <h2 className="text-center subTituloSection">DE ELABORACIÓN</h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center">
          Nuestro proceso de elaboración es de un mezcal ancestral, en el cual
          el agave debe de cocerse por completo en un horno de tierra, además de
          que el proceso de fermentación se realiza en tinas de ayacahuite- y,
          posteriormente, debe destilarse en alambiques de barro.
        </p>

        <p className="text text-center">
          Nuestro mezcal es 100% natural, sin ningún químico agregado a
          diferencia de otros destilados y, por tanto, nunca te causará ningún
          tipo de malestar, incluso por eso le decimos que es virgen ya que no
          causa cruda.
        </p>
        <div>
          <p className="text text-justify">
            El proceso es:
            <ol>
              <li>
                Se escoge el mejor agave silvestre en este caso Jabalí o
                Tepeztate.
              </li>
              <li>
                Se corta la piña (Tronco corto y grueso del maguey) y se lleva a
                nuestro palenque ubicado en Santa Catarina Minas, Oaxaca.
              </li>
              <li>
                En este momento empieza el proceso de cocción en tierra durante
                1 día.
              </li>

              <li>
                Como es ancestral, una persona lo muele manualmente con un
                pedazo de tronco.
              </li>
              <li>
                Posteriormente, se pone a fermentar (10 días) los agaves cocidos
                y triturados con agua.
              </li>
              <li>
                Se destila en un alambique de barro lo que agrega ciertas notas
                de sabor que lo hacen único en sus características.
              </li>

              <li>
                Para que finalmente, el maestro mezcalero, con su historia
                tradicional que se remonta a generaciones, se encarga de darle
                la graduación correcta.
              </li>
            </ol>
          </p>
        </div>
      </QuickInfoWrapper>
    </Section>
  );
}

export default ProcesoElaboracion;