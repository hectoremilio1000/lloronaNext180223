import React from "react";
import CalendarioFacebook from "../components/CalendarioFacebook";
import NavBar from "../components/NavBarEs/NavBarEs";
import Link from "next/link";

const ReservaFront = () => {
  const image2 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg";
  const image3 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg";
  const image4 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2048.jpg";
  return (
    <>
      <NavBar />
      <div className="w-full bg-black relative">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img
              className="rounded-lg w-full h-[350px] object-cover"
              src={image3}
              alt="Música en vivo"
            />
          </div>

          <div>
            <img
              className="rounded-lg w-full h-[350px] object-cover"
              src={image2}
              alt="Música en vivo"
            />
          </div>

          <div>
            <img
              className="rounded-lg w-full h-[350px] object-cover"
              src={image4}
              alt="Música en vivo"
            />
          </div>
        </div>
        {/* <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
          className="w-full h-full object-cover object-right relative z-[1000]"
          alt=""
        /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[1500]"></div>
        <div className="absolute top-[100px] left-0 right-0 z-[2000] flex flex-col justify-center items-center">
          <p className="text-5xl text-white text-center font-bold">Jueves</p>
          <p className="text-3xl text-white text-center">Piñata cumpleañera</p>
          <p className="text-xl text-white text-center">gratis</p>
          <img
            src="../images/pinatacumpleanerafondo.png"
            className="w-[280px] object-cover object-right relative my-8 z-[1000]"
            alt=""
          />
          <a href="#" className="px-4 py-3 rounded bg-black text-white">
            Reserva Ahora
          </a>
        </div>
      </div>
      <CalendarioFacebook />
      <div className="w-full max-w-[1184px] mx-auto"></div>
    </>
  );
};

export default ReservaFront;
