// pages/reserva-evento.js

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';
import title from '../components/Main/title.module.css';
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo6 from '../components/QuickInfo6';
import Slider from '../components/Sliders/Slider';
import dynamic from 'next/dynamic';
import RevistasPopup from '../components/RevistasPopup';

const PopupTestimonios = dynamic(
  () => import('../components/PopupTestimonios/index'),
  { ssr: false }
);

export default function ReservaEvento() {
  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaEspa]);

  // Imágenes para el evento
  const imageChef1 = '/images/popup/jorge_fernando.jpeg';

  // Link de WhatsApp con mensaje predefinido
  const whatsappLink = `https://wa.me/525549242477?text=${encodeURIComponent(
    'Hola, quiero reservar para el evento del 5 de agosto de 2025 con el Chef Fernando Rayón y el Chef Jorge Guerra.'
  )}`;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Reserva tu lugar para el evento exclusivo con los chefs Fernando Rayón y Jorge Guerra en Cantina La Llorona."
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
                Evento Exclusivo
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                Chef Fernando Rayón & Chef Ejecutivo Jorge Guerra
              </h2>
              <p className="text-white mb-8">
                Acompáñanos el <strong>5 de agosto de 2025</strong> en Cantina
                La Llorona para una experiencia gastronómica única junto a dos
                de los mejores chefs de México.
              </p>
              <div className="mb-8">
                <div>
                  <img
                    className="rounded-lg w-full h-[700px] object-cover"
                    src={imageChef1}
                    alt="Chef Jorge Fernando"
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
                🌺 Cantinazo de Sabores
              </h2>
              <h3 className="text-xl font-medium mb-6">
                Un Menú de degustación exclusivo de Cantina La Llorona
              </h3>

              <p className="mb-4 text-lg text-[#F4F1EE]">
                Una noche para probar lo irrepetible.
                <br />
                <span className="font-semibold">
                  Sólo para quienes saben que la mejor mesa no se pide... se
                  gana.
                </span>
              </p>

              <div className="text-left mt-10 mb-6">
                <h4 className="text-2xl font-semibold mb-4">🍽 El Menú</h4>
                <ul className="space-y-3 list-decimal list-inside text-[#F4F1EE]/90">
                  <li>
                    Flor de calabaza rellena de queso de montaña con trufa
                  </li>
                  <li>
                    Tostada de lengua en escabeche con hummus de tortilla y
                    aguacate
                  </li>
                  <li>
                    Chile ancho relleno de carnitas de pato, mole manchamanteles
                    y chochoyota con hoja santa
                  </li>
                  <li>Tamal canario relleno de cajeta y espuma de guayaba</li>
                </ul>
              </div>

              <p className="mb-6 text-lg text-[#F4F1EE]">
                Cada platillo ha sido creado como una historia para contarse con
                los sentidos.
                <br />
                Sabores atrevidos. Texturas inesperadas. Un festín cantinero,
                sin reglas.
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

            {/* Testimonios, Revistas y Slider como en tu diseño original */}
            <div className="overflow-hidden bg-black mt-16 py-8">
              <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                <div className="text-white text-[80px] font-bold">
                  TESTIMONIOS
                </div>
                <div className="text-[#3eeb91] text-[80px] font-bold">
                  TESTIMONIOS
                </div>
              </div>
              <PopupTestimonios idioma={espa} />
            </div>

            <div className="bg-white py-8">
              <div className="overflow-hidden mb-4">
                <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                  <div className="text-black text-[80px] font-bold">REVISTAS</div>
                  <div className="text-[#3eeb91] text-[80px] font-bold">
                    RECOMENDADOS
                  </div>
                </div>
              </div>
              <RevistasPopup idioma={espa} />
            </div>

            {/* <div className="mt-12">
              <Slider />
            </div> */}
          </>
        ) : (
          // Aquí podrías replicar la versión en inglés si la necesitas
          <>
            <div className="max-w-[800px] mx-auto text-center px-4">
              <h1 className="font-bold text-5xl text-white mb-4">
                Exclusive Event
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                Chef Fernando Rayón & Executive Chef Jorge Guerra
              </h2>
              <p className="text-white mb-8">
                Join us on <strong>August 5, 2025</strong> at Cantina La Llorona
                for a unique culinary experience with two of Mexico’s top chefs.
              </p>
              <div className="mb-8">
                <img
                  className="rounded-lg w-full h-[700px] object-cover"
                  src={imageChef1}
                  alt="Chef Jorge Fernando"
                />
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Book now
              </a>
            </div>

            <div className="overflow-hidden bg-black mt-16 py-8">
              <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                <div className="text-white text-[80px] font-bold">
                  TESTIMONIALS
                </div>
                <div className="text-[#3eeb91] text-[80px] font-bold">
                  TESTIMONIALS
                </div>
              </div>
              <PopupTestimonios idioma={false} />
            </div>

            <div className="bg-white py-8">
              <div className="overflow-hidden mb-4">
                <div className="flex items-center gap-4 whitespace-nowrap animate-marqueeleft">
                  <div className="text-black text-[80px] font-bold">
                    MAGAZINES
                  </div>
                  <div className="text-[#3eeb91] text-[80px] font-bold">
                    RECOMMENDED
                  </div>
                </div>
              </div>
              <RevistasPopup idioma={false} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
