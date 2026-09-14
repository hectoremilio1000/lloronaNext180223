import * as fbq from './fpixel';
import { trackEvent } from './tracker';

/**
 * Conversión "reserva completada" en todas las plataformas. Mismos eventos y
 * valores que dispara useCalendlyTracking con Calendly, para que las campañas
 * (Meta, TikTok, Google Ads) no pierdan la señal al cambiar de proveedor.
 *
 * @param {object} p
 * @param {string} [p.source]        - 'facebook' | 'tiktok' | 'google' | 'organic'
 * @param {string} [p.campaignType]  - 'general' | 'cumple' | 'cita' | …
 * @param {string} [p.transactionId] - código de la reserva (evita duplicados en Google Ads)
 * @param {string} [p.provider]      - 'growthsuite' | 'calendly'
 */
export function trackReservaCompletada({
  source = 'organic',
  campaignType = 'general',
  transactionId,
  provider = 'growthsuite',
} = {}) {
  if (typeof window === 'undefined') return;

  // Meta Pixel
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

  // TikTok Pixel
  if (window.ttq) {
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

  // Google Ads (mismo label de conversión que Calendly)
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11160821109/6PCACIi1ypEZEPW68skp',
      value: 500,
      currency: 'MXN',
      transaction_id: transactionId || Date.now().toString(),
    });
  }

  // GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'reserva_completada',
    conversion_type: campaignType,
    source,
    value: 500,
    currency: 'MXN',
    provider,
    confirmation_code: transactionId || '',
  });

  // Tracker propio → pos_tracking_api (ligado al lead_uid de la sesión)
  trackEvent('reserva_completada', {
    provider,
    source,
    campaign_type: campaignType,
    confirmation_code: transactionId || null,
  });
}
