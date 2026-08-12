// lib/waClick.js
import * as fbq from './fpixel';
import { trackEvent } from './tracker';

/**
 * Dispara un evento unificado de "click a WhatsApp" hacia todas las
 * plataformas de ads (Meta, Google/GA4, TikTok) + nuestro tracker propio
 * (pos_tracking_api). Pensado para llamarse desde el onClick de cualquier
 * botón/link de WhatsApp — no hace preventDefault ni bloquea la
 * navegación, el link sigue abriendo wa.me con normalidad.
 *
 * @param {string} source      - De dónde sale el click, ej. 'hero-cotizar', 'card-bodas'
 * @param {string} [eventType] - Tipo de evento si aplica, ej. 'Bodas', 'Cumpleaños'
 */
export function trackWhatsAppClick({ source, eventType = null } = {}) {
  if (typeof window === 'undefined') return;

  // Meta Pixel — evento estándar "Contact"
  fbq.event('Contact', {
    content_name: source,
    content_category: eventType || 'whatsapp',
  });

  // TikTok Pixel — evento estándar "Contact"
  if (window.ttq) {
    window.ttq.track('Contact', {
      content_name: source,
      content_type: eventType || 'product',
      description: `source:${source}`,
    });
  }

  // Google Ads / GA4 — evento personalizado (márcalo como "key event" en
  // GA4 si quieres reportarlo como conversión, sin mezclarlo con el label
  // de conversión de "reserva confirmada" que usan las páginas /gracias*)
  if (window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
      event_type: eventType || undefined,
    });
  }

  // GTM dataLayer, por si en algún momento se agrega Tag Manager
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    source,
    event_type: eventType,
  });

  // Tracker propio → pos_tracking_api, queda ligado al lead_uid/sesión
  trackEvent('whatsapp_click', { source, event_type: eventType });
}
