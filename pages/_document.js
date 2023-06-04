import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from '../lib/fpixel';
import { GTM_ID, pageview } from '../lib/gtm'

export default function Document() {
  return (
    <Html>
      <Head >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
