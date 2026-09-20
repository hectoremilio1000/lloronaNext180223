import React, { useMemo } from 'react';
import { useAppContext } from '../context/Context';
import ReservaEmbed from '../ReservaEmbed';

const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1';

function CalendarioMariachi() {
  const { espa } = useAppContext();

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
        <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-0 md:px-[20px] mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
            {content.title}
          </h1>
          <p className="text-center text-gray-400 mt-2 mb-4">
            {content.subtitle}
          </p>

          <ReservaEmbed
            calendlyUrl={CALENDLY_URL}
            calendlyStyles={{ height: '650px', minWidth: '320px' }}
            campaignType="mariachi"
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarioMariachi;
