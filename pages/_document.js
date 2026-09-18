import { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

/**
 * El Tag Manager es la ÚNICA fuente de conexión con Google Ads, Meta, TikTok y
 * Analytics. Todos los píxeles se instalan y disparan desde ahí.
 *
 * Por eso el sitio solo necesita UNA variable de entorno para medición:
 * NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID. Los IDs de cada píxel viven dentro del
 * contenedor, donde se cambian sin desplegar y sin tocar código — y donde
 * pueden ser distintos para cada restaurante.
 */

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Google Tag Manager - Script */}
        {GTM_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        )}
      </Head>
      <body>
        {/* Google Tag Manager - NoScript */}
        {GTM_ID && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        )}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
