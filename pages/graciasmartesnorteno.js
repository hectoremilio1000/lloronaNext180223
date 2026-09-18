import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBarEs/NavBarEs';
import { useAppContext } from '../components/context/Context';

function GraciasMartesNorteno() {
  const { espa, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    /* Una sola señal, al Tag Manager (ver lib/reservaConversion.js).
     *
     * Antes esta página llamaba directo a fbq, ttq y gtag, con el identificador
     * de conversión de Google Ads escrito a mano. Se quitó porque el Tag
     * Manager es ahora la única fuente de conexión a Google Ads, Meta y TikTok:
     * tener las dos vías haría que cada reserva contara DOS veces.
     *
     * OJO: esta página mide por VISITA. El widget de reservas nuevo no redirige
     * aquí —confirma la reserva sin salir de la página—, así que una campaña
     * que se pase al widget deja de pasar por aquí y hay que quitarle esta
     * página de gracias para no medir doble. */
    trackReservaCompletada({
      source: 'tiktok',
      campaignType: 'martes_norteno',
      provider: 'calendly',
    });
  }, []);

  return (
    <>
      <Head>
        <title>¡Reservación confirmada! | Martes de Norteño</title>
        {/* El respaldo sin JavaScript del píxel de Meta lo pone el Tag Manager
            en todas las páginas: aquí duplicaba la visita. */}
      </Head>

      <NavBar />

      <div className="w-full min-h-screen bg-[#020a06] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center py-20">
          <div className="text-6xl mb-6">🎸🎶</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¡Nos vemos el martes!
          </h1>
          <p className="text-xl text-[#3eeb91] font-semibold mb-6">
            Tu reservación para Martes de Norteño está confirmada
          </p>
          <p className="text-gray-400 mb-8">
            Te esperamos con música norteña en vivo y un shot de mezcal de
            cortesía. Llega puntual para disfrutar desde la primera canción 🍶
          </p>
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full bg-[#3eeb91] hover:bg-[#2dc974] text-black font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                Volver al inicio
              </button>
            </Link>
            <p className="text-gray-500 text-sm">
              ¿Necesitas modificar tu reservación? Revisa tu correo con la
              confirmación de Calendly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraciasMartesNorteno;
