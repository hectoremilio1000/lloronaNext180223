import React, { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import { useAppContext } from '../context/Context';
import * as fbq from '../../lib/fpixel';
import { FB_PIXEL_ID } from '../../lib/fpixel';

import NavBar from '../NavBarEs/NavBarEs';
import CalendarioGoogleAds from '../CalendarioGoogleAds';
import QuickInfo5 from '../QuickInfo5';
import QuickInfo6 from '../QuickInfo6';

/* Estructura de /salsa para las dos landings de abogados
 * (/miercoles-abogados y /jueves-abogados). Cada página manda su día en
 * `config`; así las dos son idénticas salvo el día y se puede comparar
 * cuál trae más reservas. */

const SITIO = 'https://lalloronacantina.com';
const IMAGEN_GRUPO = '/img/abogados/abogados-brindis-mesa.webp';
const IMAGEN_MUSICA = '/img/salsa/cantante-son-cubano.webp';

export default function LandingAbogados({ config }) {
  const { slug, campaign, dia, diaEn, cartel, seo } = config;
  const urlPagina = `${SITIO}/${slug}/`;

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: `Abogados ${dia}`,
      content_category: `landing_${campaign}`,
    });

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view_abogados',
        page_type: 'landing',
        campaign,
      });
    }
  }, [campaign, dia]);

  const { espa } = useAppContext();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Cantina La Llorona',
    servesCuisine: 'Mexicana',
    url: urlPagina,
    image: `${SITIO}${cartel}`,
    telephone: '+525549242477',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    acceptsReservations: 'True',
    description: seo.description,
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={urlPagina} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlPagina} />
        <meta property="og:image" content={`${SITIO}${cartel}`} />
        <meta property="og:description" content={seo.ogDescription} />
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
          src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
        />
      </Head>

      <NavBar />

      {/* Cartel del día: es vertical, así que se centra y no se recorta */}
      <div className="w-full bg-black pt-[110px] pb-6 px-4 flex justify-center">
        <img
          src={cartel}
          alt={`${dia} de abogados en Cantina La Llorona: mezcal de bienvenida presentando tu cédula`}
          className="max-h-[70vh] w-auto max-w-full rounded-lg"
        />
      </div>

      <div className="w-full bg-[#020a06] pt-10">
        <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
          <div className="w-full">
            {espa ? (
              <>
                <h1 className="text-3xl md:text-4xl text-white pt-4 font-bold">
                  {dia} de Abogados en Cantina La Llorona
                </h1>
                <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                  Presenta tu cédula y te invitamos el mezcal de bienvenida
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={IMAGEN_GRUPO}
                      alt={`Abogados brindando un ${dia.toLowerCase()} en Cantina La Llorona`}
                    />
                    <p className="text-white pt-2 font-bold">
                      Muestra tu cédula <br />
                      profesional
                    </p>
                  </div>

                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={IMAGEN_MUSICA}
                      alt="Grupo en vivo en Cantina La Llorona"
                    />
                    <p className="text-white pt-2 font-bold">
                      Grupo en vivo <br />
                      todos los {dia.toLowerCase()}
                    </p>
                  </div>
                </div>

                <p className="text-start text-white sm:text-xs md:text-2xl mt-4">
                  Todos los <b>{dia.toLowerCase()}</b> son de abogados en{' '}
                  <b>Cantina La Llorona</b>. Llega con tu <b>cédula
                  profesional</b>, preséntala y te invitamos el{' '}
                  <b>mezcal de bienvenida</b> 🥃.
                </p>
                <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                  Disfruta del <b>grupo en vivo</b>, nuestra coctelería de autor
                  y la cocina mexicana de la Roma–Condesa. Reserva tu mesa y
                  trae al despacho completo 🎺⚖️.
                </p>
                <p className="text-gray-400 text-sm mt-3 text-start">
                  📍 Cantina La Llorona • Roma–Condesa, CDMX • Todos los{' '}
                  {dia.toLowerCase()}
                </p>
                <p className="text-gray-400 text-sm mt-2 text-start">
                  También te puede interesar:{' '}
                  <Link href="/salsa/" className="text-[#3eeb91]">
                    Son cubano en vivo
                  </Link>
                  {' • '}
                  <Link href="/after-office/" className="text-[#3eeb91]">
                    After office
                  </Link>
                  {' • '}
                  <Link href="/menullorona/" className="text-[#3eeb91]">
                    Ver el menú
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl text-white pt-4 font-bold">
                  Lawyers {diaEn} at Cantina La Llorona
                </h1>
                <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                  Show your bar ID and the welcome mezcal is on us
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={IMAGEN_GRUPO}
                      alt="Lawyers toasting at Cantina La Llorona"
                    />
                    <p className="text-white pt-2 font-bold">
                      Show your <br />
                      professional ID
                    </p>
                  </div>

                  <div>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={IMAGEN_MUSICA}
                      alt="Live band at Cantina La Llorona"
                    />
                    <p className="text-white pt-2 font-bold">
                      Live band <br />
                      every {diaEn.toLowerCase()}
                    </p>
                  </div>
                </div>

                <p className="text-start text-white sm:text-xs md:text-2xl mt-4">
                  Every <b>{diaEn}</b> is lawyers night at{' '}
                  <b>Cantina La Llorona</b>. Show your{' '}
                  <b>professional ID</b> and your <b>welcome mezcal</b> is on
                  us 🥃.
                </p>
                <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                  Enjoy the <b>live band</b>, our signature cocktails and
                  Mexican cuisine in Roma–Condesa. Book your table and bring
                  the whole firm 🎺⚖️.
                </p>
                <p className="text-gray-400 text-sm mt-3 text-start">
                  📍 Cantina La Llorona • Roma–Condesa, Mexico City • Every{' '}
                  {diaEn.toLowerCase()}
                </p>
              </>
            )}
          </div>

          <div className="w-full">
            <CalendarioGoogleAds campaignType={campaign} />
          </div>
        </div>

        <div className="overflow-hidden bg-black mt-12">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div
              className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full"
              style={{ fontFamily: 'Gagalin-Regular' }}
            >
              {espa ? `${dia.toUpperCase()} DE ABOGADOS` : `LAWYERS ${diaEn.toUpperCase()}`}
            </div>
            <div
              className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold"
              style={{ fontFamily: 'Gagalin-Regular' }}
            >
              {espa ? 'MEZCAL DE BIENVENIDA' : 'WELCOME MEZCAL'}
            </div>
          </div>
        </div>

        <div className="bg-black py-[50px]">
          <QuickInfo5 idioma={espa} />
        </div>

        <div className="bg-white">
          <div className="overflow-hidden">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <div
                className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full"
                style={{ fontFamily: 'Gagalin-Regular' }}
              >
                {espa ? 'RECOMENDADOS' : 'RECOMMENDED'}
              </div>
              <div
                className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold"
                style={{ fontFamily: 'Gagalin-Regular' }}
              >
                {espa ? 'REVISTAS' : 'INTERNATIONAL MAGAZINES'}
              </div>
            </div>
          </div>
          <div className="py-[50px] px-2">
            <QuickInfo6 idioma={espa} />
          </div>
        </div>
      </div>
    </>
  );
}
