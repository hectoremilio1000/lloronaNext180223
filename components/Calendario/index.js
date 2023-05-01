import React from 'react'
import { InlineWidget } from 'react-calendly';
import { useAppContext } from '../context/Context';

function Calendario() {

  const { espa } = useAppContext();
  return (
    <div id="reserva">
      {espa ? <div className="containerCalendario">
        <div className="subcontainerCalendario py-2">
          <h1 className="text-center text-black sm:text-4xl text-xl">
            Reserva en la Cantina más trendy de la RomaCondesa
          </h1>

          <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
        </div>
      </div> : <div className="containerCalendario">
        <div className="subcontainerCalendario py-2">
          <h1 className="text-center text-black sm:text-4xl text-xl">
              Reserve in the most trendy Canteen of the RomaCondesa
          </h1>

          <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
        </div>
      </div>}

     
    </div>
  );
}

export default Calendario