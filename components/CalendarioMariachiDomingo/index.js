import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useAppContext } from '../context/Context';

function CalendarioMariachiDomingo({ utmCampaign, titleEs, titleEn } = {}) {
  const { espa } = useAppContext();
  const utm = utmCampaign ? { utmCampaign } : undefined;
  const headingEs = titleEs || 'Reserva tu mesa para Domingo de Mariachi';
  const headingEn = titleEn || 'Book your table for Mariachi Sundays';
  return (
    <div id="reserva">
      {espa ? (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
              {headingEs}
            </h1>
            <p className="text-center text-gray-400 mt-2 mb-4">
              Selecciona fecha y horario
            </p>

            <InlineWidget
              url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1"
              utm={utm}
              styles={{ height: '650px', minWidth: '320px' }}
            />
          </div>
        </div>
      ) : (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-center text-white">
              {headingEn}
            </h1>
            <p className="text-center text-gray-400 mt-2 mb-4">
              Select date and time
            </p>

            <InlineWidget
              url="https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1"
              utm={utm}
              styles={{ height: '650px', minWidth: '320px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarioMariachiDomingo;
