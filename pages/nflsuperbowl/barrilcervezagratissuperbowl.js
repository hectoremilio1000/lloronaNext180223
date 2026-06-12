import React, { useEffect } from 'react';
import Link from 'next/link';
// import title from "../components/Main/title.module.css";
import { useAppContext } from '../../components/context/Context';

import { InlineWidget } from 'react-calendly';
import Head from 'next/head';
import Script from 'next/script';

function Promo1() {
  const { espa } = useAppContext();
  const image1 =
    '/img/mixologia/amigas-martini-rosa.webp';
  const image2 =
    '/img/mixologia/amigas-martini-rosa.webp';
  const image3 =
    '/img/mixologia/coctel-sin-alcohol.webp';
  const image4 =
    '/img/mixologia/amigas-martini-rosa.webp';

  const image5 =
    '/img/mixologia/coctel-mazapan-martini.webp';
  const image6 =
    '/img/mixologia/coctel-mazapan-martini.webp';
  const image7 =
    '/img/mixologia/coctel-mazapan-martini.webp';
  const image8 =
    '/img/mixologia/coctel-entrada.webp';

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
        <div className="max-w-[1300px] grid-col-reverse mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          <div className="form py-4 order-2 md:order-1">
            {espa ? (
              <>
                <h1 className="text-3xl md:text-5xl text-white text-center">
                  Reserva Ahora y Gana un <br /> una Cerveza de Barril Gratis
                </h1>
                <p className="text-white">
                  ¡Prepárate para la gran noche del fútbol americano en
                  <strong> Cantina La Llorona</strong>! Ubicados en el corazón
                  de la roma condesa, te ofrecemos el ambiente más animado para
                  disfrutar del Super Bowl como nunca antes. Nuestra cantina es
                  el lugar perfecto para sumergirte en la emoción del juego,
                  rodeado de buena compañía y un ambiente inigualable.
                </p>

                <InlineWidget url="https://calendly.com/reservaciones-14/cervezabarrilgratissuperbowl?hide_gdpr_banner=1" />
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-5xl text-white text-center">
                  Book Now And Win <br /> A Free Draft Beer
                </h1>
                <p className="text-white">
                  Gear up for the ultimate football night at
                  <strong>Cantina La Llorona! </strong> Nestled in the vibrant
                  heart of Roma Condesa, we provide the most spirited setting to
                  experience the Super Bowl like never before. Our cantina is
                  the ideal spot to dive into the thrill of the game, amidst
                  great company and an unparalleled ambiance.
                </p>

                <InlineWidget url="https://calendly.com/reservaciones-14/bookforthesuperbowlandgetafreedraftbeer" />
              </>
            )}
          </div>
          <div className="w-full order-1 md:order-2">
            <img src="../../images/adsreservas/promocion 1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo1;
