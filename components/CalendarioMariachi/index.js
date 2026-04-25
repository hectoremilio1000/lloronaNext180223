import React, { useMemo, useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { useAppContext } from '../context/Context';
import { buildCalendlyUrl } from '../../lib/tracker';

const BASE_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1';

function CalendarioMariachi() {
  const { espa } = useAppContext();

  /* The tracker only works client-side; compute the URL after mount so the
   * lead_uid cookie is already set. */
  const [calendlyUrl, setCalendlyUrl] = useState(BASE_URL);
  useEffect(() => {
    setCalendlyUrl(buildCalendlyUrl(BASE_URL));
  }, []);

  const content = useMemo(() => (espa
    ? {
        title: 'Reserva tu mesa para Jueves de Mariachi',
        subtitle: 'Selecciona fecha y horario',
      }
    : {
        title: 'Book your table for Mariachi Thursdays',
        subtitle: 'Select date and time',
      }), [espa]);

  return (
    <div id="reserva">
      <div className="w-full bg-black">
        <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
            {content.title}
          </h1>
          <p className="text-center text-gray-400 mt-2 mb-4">
            {content.subtitle}
          </p>

          <InlineWidget
            url={calendlyUrl}
            styles={{ height: '650px', minWidth: '320px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarioMariachi;
