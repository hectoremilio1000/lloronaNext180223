import '../styles/main.css';
import '../styles/global.css';
import '../components/Navbar/navBar.css';
import '../components/NavbarWhite/navBarWhite.css';
import LayoutFinal from '../components/layout';

import AppContextProvider from '../components/context/Context';
import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtm from '../lib/gtm';
import { initTracker, trackPageview } from '../lib/tracker';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initTracker({ site: 'llorona' });

    /* Una sola señal por cambio de página: el `pageview` del dataLayer.
     *
     * Antes se llamaba directo a fbq, gtag y ttq desde aquí, y ADEMÁS el Tag
     * Manager los tenía en "All Pages": cada visita se contaba dos veces (tres
     * en TikTok, que tenía dos etiquetas). Eso inflaba las visitas y los
     * públicos de retargeting.
     *
     * Ahora el sitio solo avisa "cambié de página" y el Tag Manager decide qué
     * dispara. Un solo lugar donde configurar, y se cambia sin desplegar. */
    const handleRouteChange = (url) => {
      gtm.pageview(url);
      trackPageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/*
        Los píxeles NO se instalan aquí: los instala el Tag Manager
        (GTM-M746PDQ, ver _document.js), que es la única fuente de conexión a
        Google Ads, Meta y TikTok. Tenerlos en los dos lados duplicaba cada
        visita.

        Si hay que cambiar un píxel o agregar una plataforma, se hace en el Tag
        Manager — no aquí, y sin volver a desplegar el sitio.
      */}

      <AppContextProvider>
        <LayoutFinal>
          <Component {...pageProps} />
        </LayoutFinal>
      </AppContextProvider>
    </>
  );
}
