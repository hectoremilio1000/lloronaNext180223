import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

import { useAppContext } from '../context/Context';
import * as fbq from '../../lib/fpixel';
import { FB_PIXEL_ID } from '../../lib/fpixel';
import { trackEvent } from '../../lib/tracker';
import useCalendlyTracking from '../../lib/useCalendlyTracking';

import ReservaEmbed from '../ReservaEmbed';
import QuickInfo5 from '../QuickInfo5';
import QuickInfo6 from '../QuickInfo6';
import NavBar from '../NavBarEs/NavBarEs';

/* Estructura común de las landings de eventos (/eventos-empresariales,
 * /despedida-de-soltera, /aniversarios, /after-office, /bodas-civiles).
 * Cada página solo define su contenido en `config`; el diseño vive aquí. */

const WHATSAPP = '525549242477';
const CALENDLY_URL =
  'https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1';
const SITIO = 'https://lalloronacantina.com';

// Enlaces internos entre las landings de eventos
const EVENTOS = [
  { slug: 'eventos-empresariales', es: 'Eventos empresariales', en: 'Corporate events' },
  { slug: 'despedida-de-soltera', es: 'Despedida de soltera', en: 'Bachelorette party' },
  { slug: 'aniversarios', es: 'Aniversarios', en: 'Anniversaries' },
  { slug: 'after-office', es: 'After office', en: 'After office' },
  { slug: 'bodas-civiles', es: 'Bodas civiles', en: 'Civil weddings' },
];

const TEXTOS_COMUNES = {
  es: {
    boton: 'Cotizar por WhatsApp',
    reservaSubtitulo: 'Selecciona fecha y horario',
    relacionados: 'También te puede interesar:',
    todos: 'Todos nuestros eventos',
    menu: 'Ver el menú',
    marquee3: 'RECOMENDADOS',
    marquee4: 'REVISTAS',
  },
  en: {
    boton: 'Get a quote on WhatsApp',
    reservaSubtitulo: 'Select date and time',
    relacionados: 'You may also like:',
    todos: 'All our events',
    menu: 'See the menu',
    marquee3: 'RECOMMENDED',
    marquee4: 'INTERNATIONAL MAGAZINES',
  },
};

const marqueeFont = { fontFamily: 'Gagalin-Regular' };

function BotonWhatsApp({ mensaje, texto, campaign }) {
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  const handleClick = () => {
    fbq.event('Contact', {
      content_name: `Cotizacion ${campaign}`,
      content_category: `landing_${campaign}`,
    });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'cotizacion_whatsapp', campaign });
    }
    trackEvent('cotizacion_whatsapp', { campaign_type: campaign });
  };

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      className="block w-full rounded-full bg-[#3eeb91] px-6 py-3 text-center font-bold text-black transition hover:bg-[#3eeb91]/90"
    >
      {texto}
    </a>
  );
}

/**
 * @param {object} props.config
 * @param {string} props.config.slug      - ruta sin diagonales, ej. 'aniversarios'
 * @param {string} props.config.campaign  - etiqueta de tracking/campaignType, ej. 'aniversario'
 * @param {object} props.config.seo       - { title, description, ogTitle, ogDescription, ogImage }
 * @param {string[]} props.config.imagenes - dos rutas .webp de public/img
 * @param {object} props.config.es / en   - textos por idioma
 */
export default function LandingEvento({ config }) {
  const { slug, campaign, seo, imagenes } = config;
  const urlPagina = `${SITIO}/${slug}/`;

  /* Si el sitio vuelve a Calendly (NEXT_PUBLIC_RESERVAS_CALENDLY=1), las UTMs siguen llegando. */
  useCalendlyTracking('organic', campaign);

  useEffect(() => {
    fbq.event('ViewContent', {
      content_name: seo.ogTitle,
      content_category: `landing_${campaign}`,
    });

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: `page_view_${campaign}`,
        page_type: 'landing',
        campaign,
      });
    }
  }, [campaign, seo.ogTitle]);

  const { espa, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  const handleLanguageChange = () => {
    setHasInitialized(true);
  };

  const idioma = espa ? 'es' : 'en';
  const t = config[idioma];
  const comun = TEXTOS_COMUNES[idioma];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Cantina La Llorona',
    servesCuisine: 'Mexicana',
    url: urlPagina,
    image: `${SITIO}${seo.ogImage}`,
    telephone: '+525549242477',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX',
    },
    acceptsReservations: 'True',
    description: seo.description,
  };

  const relacionados = [
    ...EVENTOS.filter((e) => e.slug !== slug).map((e) => ({
      href: `/${e.slug}/`,
      texto: e[idioma],
    })),
    { href: '/paquetes/', texto: comun.todos },
    { href: '/menullorona/', texto: comun.menu },
  ];

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={urlPagina} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlPagina} />
        <meta property="og:image" content={`${SITIO}${seo.ogImage}`} />
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
      </Head>

      <>
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
          />
        </Head>

        <NavBar onLanguageChange={handleLanguageChange} />

        {/* Hero Section */}
        <div className="w-full bg-black h-[400px]"></div>

        <div className="w-full bg-[#020a06] -mt-[250px]">
          <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
            {/* Columna izquierda: Info */}
            <div className="w-full">
              <h1 className="font-bold text-4xl md:text-5xl text-white leading-tight">
                {t.h1}
              </h1>
              <p className="text-[#3eeb91] text-xl font-semibold mt-2">
                {t.subtitulo}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {imagenes.map((src, i) => (
                  <div key={src}>
                    <img
                      className="rounded-lg w-full h-[350px] object-cover"
                      src={src}
                      alt={t.fotos[i].alt}
                    />
                    <p className="text-white font-bold pt-2">
                      {t.fotos[i].texto}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-start sm:text-xs md:text-md pt-4 space-y-3">
                <p className="text-white">{t.intro}</p>
                <div className="bg-[#141414] rounded-lg p-4 border border-[#3eeb91]/30">
                  <p className="text-[#3eeb91] font-bold text-lg">
                    {t.beneficiosTitulo}
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    {t.beneficios.map((beneficio) => (
                      <li key={beneficio}>✔️ {beneficio}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">{t.ubicacion}</p>
                <div>
                  <p className="text-gray-400 text-sm">{comun.relacionados}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {relacionados.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-full border border-[#3eeb91]/60 px-4 py-1.5 text-sm text-white transition hover:bg-[#3eeb91]/10"
                      >
                        {link.texto}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <BotonWhatsApp
                    mensaje={t.mensaje}
                    texto={comun.boton}
                    campaign={campaign}
                  />
                </div>
              </div>
            </div>

            {/* Columna derecha: Reserva */}
            <div className="w-full">
              <div id="reserva">
                <div className="w-full bg-black">
                  <div className="w-full rounded bg-[#141414] py-[40px] px-[20px] mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
                      {t.reservaTitulo}
                    </h2>
                    <p className="text-center text-gray-400 mt-2 mb-4">
                      {comun.reservaSubtitulo}
                    </p>
                    <ReservaEmbed
                      calendlyUrl={CALENDLY_URL}
                      calendlyStyles={{ height: '650px', minWidth: '320px' }}
                      campaignType={campaign}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden bg-black mt-12">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <div
                className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full"
                style={marqueeFont}
              >
                {t.marquee1}
              </div>
              <div
                className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold"
                style={marqueeFont}
              >
                {t.marquee2}
              </div>
            </div>
          </div>

          {/* Testimonios */}
          <div className="bg-black py-[50px]">
            <QuickInfo5 idioma={espa} />
          </div>

          {/* Revistas / Recomendados */}
          <div className="bg-white">
            <div className="overflow-hidden">
              <div className="flex items-center gap-4 whitespace-nowrap">
                <div
                  className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full"
                  style={marqueeFont}
                >
                  {comun.marquee3}
                </div>
                <div
                  className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold"
                  style={marqueeFont}
                >
                  {comun.marquee4}
                </div>
              </div>
            </div>
            <div className="py-[50px] px-2">
              <QuickInfo6 idioma={espa} />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
