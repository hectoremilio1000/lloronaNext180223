import React from 'react';
import { InlineWidget } from 'react-calendly';
import { useAppContext } from '../context/Context';
import BookingWidget from '../BookingWidget';

/* Reserva principal con el widget de GrowthSuite: la reserva cae directo al
 * POS (Admin, Caja y Comandero). Para regresar a Calendly sin tocar código:
 * NEXT_PUBLIC_RESERVAS_CALENDLY=1 y volver a desplegar. Las páginas de
 * campaña siguen con Calendly mientras se valida en paralelo. */
const USAR_CALENDLY = process.env.NEXT_PUBLIC_RESERVAS_CALENDLY === '1';
const CALENDLY_URL = 'https://calendly.com/reservaciones-14/reservaciones-llorona';

function Reserva() {
  return USAR_CALENDLY ? <InlineWidget url={CALENDLY_URL} /> : <BookingWidget />;
}

function Calendario() {
  const { espa } = useAppContext();
  return (
    <div id="reserva">
      {espa ? (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-white pb-2">
              Reserva ya
            </h1>

            <Reserva />
          </div>
        </div>
      ) : (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text2xl md:text-5xl font-bold text-center text-white">
              My house is your house, Book now.
            </h1>

            <Reserva />
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendario;
