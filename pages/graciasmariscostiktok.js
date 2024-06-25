import Link from "next/link";
import React from "react";

const GraciasMariscosTiktok = () => {
  return (
    <div className="h-[100vh] w-full bg-black py-[120px] flex flex-col justify-center items-center fixed z-[6000] left-0 right-0">
      <div className="w-full max-w-[1184px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl text-white text-center">
          Gracias por tu reserva
        </h1>
        <p className="text-xl text-white text-center mx-auto max-w-[700px]">
          Gracias por elegir Cantina La Llorona para tu próxima experiencia
          culinaria! Nos llena de alegría saber que has decidido reservar una
          mesa con nosotros. Estamos emocionados de poder brindarte una velada
          inolvidable llena de deliciosos sabores y momentos especiales. <br />{" "}
          Tu reserva ha sido confirmada con éxito. Prepárate para disfrutar de
          auténticos platillos mexicanos en un ambiente cálido y acogedor.{" "}
          <br />
          Si necesitas realizar alguna modificación a tu reserva o tienes alguna
          pregunta, nuestro equipo está aquí para ayudarte. No dudes en ponerte
          en contacto con nosotros.
        </p>
        <Link className="px-4 py-3 bg-white font-bold rounded" href={"/"}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default GraciasMariscosTiktok;
