import React, { useEffect } from "react";
import Link from "next/link";
// import title from "../components/Main/title.module.css";
import { useAppContext } from "../../components/context/Context";

import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Script from "next/script";

function Promo2() {
  const { espa } = useAppContext();
  return (
    <>
      {espa ? (
        <Head>
          <title>Sorprende a tu pareja en San Valentín</title>
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
      <div className="w-full bg-red-800 py-[150px] ">
        <div className="max-w-[1300px] grid-col-reverse mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div className="form py-4 order-2 md:order-1">
            {espa ? (
              <>
                <h1 className="text-3xl md:text-5xl text-white text-center">
                  Reserva Ahora Y Gana <br /> un postre especial
                </h1>
                <p className="text-white">
                  ¡Estamos evolucionando, un nuevo menú te espera! Si reservas
                  este 14 de febrero, nuestro chef tiene un postre que preparará
                  especialmente para Ti.
                </p>
                <InlineWidget url="https://calendly.com/reservaciones-14/reserva-ahora-y-gana-un-2x1-en-cocteles-llorona-clon" />
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-5xl text-white text-center">
                  Book Now and Win <br /> A Special Dessert
                </h1>
                <p className="text-white">
                  We're evolving, a new menu awaits you! If you book this
                  February 14th, our chef has a dessert that he will prepare
                  especially for You.
                </p>

                <InlineWidget url="https://calendly.com/reservaciones-14/book-now-and-get-2-for-1-on-cocktails-clon" />
              </>
            )}
          </div>
          <div className="w-full order-1 md:order-2">
            <img src="../../images/promociones/postre2.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo2;
