import React from 'react';
import { useAppContext } from '../context/Context';
import ReservaEmbed from '../ReservaEmbed';

const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona?hide_gdpr_banner=1';
const CALENDLY_STYLES = { height: '650px', minWidth: '320px' };

function CalendarioNorteno({ campaignType = 'norteno' }) {
  const { espa } = useAppContext();
  return (
    <div id="reserva">
      {espa ? (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
              Reserva tu mesa para Martes de Norteño
            </h1>
            <p className="text-center text-gray-400 mt-2 mb-4">
              Selecciona fecha y horario
            </p>

            <ReservaEmbed
              calendlyUrl={CALENDLY_URL}
              calendlyStyles={CALENDLY_STYLES}
              campaignType={campaignType}
            />
          </div>
        </div>
      ) : (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-2xl md:text-5xl font-bold text-center text-white">
              Book your table for Norteño Tuesdays
            </h1>
            <p className="text-center text-gray-400 mt-2 mb-4">
              Select date and time
            </p>

            <ReservaEmbed
              calendlyUrl={CALENDLY_URL}
              calendlyStyles={CALENDLY_STYLES}
              campaignType={campaignType}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarioNorteno;
