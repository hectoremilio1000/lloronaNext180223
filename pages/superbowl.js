import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import { FB_PIXEL_ID } from '../lib/fpixel';
import QuickInfo6 from '../components/QuickInfo6';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import Slider from '../components/Sliders/Slider';

function SuperBowl() {
  const { espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaEspa]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

  const copy = espa
    ? {
        title: 'Super Bowl LX en La Llorona',
        date: 'Domingo 08 de febrero',
        description:
          'Vive el mejor ambiente de fútbol americano en Cantina La Llorona. Pantallas, cocteles, comida mexicana y toda la pasión del Super Bowl LX en Roma Condesa.',
        primaryCta: 'Reservar ahora',
        secondaryCta: 'Ver menú',
        address: 'Av. Álvaro Obregón 308, Condesa, Ciudad de México',
        calendarTitle: 'Reserva tu mesa',
        calendarSubtitle: 'Asegura tu lugar para el juego y evita filas.',
        testimonialRail: 'TESTIMONIOS',
        magazineLeft: 'REVISTAS',
        magazineRight: 'RECOMENDADOS',
      }
    : {
        title: 'Super Bowl LX at La Llorona',
        date: 'Sunday, February 08',
        description:
          'Experience the biggest American football game at Cantina La Llorona. Big screens, cocktails, Mexican food, and the full Super Bowl LX atmosphere in Roma Condesa.',
        primaryCta: 'Book now',
        secondaryCta: 'View menu',
        address: 'Av. Álvaro Obregón 308, Condesa, Mexico City',
        calendarTitle: 'Book your table',
        calendarSubtitle: 'Secure your spot for game night.',
        testimonialRail: 'TESTIMONIALS',
        magazineLeft: 'RECOMMENDED',
        magazineRight: 'INTERNATIONAL MAGAZINES',
      };

  return (
    <>
      <Head>
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
        {espa ? (
          <Head>
            <title>Super Bowl LX Cantina La Llorona</title>
            <meta
              name="description"
              content="Super Bowl LX en Cantina La Llorona. Vive el fútbol americano en Roma Condesa y reserva tu mesa."
            />
            <Script
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
            />
          </Head>
        ) : (
          <Head>
            <title>Super Bowl LX at Cantina La Llorona</title>
            <meta
              name="description"
              content="Watch Super Bowl LX at Cantina La Llorona in Roma Condesa. Book your table now."
            />
            <Script
              strategy="beforeInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109"
            />
          </Head>
        )}

        <NavBar onLanguageChange={handleLanguageChange} />
        <div className="w-full bg-black h-[300px]"></div>

        <div className="relative w-full bg-[#566151] -mt-[150px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-12 top-6 h-56 w-56 rounded-full bg-[#8a9878]/20 blur-3xl"></div>
            <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[#d8d4bf]/10 blur-3xl"></div>
          </div>

          <div className="relative w-full max-w-[1184px] mx-auto px-4 sm:px-8 pb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <article className="rounded-2xl border border-[#b8c0ab]/60 bg-[#4a5546]/80 p-5 sm:p-8 shadow-[0_24px_50px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                <p
                  className="text-[#ece6d6] text-sm sm:text-base mb-2"
                  style={{
                    fontFamily: 'Berthold Akzidenz Grotesk BE, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {copy.date}
                </p>

                <h1
                  className="text-[#f7f3e8] text-3xl sm:text-5xl mb-4"
                  style={{
                    fontFamily: 'Berthold Akzidenz Grotesk BE, sans-serif',
                    lineHeight: '1.05',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {copy.title}
                </h1>

                <Link href="/reserva" className="block">
                  <div className="rounded-xl border border-[#c8cfbb] bg-[#6f7a67]/35 p-3 transition hover:translate-y-[-2px]">
                    <img
                      className="rounded-lg w-full h-auto object-contain"
                      src="/super_bowl_llorona.jpeg"
                      alt="Super Bowl LX Cantina La Llorona"
                    />
                  </div>
                </Link>

                <p className="text-[#ecebe2] text-sm sm:text-base mt-4 leading-relaxed">
                  {copy.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/reserva"
                    className="px-5 py-3 rounded-md bg-[#f5efdc] text-[#222a1d] font-semibold"
                  >
                    {copy.primaryCta}
                  </Link>
                  <Link
                    href="/menullorona"
                    className="px-5 py-3 rounded-md border border-[#d6dbc8] text-[#f5f2e8] font-semibold"
                  >
                    {copy.secondaryCta}
                  </Link>
                </div>

                <p
                  className="text-[#d9ddce] text-xs sm:text-sm mt-4 mb-0"
                  style={{ letterSpacing: '0.04em' }}
                >
                  {copy.address}
                </p>
              </article>

              <aside className="superbowl-calendario rounded-2xl border border-[#9fa794]/60 bg-[#141815]/80 p-3 sm:p-5 shadow-[0_24px_50px_rgba(0,0,0,0.32)]">
                <div className="px-2 mb-3">
                  <h2
                    className="text-[#f7f3e8] text-2xl sm:text-3xl mb-1"
                    style={{
                      fontFamily: 'Berthold Akzidenz Grotesk BE, sans-serif',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {copy.calendarTitle}
                  </h2>
                  <p className="text-[#d8decb] text-sm sm:text-base mb-0">
                    {copy.calendarSubtitle}
                  </p>
                </div>
                <Calendario />
              </aside>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-black">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold w-full">
              {copy.testimonialRail}
            </h1>
            <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
              {copy.testimonialRail}
            </h1>
          </div>
        </div>

        <div className="bg-black py-[50px]">
          <QuickInfo5 idioma={espa} />
        </div>

        <div className="bg-white">
          <div className="overflow-hidden">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold w-full">
                {copy.magazineLeft}
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold">
                {copy.magazineRight}
              </h1>
            </div>
          </div>

          <div className="py-[50px] px-2">
            <QuickInfo6 idioma={espa} />
          </div>
        </div>

        {espa ? <Slider /> : null}

        <style jsx global>{`
          .superbowl-calendario #reserva > div {
            background: transparent !important;
          }

          .superbowl-calendario #reserva > div > div {
            max-width: none !important;
            padding: 0 !important;
            background: transparent !important;
          }

          .superbowl-calendario #reserva h1 {
            text-align: left !important;
            margin: 0 0 12px 0 !important;
            color: #f7f3e8 !important;
            font-family: 'Berthold Akzidenz Grotesk BE', sans-serif !important;
            letter-spacing: 0.08em !important;
            text-transform: uppercase !important;
            font-size: 1.75rem !important;
          }

          .superbowl-calendario .calendly-inline-widget {
            min-width: 100% !important;
            height: 720px !important;
            border-radius: 14px;
            overflow: hidden;
            background: #101311;
          }

          @media (max-width: 768px) {
            .superbowl-calendario #reserva h1 {
              text-align: center !important;
              font-size: 1.4rem !important;
            }

            .superbowl-calendario .calendly-inline-widget {
              height: 640px !important;
            }
          }
        `}</style>
      </>
    </>
  );
}

export default SuperBowl;
