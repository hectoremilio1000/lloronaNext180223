import React from "react";
import title from "../../../components/Main/title.module.css";

import { menuFood1 } from "../../../data/menu/menuIngles";
import { menuFood11 } from "../../../data/menu/menuIngles";
import { menuFood2 } from "../../../data/menu/menuIngles";
import { menuFood3 } from "../../../data/menu/menuIngles";
import { mixoIngles } from "../../../data/menu/menuIngles";

import { mixoIngles2 } from "../../../data/menu/menuIngles";
import { CervezaArteIngles } from "../../../data/menu/menuIngles";
import { sodaEspaIngles } from "../../../data/menu/menuIngles";
import { destiladosEspaIngles } from "../../../data/menu/menuIngles";
import { mezcaEspaIngles } from "../../../data/menu/menuIngles";
import { portadaIngles } from "../../../data/menu/menuIngles";

function MenuFood() {
  const menuComida1 = menuFood1;
  const menuComida11 = menuFood11;
  const menuComida2 = menuFood11;
  const menuComida3 = menuFood3;
  const mixologia = mixoIngles;
  const soda = sodaEspaIngles;
  const cervezaArtesanal = CervezaArteIngles;
  const mezcales = mezcaEspaIngles;
  const destilados = destiladosEspaIngles;
  const portadaF = portadaIngles;
  const mixologia2 = mixoIngles2;

  return (
    <>
      {/* <div className="d-flex subContenedor1Banner banner"
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
            </div> */}

      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
        <>
          {/* <h4 className={title.fontTitleSub}>Mexican dishes</h4> */}
          {/* <div className="w-full px-4">
                        <img
                            src={portadaF}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> */}

          <div className="w-full px-4">
            <img
              src={menuComida1}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>

          {/* <div className="w-full px-4">
                        <img
                            src={menuComida11}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> */}

          <div className="w-full px-4">
            <img
              src={menuComida2}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div>
          {/* <div className="w-full px-4">
            <img
              src={menuComida3}
              alt="comida sabrosa"
              width={1000}
              height={500}
              className="w-full"
            />
          </div> */}
        </>
      </div>

      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
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
            src={mixologia2}
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
        </div>{" "}
        <div className="w-full px-4">
          <img
            src={mezcales}
            alt="comida sabrosa"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
      </div>

      <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8">
        <div className="w-full px-4">
          <img
            src={destilados}
            alt="destilados"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>{" "}
        <div className="w-full px-4">
          <img
            src={soda}
            alt="soda"
            width={1000}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default MenuFood;
