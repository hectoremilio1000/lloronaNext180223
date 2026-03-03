import { useCalendlyEventListener } from 'react-calendly';
import * as fbq from './fpixel';

/**
 * Hook que detecta cuando alguien COMPLETA una reserva en Calendly
 * y dispara eventos de conversión en TODAS las plataformas.
 *
 * @param {string} source - De dónde viene: 'facebook', 'tiktok', 'google', 'organic'
 * @param {string} campaignType - Tipo: 'cumple', 'cita', 'general', 'empresas', 'foodie'
 */
export default function useCalendlyTracking(source = 'organic', campaignType = 'general') {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      const eventData = e.data?.payload || {};

      // ========== FACEBOOK PIXEL ==========
      // Lead event - para campañas de leads
      fbq.event('Lead', {
        content_name: `Reservacion ${campaignType}`,
        content_category: `reserva_${source}`,
        value: 500,
        currency: 'MXN',
        source: source,
        campaign_type: campaignType,
      });

      // Schedule event - evento estándar de FB para reservaciones
      fbq.event('Schedule', {
        content_name: `Reservacion ${campaignType}`,
        value: 500,
        currency: 'MXN',
      });

      // ========== TIKTOK PIXEL ==========
      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track('SubmitForm', {
          content_name: `Reservacion ${campaignType}`,
          content_type: 'product',
          value: 500,
          currency: 'MXN',
          description: `source:${source}`,
        });

        window.ttq.track('CompletePayment', {
          content_name: `Reservacion ${campaignType}`,
          content_type: 'product',
          value: 500,
          currency: 'MXN',
        });
      }

      // ========== GOOGLE ADS ==========
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-11160821109/6PCACIi1ypEZEPW68skp',
          value: 500,
          currency: 'MXN',
          transaction_id: eventData.event?.uri || Date.now().toString(),
        });
      }

      // ========== GTM DATALAYER ==========
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'reserva_completada',
          conversion_type: campaignType,
          source: source,
          value: 500,
          currency: 'MXN',
          calendly_event: eventData.event?.uri || '',
          invitee: eventData.invitee?.uri || '',
        });
      }

      console.log(`[Tracking] Reserva completada - source: ${source}, type: ${campaignType}`);
    },

    onDateAndTimeSelected: () => {
      // Trackear que seleccionó fecha (intent signal)
      fbq.event('AddToCart', {
        content_name: `Selecciono fecha ${campaignType}`,
        content_category: `intent_${source}`,
        value: 0,
        currency: 'MXN',
      });

      if (typeof window !== 'undefined' && window.ttq) {
        window.ttq.track('AddToCart', {
          content_name: `Selecciono fecha ${campaignType}`,
          content_type: 'product',
        });
      }

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'fecha_seleccionada',
          source: source,
          campaign_type: campaignType,
        });
      }
    },

    onProfilePageViewed: () => {
      // Trackear que vio el calendario (engagement)
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'calendario_visto',
          source: source,
          campaign_type: campaignType,
        });
      }
    },
  });
}
