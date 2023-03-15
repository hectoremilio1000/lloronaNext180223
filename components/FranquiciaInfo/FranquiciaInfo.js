import React from 'react'

import title from "../Main/title.module.css"
import TitlebarImageListFranquicias from '../TitlebarImageListFranquicias/index';

function FranquiciaInfo() {
  return (
    <div className="mt-16 mb-16 px-4">
      <div>
        <h1 className={title.fontTitlemain}>Franquicias LLorona</h1>
      </div>
      <div>
        <h4 className={title.fontTitleSub}>Te garantizamos</h4>
        <h2 className={title.fontTitleline}>
          Retornos de Inversión de 1 año
        </h2>
        <div className="linea"></div>
      </div>

      <div className='row-qh'>
        <p className="text text-justify text-black mt-8">
          Hemos aprendido que no hay mejor momento que invertir cuando los
          tiempos son más difíciles. Ya que mientras otros ven problemas,
          nosotros vemos grandes oportunidades.
        </p>
        <p className="text text-justify text-black">
          Con un modelo único de experiencias gastronómicas que incluyen:
        </p>

        <ul>
          <li className="text text-justify text-black">
            Mixología y Gastronomía única con un recetario mejorado
            continúamente y con procesos claros.
          </li>
          <li className="text text-justify text-black">
            Producción y Venta de nuestro propio <b>Mezcal Artesanal</b>{" "}
            producido en Santa Catarina Minas, Oaxaca.
          </li>
          <li className="text text-justify text-black">
            Diseño y Venta de <b>Playeras y Sudaderas</b> realizado por
            grandes artistas mexicanos contemporáneos.
          </li>
          <li className="text text-justify text-black">
            Un modelo de crecimiento acelerado en ventas (growth hacking) a
            través de la
            <b> viralidad de nuestro contenido</b> en redes sociales.
          </li>
          <li className="text text-justify text-black">
            <b>Procesos y manuales exactos </b>que han sido elaborados con
            grandes mixólogos, chefs y operadores nacionales e
            internacionales, y plasmados en documentos fáciles de leer y
            seguir para nuestro personal.
          </li>
          <li className="text text-justify text-black">
            <b>Software</b> programado especialmente para nuestra empresa para
            Administrar los Inventarios, así como acceder a las Ventas, Costos
            y Utilidades en tiempo real, permitiéndonos que la información sea
            muy transparente en todo momento, y que nos ayude a analizar y
            exponenciar nuestras capacidades como Modelo de Negocio.
          </li>
        </ul>
        Siendo esto, así como la experiencia del grupo restaurantero plasmada
        en varios modelos de negocio exitósos lo que nos permite tener un
        <span className="text-uppercase font-weight-bold h4">
          {" "}
          retorno de inversión de 1 año.
        </span>

        <p className="text text-justify text-black mb-16">
          En este sentido, se han construido dos modelos de negocio que permiten
          adecuarse a las características del entorno económico donde exista la
          capacidad de establecer uno, sin tener que mermar las ventas y sobre
          todo sin poner en riesgo el retorno de inversión.
        </p>
        <h2 className={title.fontTitleSub}>2 modelos de negocio</h2>
        <div className="linea"></div>
        <h2 className="text-left h4 pt-3">Restaurante - SpeakEasy</h2>
        <h2 className="text-left h5 pt-1 text-uppercase">
          Espacio requerido: 200 a 300 m2
        </h2>
        <h2 className="text-left h6 pt-1 text-uppercase">
          Monto de la inversión: 4 a 6 mdp
        </h2>
        <p className="text text-justify text-black">
          Nuestro concepto único de mixología espectacular y recetas únicas
          gastrónomicas nos han permitido posicionarnos como un ícono en cuanto
          a Grupo Restaurantero, ya que nuestra historia se remonta no sólo a
          este concepto. La categoría de Restaurante SpeakEasy nos permite
          fusionar elementos de nuestras recetas gastronómicas únicas, con un
          concepto de SpeakEasy que explota las recetas de la mixología en un
          ambiente que contrasta lo moderno con lo tradicional.
        </p>
        <h2 className="text-left h4 pt-3">SpeakEasy</h2>
        <h2 className="text-left h5 pt-1 text-uppercase">
          Espacio requerido: 120 a 200 m2
        </h2>
        <h2 className="text-left h6 pt-1 text-uppercase">
          Monto de la inversión: 2 a 3 mdp
        </h2>
        <p className="text text-justify text-black mb-16">
          Este modelo de negocio permite explotar espacios más pequeños, sin
          dejar a un lado lo asombroso de nuestra mixología y gastronomía.
          Permitiéndonos crear un espacio pequeño de comida y bebidas exterior,
          y un speakeasy con sensaciones musicales únicas.
        </p>
      </div>
      <TitlebarImageListFranquicias />
    </div>
  );
}

export default FranquiciaInfo;