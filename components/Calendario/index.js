import React from "react";
import { InlineWidget } from "react-calendly";
import { useAppContext } from "../context/Context";

function Calendario() {
  const { espa } = useAppContext();
  return (
    <div id="reserva">
      {espa ? (
        <div className="w-full bg-black">
          <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text2xl md:text-5xl font-bold text-center text-white">
              Mi casa es tu Casa, Reserva ya
            </h1>

            <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
          </div>
        </div>
      ) : (
        <div className="containerCalendario">
          <div className="subcontainerCalendario py-2">
            <h1 className="text-center text-black sm:text-4xl text-xl">
              Mi casa es tu Casa, Book now
            </h1>

            <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendario;
