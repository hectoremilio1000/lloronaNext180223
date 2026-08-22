// pages/chiles-en-nogada-cdmx.js

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
  const chileNogadaImg = '/img/eventos/chile-en-nogada.webp';

  // Link de WhatsApp con mensaje predefinido
  const whatsappLink = `https://wa.me/525549242477?text=${encodeURIComponent(
    'Hola, quiero reservar una mesa para los Chiles en Nogada en Cantina La Llorona. ¿Qué disponibilidad tienen?'
  )}`;

  // Schema.org: ayuda a Google a mostrar rich results del platillo
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Cantina La Llorona',
    servesCuisine: 'Mexicana',
    url: 'https://lalloronacantina.com/chiles-en-nogada-cdmx/',
    image: 'https://lalloronacantina.com/img/eventos/chile-en-nogada.webp',
    telephone: '+525549242477',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    acceptsReservations: 'True',
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: {
        '@type': 'MenuSection',
        name: 'Temporada',
        hasMenuItem: {
          '@type': 'MenuItem',
          name: 'Chiles en Nogada',
          description:
            'Chiles en nogada de temporada con nogada cremosa y granada fresca, acompañados de mariachi y son cubano en vivo todos los días.',
        },
      },
    },
  };

  return (
    <>
      <Head>
        <title>
          Chiles en Nogada en CDMX con Mariachi y Son Cubano en Vivo | Cantina
          La Llorona
        </title>
        <meta
          name="description"
          content="Chiles en nogada de temporada en Cantina La Llorona, Roma/Condesa, con mariachi y son cubano en vivo todos los días. Ya disponibles por tiempo limitado. Reserva tu mesa."
        />
        <link
          rel="canonical"
          href="https://lalloronacantina.com/chiles-en-nogada-cdmx/"
        />
        <meta
          property="og:title"
          content="Chiles en Nogada con Mariachi y Son Cubano en Vivo | Cantina La Llorona"
        />
        <meta
          property="og:description"
          content="Ya disponibles y por tiempo limitado. Chiles en nogada acompañados de mariachi y son cubano en vivo todos los días en Cantina La Llorona."
        />
        <meta
          property="og:image"
          content="https://lalloronacantina.com/img/eventos/chile-en-nogada.webp"
        />
        <meta
          property="og:url"
          content="https://lalloronacantina.com/chiles-en-nogada-cdmx/"
        />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <p className="inline-block bg-[#3eeb91] text-black font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Ya disponibles · Por tiempo limitado
              </p>
              <h1 className="font-bold text-5xl text-white mb-4">
                Chiles en Nogada en CDMX
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                Con mariachi y son cubano en vivo todos los días
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

            <section className="max-w-[900px] mx-auto mt-16 px-6 text-center text-[#F4F1EE]">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#3eeb91]">
                🎺 Acompáñalos con música en vivo
              </h2>
              <h3 className="text-xl font-medium mb-8">
                Mariachi y son cubano en vivo, todos los días
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Link href="/jueves_mariachi">
                  <div className="bg-black/40 rounded-2xl p-6 h-full hover:bg-black/60 transition cursor-pointer">
                    <img
                      className="rounded-xl w-full h-[220px] object-cover mb-4"
                      src="/img/mariachi/mariachi-en-vivo-mesas.webp"
                      alt="Mariachi en vivo tocando entre las mesas de Cantina La Llorona"
                      loading="lazy"
                    />
                    <h4 className="text-2xl font-bold text-[#3eeb91] mb-2">
                      Mariachi en vivo
                    </h4>
                    <p className="text-[#F4F1EE]">
                      El mariachi llega a tu mesa mientras disfrutas tus chiles
                      en nogada. Pide tu canción favorita.
                    </p>
                  </div>
                </Link>
                <Link href="/salsa">
                  <div className="bg-black/40 rounded-2xl p-6 h-full hover:bg-black/60 transition cursor-pointer">
                    <img
                      className="rounded-xl w-full h-[220px] object-cover mb-4"
                      src="/img/salsa/cantante-son-cubano.webp"
                      alt="Son cubano en vivo en Cantina La Llorona"
                      loading="lazy"
                    />
                    <h4 className="text-2xl font-bold text-[#3eeb91] mb-2">
                      Son cubano en vivo
                    </h4>
                    <p className="text-[#F4F1EE]">
                      Sones, boleros y salsa en vivo para cerrar la noche
                      bailando.
                    </p>
                  </div>
                </Link>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Reservar mesa con música en vivo
              </a>
            </section>

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
              <p className="inline-block bg-[#3eeb91] text-black font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-4">
                Available now · Limited time
              </p>
              <h1 className="font-bold text-5xl text-white mb-4">
                Chiles en Nogada in Mexico City
              </h1>
              <h2 className="text-2xl text-[#3eeb91] mb-6">
                With live mariachi and son cubano every day
              </h2>
              <p className="text-white mb-8">
                Taste the <strong>best chiles en nogada in Mexico City</strong>,
                creamy nogada, fresh pomegranate and all the flavor of
                tradition — with{' '}
                <strong>live mariachi and son cubano every day</strong>.
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
