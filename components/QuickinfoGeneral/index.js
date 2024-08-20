import React from "react";
import title from "../Main/title.module.css";
import card from "../Main/card.module.css";
import Link from "next/link";

import AppContextProvider, { useAppContext } from "../context/Context";
import * as fbq from "../../lib/fpixel";

//imagenes

const image1 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2050.jpg";

const image2 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/tostadaCantinera.jpg";

const image3 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/postres+ricos+deliciosos.JPG";

const image4 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/soncubano3Imagen.jpg";

const image5 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/cantina%2Bllorona%2Btaco.jpg";

function QuickInfo() {
  const handleClick = () => {
    fbq.event("reserva");
  };

  return (
    <>
      <div className="w-full max-w-[1184px] py-[80px] px-[20px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full flex flex-col justify-center">
          {/* <h2 className="font-bold text-2xl">No solo somos</h2> */}
          <h2 className="text-2xl md:text-5xl font-bold">
            Welcome to Cantina La Llorona
          </h2>

          {/* <div className="h-2 bg-white w-full rounded"></div> */}

          <p className="text-start sm:text-2xl text-xl text-black mt-4">
            A blend of tradition and modernity in a cozy setting. Located across
            from Parque España in the heart of Roma Condesa Mexico City, we
            offer a <b>unique sensory journey</b>, where every bite and sip
            becomes an unforgettable symphony of flavors. Perfect for a
            memorable date with a unique design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="">
            <Link href="/menullorona/Alimentos">
              <div className="w-full">
                <img
                  className="w-full h-[280px]  object-cover rounded"
                  src={image1}
                  alt="Cozy table setup for a romantic date at Cantina La Llorona"
                />
              </div>
            </Link>
            <Link href="/menullorona/Alimentos" className="mt-4 block">
              <div>
                <img
                  className="h-[220px] object-cover w-full rounded"
                  src={image5}
                  alt="Delicious Mexican cuisine perfect for a date"
                />
              </div>
            </Link>
          </div>
          <div className="w-full grid grid-cols-1">
            <Link href="/menullorona/Alimentos" className="mt-12">
              <div>
                <img
                  className="h-[220px] object-cover w-full rounded"
                  src={image3}
                  alt="Romantic setting with Mexican food and drinks at Cantina La Llorona"
                />
              </div>
            </Link>

            <Link href="/menullorona/Bebidas/Artesanal" className="mt-4 block">
              <div>
                <img
                  className="h-[280px] object-cover w-full rounded"
                  src={image4}
                  alt="Craft cocktails and cozy ambiance for a perfect date"
                />
              </div>
            </Link>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
        >
          <Link href="/reserva">
            <button className="buttonComponente" onClick={handleClick}>
              Book your date now!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default QuickInfo;
