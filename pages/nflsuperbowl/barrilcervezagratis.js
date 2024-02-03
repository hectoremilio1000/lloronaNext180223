import React, { useEffect } from "react";
import Link from "next/link";
// import title from "../components/Main/title.module.css";
import { useAppContext } from "../../components/context/Context";
import Head from "next/head";
import Script from "next/script";

function Promo1() {
  const { espa } = useAppContext();
  const image1 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/nin%CC%83as+tequila+mezcal+pulque.jpg";
  const image2 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/llorona+mixologia+cdmx+.PNG";
  const image3 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/mixologia+sin+alcohol+modelo+cdmx+roma+condesa+llorona.jpg";
  const image4 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/amigas+disfrutando+mixologia+cdmx+bares.PNG";

  const image5 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/mixologia+exotica+mexico+ciudad.PNG";
  const image6 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/tragos+calavera+aperol+fresa.jpg";
  const image7 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mazapan+matini+nin%CC%83as.jpg";
  const image8 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia/lugar+sorprendente+coctel+mixology.jpg";

  return (
    <>
      {espa ? (
        <Head>
          <title>Super Bowl Cantina La Llorona</title>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
        </Head>
      ) : (
        <Head>
          <Script
            strategy="beforeInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-11160821109" // reemplaza con tu código de seguimiento de Google
          />
        </Head>
      )}
      <div className="w-full h-[100vh] bg-gray-900 py-[150px] ">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form px-4 py-4">
            {espa ? (
              <>
                <h1 className="text-5xl text-white">
                  Reserva Ahora Y Gana un <br /> Barril de cerveza Gratis
                </h1>
                <p className="text-white">
                  ¡Prepárate para la gran noche del fútbol americano en
                  <strong>Cantina La Llorona</strong>! Ubicados en el corazón de
                  la ciudad, te ofrecemos el ambiente más animado y casual para
                  disfrutar del Super Bowl como nunca antes. Nuestra cantina es
                  el lugar perfecto para sumergirte en la emoción del juego,
                  rodeado de buena compañía y un ambiente inigualable.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-5xl text-white">
                  Book Now And Win <br /> A Free Barrel Of Beer
                </h1>
                <p className="text-white">
                  Get ready for the big American football night at{" "}
                  <strong>Cantina La Llorona</strong>! Located in the heart of
                  the city, we offer the liveliest and most casual atmosphere
                  for enjoying the Super Bowl like never before. Our cantina is
                  the perfect place to immerse yourself in the excitement of the
                  game, surrounded by good company and an unparalleled
                  atmosphere.
                </p>
              </>
            )}
          </div>
          <div className="w-full">
            <img src="../../images/adsreservas/promocion 1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Promo1;
