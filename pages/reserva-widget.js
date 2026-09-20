import Head from 'next/head';
import BookingWidget from '../components/BookingWidget';

/* Página para los anuncios (TikTok, Google Ads, Meta): solo el widget, sin
 * navbar ni contenido alrededor. Se publica lalloronacantina.com/reserva-widget/
 * en lugar del dominio del widget.
 *
 * noindex: es una página de campaña, no compite en Google con /reserva. El
 * lead_uid y los UTMs los arma el propio widget, así que la atribución de cada
 * anuncio se conserva igual que en las demás páginas. */
export default function ReservaWidget() {
  return (
    <>
      <Head>
        <title>Reserva tu mesa | Cantina La Llorona</title>
        <meta
          name="description"
          content="Reserva tu mesa en Cantina La Llorona, Roma Condesa. Elige día y horario en segundos."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen w-full bg-[#020a06] py-6 px-3">
        <div className="w-full max-w-[600px] mx-auto">
          <BookingWidget campaignType="anuncios" maxHeight="none" />
        </div>
      </main>
    </>
  );
}
