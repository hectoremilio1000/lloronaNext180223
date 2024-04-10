import React from "react";
import title from "../../../components/Main/title.module.css";
import { menuEspa1 } from "../../../data/menu/menuEspa/menuEspa";
import { menuEspa2 } from "../../../data/menu/menuEspa/menuEspa";
import { menuEspa3 } from "../../../data/menu/menuEspa/menuEspa";
import { mixoEspa } from "../../../data/menu/menuEspa/menuEspa";
import { CervezaArte } from "../../../data/menu/menuEspa/menuEspa";
import { sodaEspa } from "../../../data/menu/menuEspa/menuEspa";
import { destiladosEspa } from "../../../data/menu/menuEspa/menuEspa";
import { mezcaEspa } from "../../../data/menu/menuEspa/menuEspa";
import { portada } from "../../../data/menu/menuEspa/menuEspa";
import { menuEspa11 } from "../../../data/menu/menuEspa/menuEspa";
import { mixoEspa2 } from "../../../data/menu/menuEspa/menuEspa";
import MenuDetail from "../../../components/MenuDetail";

function Alimentos() {
  const menuComida1 = menuEspa1;
  const menuComida2 = menuEspa2;
  const mixologia = mixoEspa;
  const mixologia2 = mixoEspa2;
  const soda = sodaEspa;
  const cervezaArtesanal = CervezaArte;
  const mezcales = mezcaEspa;
  const destilados = destiladosEspa;
  const portadaF = portada;
  const menuComida11 = menuEspa11;

  return (
    <>
      {/* <MenuDetail /> */}
      {/* <h2 className={title.fontTitleline}>Cocinado Con Amor Y Mucha Pasión</h2>
      <div className="linea"></div> */}
      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
        <div className="w-full px-4">
          <img
            src={menuComida1}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div>

        <div className="w-full px-4">
          <img
            src={menuComida2}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
        {/* <div className="w-full px-4">
          <img
            src={menuComida3}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div> */}
      </div>

      {/* <h4 className={title.fontTitleSub}>Bebidas Mexicanas</h4>
      <div className="linea"></div>
      <h2 className={title.fontTitleline}>
        CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON
        SABORES Y DESTILADOS MEXICANOS
      </h2> */}
      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
        <div className="w-full px-4">
          <img
            src={mixologia}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
        {/* <div className="w-full px-4">
          <img
            src={mixologia2}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div> */}
        <div className="w-full px-4">
          <img
            src={cervezaArtesanal}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
        <div className="w-full px-4">
          <img
            src={mezcales}
            alt="comida sabrosa"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      {/* <h4 className={title.fontTitleSub}>Sodas, Destilados</h4>
      <div className="linea"></div>
      <h2 className={title.fontTitleline}>Cervezas Industriales</h2> */}

      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
        <div className="w-full px-4">
          <img
            src={destilados}
            alt="destilados"
            width={400}
            height={500}
            className="w-full"
          />
        </div>{" "}
        <div className="w-full px-4">
          <img
            src={soda}
            alt="soda"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Alimentos;
