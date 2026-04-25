import { useCalendlyEventListener } from 'react-calendly';
import * as fbq from './fpixel';
import { getCurrentAttribution, getLeadUid, trackEvent } from './tracker';

/**
 * Dispara eventos de conversión en TODAS las plataformas cuando alguien
 * COMPLETA una reserva en Calendly. El source real ahora se detecta del
 * tracker (fbclid → meta, ttclid → tiktok, etc.) y el argumento `fallbackSource`
 * solo se usa si el tracker no tiene nada (p.ej. tráfico orgánico sin UTM).
 *
 * @param {string} fallbackSource - Canal por defecto si el tracker no detectó nada
 * @param {string} campaignType   - Tipo de campaña (cumple, mariachi, empresas, etc.)
 */
export default function useCalendlyTracking(fallbackSource = 'organic', campaignType = 'general') {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      const eventData = e.data?.payload || {};

      const attr = getCurrentAttribution();
      const source = attr?.channel || fallbackSource;
      const leadUid = getLeadUid();
      const campaign = attr?.campaign || campaignType;

      // ========== FACEBOOK PIXEL ==========
      fbq.event('Lead', {
        content_name: `Reservacion ${campaignType}`,
        content_category: `reserva_${source}`,
        value: 500,
        currency: 'MXN',
        source,
        campaign_type: campaignType,
      });

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
          source,
          campaign,
          lead_uid: leadUid,
          value: 500,
          currency: 'MXN',
          calendly_event: eventData.event?.uri || '',
          invitee: eventData.invitee?.uri || '',
        });
      }

      // ========== TRACKING API (solo marca intent — la conversión la crea el webhook) ==========
      trackEvent('calendly_scheduled_client', {
        campaign_type: campaignType,
        fallback_source: fallbackSource,
        calendly_event_uri: eventData.event?.uri || null,
        invitee_uri: eventData.invitee?.uri || null,
      });

      console.log(`[Tracking] Reserva completada - source: ${source}, type: ${campaignType}, lead: ${leadUid}`);
    },

    onDateAndTimeSelected: () => {
      const attr = getCurrentAttribution();
      const source = attr?.channel || fallbackSource;

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
          source,
          campaign_type: campaignType,
        });
      }

      trackEvent('calendly_date_selected', { campaign_type: campaignType, fallback_source: fallbackSource });
    },

    onProfilePageViewed: () => {
      const source = getCurrentAttribution()?.channel || fallbackSource;

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'calendario_visto',
          source,
          campaign_type: campaignType,
        });
      }

      trackEvent('calendly_profile_viewed', { campaign_type: campaignType, fallback_source: fallbackSource });
    },
  });
}
