import { trackEvent } from './tracker';

/**
 * Conversión "reserva completada" — una sola señal, al Tag Manager.
 *
 * POR QUÉ ESTE ARCHIVO YA NO DISPARA PÍXELES
 * ------------------------------------------
 * Antes llamaba directo a `fbq`, `ttq` y `gtag`, con el identificador de
 * conversión de Google Ads escrito a mano aquí dentro. Eso tenía tres
 * problemas:
 *
 *  1. El Tag Manager (GTM-M746PDQ) ya tiene configuradas las conversiones de
 *     Google Ads, Meta y TikTok. Disparar desde los dos lados cuenta doble.
 *
 *  2. El identificador de Google Ads vivía en el código, así que cambiarlo
 *     obligaba a desplegar el sitio. En el Tag Manager se cambia en un minuto.
 *
 *  3. Con el identificador aquí escrito, el sitio solo sirve para La Llorona.
 *
 * Ahora el sitio solo dice QUÉ pasó (`reserva_completada`) y el Tag Manager
 * decide A QUIÉN avisarle. Es la misma idea que el evento de Calendly, pero con
 * un nombre nuestro y no de un proveedor.
 *
 * IMPORTANTE PARA QUIEN CONFIGURE EL TAG MANAGER
 * ----------------------------------------------
 * El activador de las etiquetas de conversión tiene que ser el evento
 * personalizado `reserva_completada`. NO `event_scheduled` (ese era el nombre
 * interno de Calendly y ya nadie lo manda) ni una visita a /gracias (el widget
 * no redirige a ninguna página: la reserva se confirma sin salir de la misma).
 *
 * Variables disponibles en el dataLayer para las etiquetas:
 *   reserva_valor, reserva_moneda, reserva_canal, reserva_tipo,
 *   reserva_codigo (único por reserva: úsalo como `transaction_id` en Google
 *   Ads y como `event_id` en Meta, así una reserva nunca cuenta dos veces).
 *
 * @param {object} p
 * @param {string} [p.source]        - 'facebook' | 'tiktok' | 'google' | 'organic'
 * @param {string} [p.campaignType]  - 'general' | 'cumple' | 'cita' | …
 * @param {string} [p.transactionId] - código de la reserva
 * @param {string} [p.provider]      - 'growthsuite' | 'calendly'
 * @param {number} [p.value]         - valor estimado de la reserva
 */
export function trackReservaCompletada({
  source = 'organic',
  campaignType = 'general',
  transactionId,
  provider = 'growthsuite',
  value = 500,
} = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'reserva_completada',
    // Nombres planos a propósito: así se leen desde el Tag Manager sin tener
    // que armar variables anidadas.
    reserva_valor: value,
    reserva_moneda: 'MXN',
    reserva_canal: source,
    reserva_tipo: campaignType,
    reserva_codigo: transactionId || '',
    reserva_proveedor: provider,
    // Los de abajo se dejan por compatibilidad: hay etiquetas viejas del Tag
    // Manager que leen estos nombres.
    conversion_type: campaignType,
    source,
    value,
    currency: 'MXN',
    provider,
    confirmation_code: transactionId || '',
  });

  // Tracker propio → pos_tracking_api (ligado al lead_uid de la sesión).
  // Este NO pasa por el Tag Manager a propósito: va a nuestro dominio, así que
  // ningún bloqueador lo corta. Es la única medición que nunca se pierde.
  trackEvent('reserva_completada', {
    provider,
    source,
    campaign_type: campaignType,
    confirmation_code: transactionId || null,
    value,
  });
}
