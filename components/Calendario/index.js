import React from 'react';
import { useAppContext } from '../context/Context';
import ReservaEmbed from '../ReservaEmbed';

const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona';

function Calendario({ campaignType = 'general', calendlyUrl = CALENDLY_URL }) {
  const { espa } = useAppContext();
  return (
    <div id="reserva">
      {espa ? (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white pb-2">
              Reserva ya
            </h1>

            <ReservaEmbed calendlyUrl={calendlyUrl} campaignType={campaignType} />
          </div>
        </div>
      ) : (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text2xl md:text-5xl font-bold text-center text-white">
              My house is your house, Book now.
            </h1>

            <ReservaEmbed calendlyUrl={calendlyUrl} campaignType={campaignType} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendario;
