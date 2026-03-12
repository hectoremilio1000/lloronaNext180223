import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as fbq from '../lib/fpixel';
import { FB_PIXEL_ID } from '../lib/fpixel';
import NavBar from '../components/NavBarEs/NavBarEs';
import { useAppContext } from '../components/context/Context';

function GraciasMartesNorteno() {
  const { espa, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  useEffect(() => {
    // Facebook Pixel - Lead conversion
    fbq.event('Lead', {
      content_name: 'Reservacion Martes Norteño',
      content_category: 'reserva_norteno',
      value: 500,
      currency: 'MXN',
      source: 'tiktok',
      campaign_type: 'norteno',
    });

    fbq.event('Schedule', {
      content_name: 'Reservacion Martes Norteño',
      value: 500,
      currency: 'MXN',
    });

    // TikTok Pixel
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track('SubmitForm', {
        content_name: 'Reservacion Martes Norteño',
        content_type: 'product',
        value: 500,
        currency: 'MXN',
        description: 'source:tiktok_norteno',
      });

      window.ttq.track('CompletePayment', {
        content_name: 'Reservacion Martes Norteño',
        content_type: 'product',
        value: 500,
        currency: 'MXN',
      });
    }

    // Google Ads conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11160821109/6PCACIi1ypEZEPW68skp',
        value: 500,
        currency: 'MXN',
        transaction_id: `norteno_${Date.now()}`,
      });
    }

    // GTM dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'reserva_completada',
        conversion_type: 'norteno',
        source: 'tiktok',
        value: 500,
        currency: 'MXN',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>¡Reservación confirmada! | Martes de Norteño</title>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>

      <NavBar />

      <div className="w-full min-h-screen bg-[#020a06] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center py-20">
          <div className="text-6xl mb-6">🎸🎶</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¡Nos vemos el martes!
          </h1>
          <p className="text-xl text-[#3eeb91] font-semibold mb-6">
            Tu reservación para Martes de Norteño está confirmada
          </p>
          <p className="text-gray-400 mb-8">
            Te esperamos con música norteña en vivo y un shot de mezcal de
            cortesía. Llega puntual para disfrutar desde la primera canción 🍶
          </p>
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full bg-[#3eeb91] hover:bg-[#2dc974] text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                Volver al inicio
              </button>
            </Link>
            <p className="text-gray-500 text-sm">
              ¿Necesitas modificar tu reservación? Revisa tu correo con la
              confirmación de Calendly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraciasMartesNorteno;
