import { getLeadUid, getCurrentAttribution } from './tracker';

/**
 * Widget de reservas de GrowthSuite (reemplaza a Calendly en la reserva
 * principal). La reserva cae directo al POS de La Llorona: Admin, Caja y
 * Comandero la ven, le apartan mesa y la sientan.
 *
 * Igual que buildCalendlyUrl: se pasan lead_uid + UTMs en la URL del iframe
 * para que la reserva quede atribuida al lead que la originó (el iframe vive
 * en otro dominio y no puede leer la cookie _gs_lead_id del sitio).
 */
export const BOOKING_WIDGET_URL = (
  process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL || 'https://pos-booking-widget.vercel.app'
).replace(/\/+$/, '');

export const BOOKING_SLUG = process.env.NEXT_PUBLIC_BOOKING_SLUG || 'llorona';

export function bookingWidgetOrigin() {
  try {
    return new URL(BOOKING_WIDGET_URL).origin;
  } catch {
    return null;
  }
}

/**
 *   buildBookingWidgetUrl({ type: 'reserva-de-mesa' })
 *   → 'https://pos-booking-widget.vercel.app/?slug=llorona&type=reserva-de-mesa&embed=1&lead_uid=ld_xyz&utm_source=tiktok&...'
 */
export function buildBookingWidgetUrl({ slug = BOOKING_SLUG, type } = {}) {
  const url = new URL(`${BOOKING_WIDGET_URL}/`);
  url.searchParams.set('slug', slug);
  if (type) url.searchParams.set('type', type);
  url.searchParams.set('embed', '1');

  if (typeof window === 'undefined') return url.toString();

  const leadUid = getLeadUid();
  const attr = getCurrentAttribution();
  if (leadUid) url.searchParams.set('lead_uid', leadUid);
  if (attr.source) url.searchParams.set('utm_source', attr.source);
  if (attr.medium) url.searchParams.set('utm_medium', attr.medium);
  if (attr.campaign) url.searchParams.set('utm_campaign', attr.campaign);
  if (attr.content) url.searchParams.set('utm_content', attr.content);
  if (attr.term) url.searchParams.set('utm_term', attr.term);

  return url.toString();
}
