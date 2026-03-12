import Link from 'next/link';
import React, { useEffect } from 'react';
import * as fbq from '../lib/fpixel';

const GraciasTiktok = () => {
  useEffect(() => {
    // TikTok Pixel - Lead conversion from TikTok campaign
    if (typeof window !== 'undefined' && window.ttq) {
      window.ttq.track('SubmitForm', {
        content_name: 'Reservacion TikTok',
        content_type: 'product',
        value: 500,
        currency: 'MXN',
      });
      window.ttq.track('CompletePayment', {
        content_name: 'Reservacion TikTok',
        content_type: 'product',
        value: 500,
        currency: 'MXN',
      });
    }

    // Facebook Pixel - Cross-platform tracking
    fbq.event('Lead', {
      content_name: 'Reservacion TikTok',
      content_category: 'reserva_tiktok',
      value: 500,
      currency: 'MXN',
    });

    // Google Ads - Conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11160821109/6PCACIi1ypEZEPW68skp',
        value: 500,
        currency: 'MXN',
      });
    }

    // GTM DataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'reserva_completada',
        conversion_type: 'reserva_tiktok',
        source: 'tiktok',
        value: 500,
        currency: 'MXN',
      });
    }
  }, []);

  return (
    <div className="h-[100vh] w-full bg-black py-[120px] flex flex-col justify-center items-center fixed z-[6000] left-0 right-0">
      <div className="w-full max-w-[1184px] mx-auto flex flex-col items-center">
        <h1 className="text-4xl text-white text-center">
          Gracias por tu reserva
        </h1>
        <p className="text-xl text-white text-center mx-auto max-w-[700px]">
          Gracias por elegir Cantina La Llorona para tu próxima experiencia
          culinaria! Nos llena de alegría saber que has decidido reservar una
          mesa con nosotros. Estamos emocionados de poder brindarte una velada
          inolvidable llena de deliciosos sabores y momentos especiales. <br />{' '}
          Tu reserva ha sido confirmada con éxito. Prepárate para disfrutar de
          auténticos platillos mexicanos en un ambiente cálido y acogedor.{' '}
          <br />
          Si necesitas realizar alguna modificación a tu reserva o tienes alguna
          pregunta, nuestro equipo está aquí para ayudarte. No dudes en ponerte
          en contacto con nosotros.
        </p>
        <Link className="px-4 py-3 bg-white font-bold rounded" href={'/'}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default GraciasTiktok;
