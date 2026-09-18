import { useCalendlyEventListener } from 'react-calendly';
import { trackReservaCompletada } from './reservaConversion';
import { trackEvent } from './tracker';

/**
 * Detecta cuando alguien completa una reserva en Calendly y avisa al Tag
 * Manager, igual que hace el widget nuevo.
 *
 * POR QUÉ YA NO DISPARA PÍXELES DIRECTO
 * -------------------------------------
 * Antes llamaba a `fbq`, `ttq` y `gtag` aquí mismo, con el identificador de
 * conversión de Google Ads escrito a mano. Eso funcionaba mientras el Tag
 * Manager estaba desconectado (su activador esperaba `event_scheduled`, que
 * nadie manda). En el momento en que el Tag Manager empiece a escuchar
 * `reserva_completada` —que es lo que hay que configurar—, tener las dos vías
 * haría que CADA reserva contara DOS veces.
 *
 * Así que Calendly y el widget nuevo mandan ahora exactamente la misma señal:
 * `reserva_completada` al dataLayer. El Tag Manager decide qué dispara, y las
 * dos formas de reservar se miden igual. Eso además permite comparar Calendly
 * contra el widget sin que la medición cambie de un lado al otro.
 *
 * @param {string} source - 'facebook' | 'tiktok' | 'google' | 'organic'
 * @param {string} campaignType - 'cumple' | 'cita' | 'general' | 'empresas' | 'foodie'
 */
export default function useCalendlyTracking(source = 'organic', campaignType = 'general') {
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      const eventData = e.data?.payload || {};
      /* El uri del evento de Calendly hace de código de reserva: es único, así
       * que sirve para que Google Ads y Meta no cuenten la misma reserva dos
       * veces si la señal llega repetida. */
      const codigo = eventData.event?.uri || '';

      trackReservaCompletada({
        source,
        campaignType,
        transactionId: codigo,
        provider: 'calendly',
      });
    },

    /* Señales de intención, no conversiones. Sirven para ver dónde se cae la
     * gente antes de reservar. */
    onDateAndTimeSelected: () => {
      if (typeof window === 'undefined') return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'fecha_seleccionada',
        source,
        campaign_type: campaignType,
      });
      trackEvent('fecha_seleccionada', { source, campaign_type: campaignType });
    },

    onProfilePageViewed: () => {
      if (typeof window === 'undefined') return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'calendario_visto',
        source,
        campaign_type: campaignType,
      });
    },
  });
}
