import { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { buildCalendlyUrl } from '../../lib/tracker';

/**
 * Calendly InlineWidget que inyecta lead_uid + UTMs en la URL (vía
 * buildCalendlyUrl) para que el webhook de pos_tracking_api pueda atribuir la
 * reserva al lead que la originó (campañas de Google Ads / Meta / TikTok).
 *
 * El tracker solo corre client-side (lee la cookie _gs_lead_id), por eso la
 * URL se recalcula tras montar: en SSR/primer render se usa la base, y al
 * montar se reemplaza por la versión con atribución.
 */
export default function TrackedCalendly({ url, styles }) {
  const [trackedUrl, setTrackedUrl] = useState(url);

  useEffect(() => {
    setTrackedUrl(buildCalendlyUrl(url));
  }, [url]);

  return (
    <InlineWidget
      url={trackedUrl}
      styles={styles || { height: '650px', minWidth: '320px' }}
    />
  );
}
