import React, { useEffect } from "react";
import Link from "next/link";
// import title from "../components/Main/title.module.css";
import { useAppContext } from "../../components/context/Context";

import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Script from "next/script";

function Promo3() {
  const { espa } = useAppContext();
  return (
    <>
      {espa ? (
        <Head>
          <title>Super Bowl Cantina La Llorona</title>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
        </Head>
      ) : (
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
        </Head>
      )}
      <div className="w-full bg-gray-900 py-[150px] ">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form px-4 py-4">
            {espa ? (
              <>
                <h1 className="text-5xl text-white">
                  Reserva Ahora Y Gana un <br /> 2x1 en cocteles llorona
                </h1>
                <p className="text-white">
                  ¡Prepárate para la gran noche del fútbol americano en
                  <strong>Cantina La Llorona</strong>! Ubicados en el corazón de
                  la ciudad, te ofrecemos el ambiente más animado y casual para
                  disfrutar del Super Bowl como nunca antes. Nuestra cantina es
                  el lugar perfecto para sumergirte en la emoción del juego,
                  rodeado de buena compañía y un ambiente inigualable.
                </p>

                <InlineWidget url="https://calendly.com/reservaciones-14/reserva-al-superbowl-recibe-un-15-dcto-en-tu-cu-clon" />
              </>
            ) : (
              <>
                <h1 className="text-5xl text-white">
                  Book Now And Win <br /> 2x1 on Llorona Cocktails
                </h1>
                <p className="text-white">
                  Get ready for the big American football night at{" "}
                  <strong>Cantina La Llorona</strong>! Located in the heart of
                  the city, we offer the liveliest and most casual atmosphere
                  for enjoying the Super Bowl like never before. Our cantina is
                  the perfect place to immerse yourself in the excitement of the
                  game, surrounded by good company and an unparalleled
                  atmosphere.
                </p>

                <InlineWidget url="https://calendly.com/reservaciones-14/book-now-and-get-a-15-discount-on-the-billrel-o-clon" />
              </>
            )}
          </div>
          <div className="w-full">
            <img src="../../images/adsreservas/promocion3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo3;
