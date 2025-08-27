// pages/reserva-chile-nogada.js

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import title from '../components/Main/title.module.css';
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';
import NavBar from '../components/NavBarEs/NavBarEs';
import RevistasPopup from '../components/RevistasPopup';
import dynamic from 'next/dynamic';

const PopupTestimonios = dynamic(
  () => import('../components/PopupTestimonios/index'),
  { ssr: false }
);

export default function ReservaChileNogada() {
  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaEspa]);

  // Imagen destacada del platillo
  const chileNogadaImg = '/images/chile_en_nogada.jpg';

  // Link de WhatsApp con mensaje predefinido
  const whatsappLink = `https://wa.me/525549242477?text=${encodeURIComponent(
    'Hola, quiero reservar una mesa para disfrutar los Chiles en Nogada en Cantina La Llorona.'
  )}`;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Reserva tu mesa para disfrutar los mejores Chiles en Nogada en Cantina La Llorona, Roma/Condesa."
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-11160821109`}
        />
      </Head>

      <NavBar
        onLanguageChange={(lang) =>
          lang === 'espa' ? onIdiomaEspa() : onIdiomaIngles()
        }
      />

      <div className="w-full bg-black h-[300px]"></div>
      <div className="w-full bg-[#020a06] -mt-[150px] pb-16">
        {espa ? (
          <>
            <div className="max-w-[800px] mx-auto text-center px-4">
              <h1 className="font-bold text-5xl text-white mb-4">
                Chiles en Nogada
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                La joya de la temporada en Cantina La Llorona
              </h2>
              <p className="text-white mb-8">
                Ven a disfrutar los{' '}
                <strong>mejores chiles en nogada de la CDMX</strong>, con nogada
                cremosa, granada fresca y todo el sabor de México en cada
                bocado.
              </p>
              <div className="mb-8">
                <div>
                  <img
                    className="rounded-lg w-full h-[700px] object-cover"
                    src={chileNogadaImg}
                    alt="Chile en Nogada Cantina La Llorona"
                  />
                </div>
              </div>
              {/* Botón de WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Reservar por WhatsApp
              </a>
            </div>

            <section className="max-w-2xl mx-auto pt-8 px-6 text-center text-[#F4F1EE] rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#3eeb91]">
                🇲🇽 Temporada de Orgullo Mexicano
              </h2>
              <h3 className="text-xl font-medium mb-6">
                Un platillo que celebra nuestra historia y tradición
              </h3>

              <p className="mb-4 text-lg text-[#F4F1EE]">
                Elaborados con ingredientes frescos, balance perfecto entre lo
                dulce, lo salado y lo cremoso.
                <br />
                <span className="font-semibold">
                  Una experiencia que solo vivirás una vez al año.
                </span>
              </p>

              <p className="text-xl font-semibold mb-4 text-[#3eeb91]">
                🎟 Cupo limitado. Solo por reservación.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Reservar por WhatsApp
              </a>
            </section>

            {/* Testimonios, Revistas */}
            <div className="overflow-hidden bg-black mt-16 py-8">
              <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                <h1 className="text-white text-[80px] font-bold">
                  TESTIMONIOS
                </h1>
                <h1 className="text-[#3eeb91] text-[80px] font-bold">
                  TESTIMONIOS
                </h1>
              </div>
              <PopupTestimonios idioma={espa} />
            </div>

            <div className="bg-white py-8">
              <div className="overflow-hidden mb-4">
                <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                  <h1 className="text-black text-[80px] font-bold">REVISTAS</h1>
                  <h1 className="text-[#3eeb91] text-[80px] font-bold">
                    RECOMENDADOS
                  </h1>
                </div>
              </div>
              <RevistasPopup idioma={espa} />
            </div>
          </>
        ) : (
          // English version
          <>
            <div className="max-w-[800px] mx-auto text-center px-4">
              <h1 className="font-bold text-5xl text-white mb-4">
                Chiles en Nogada
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                The seasonal jewel at Cantina La Llorona
              </h2>
              <p className="text-white mb-8">
                Taste the <strong>best chiles en nogada in Mexico City</strong>,
                creamy nogada, fresh pomegranate and all the flavor of
                tradition.
              </p>
              <div className="mb-8">
                <img
                  className="rounded-lg w-full h-[700px] object-cover"
                  src={chileNogadaImg}
                  alt="Chile en Nogada Cantina La Llorona"
                />
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Book via WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
