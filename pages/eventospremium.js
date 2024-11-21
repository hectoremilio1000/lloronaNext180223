import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Calendario from '../components/Calendario/index';
import title from '../components/Main/title.module.css';
import { useAppContext } from '../components/context/Context';
import Head from 'next/head';
import Script from 'next/script';
import * as fbq from '../lib/fpixel';
import YouTube from 'react-youtube';
import { FB_PIXEL_ID } from '../lib/fpixel';
import QuickInfo6 from '../components/QuickInfo6';

import { InlineWidget } from 'react-calendly';
import ModalAll from '../components/ModalAll';
import NavBar from '../components/NavBarEs/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import '../styles/Slider.module.css'; // Importa el archivo CSS aquí
import { FaWhatsapp } from 'react-icons/fa';

import dynamic from 'next/dynamic';
import MySwiper from '../components/Swiper4';
import CalendarioGoogleAds from '../components/CalendarioGoogleAds';
import Encontramos from '../components/Encontramos';

function Reserva() {
  const packages = [
    {
      number: 4,
      details: [
        'ENSALADA CAPRESE CON VINAGRETA DE ALBAHACA',
        'SALMÓN A LA PLANCHA CON SALSA DE MANTEQUILLA Y LIMÓN',
        'RISOTTO DE HONGOS PORCINI',
        'TARTA DE QUESO CON SALSA DE FRUTOS ROJOS',
        'GRUPO EN VIVO',
      ],
      price: 'Costo: $800 por persona',
    },
    {
      number: 5,
      details: [
        'CARPACCIO DE RES CON RÚCULA Y PARMESANO',
        'LANGOSTINOS AL AJILLO',
        'FILETE MIGNON EN SALSA DE VINO TINTO',
        'SOUFFLÉ DE CHOCOLATE CON HELADO DE VAINILLA',
        'GRUPO EN VIVO',
      ],
      price: 'Costo: $1,100 por persona',
    },
    {
      number: 6,
      details: [
        'FOIE GRAS CON COMPOTA DE HIGOS',
        'LANGOSTA TERMIDOR',
        'SORBETE DE LIMÓN PARA LIMPIAR EL PALADAR',
        'CORDERO AL HORNO CON HIERBAS PROVENZALES',
        'CRÈME BRÛLÉE DE VAINILLA',
        'GRUPO EN VIVO',
      ],
      price: 'Costo: $1,500 por persona',
    },
  ];
  
  // useEffect(() => {
  //   fbq.event('reserva')
  // }, []);

  const opts = {
    height: '350',
    width: '300',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,
    },
  };

  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const { espa } = useAppContext();
  const image1 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image2 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg';
  const image3 =
    'https://imagenesrutalab.s3.us-east-1.amazonaws.com/llorona/nextImage/eventos/comida%2Bpavo%2Bdelicioso%2Bcantina.jpg';
  const image4 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/amigastomandoCantinaLlorona.JPG';

  const image5 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg';
  const image6 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg';
  const image7 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg';
  const image8 =
    'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg';
  const [open, setOpen] = useState(false);

  return (
    <>
      <>
        <Head>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <>
          {espa ? (
            <Head>
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
          <NavBar />
          <div>
            <MySwiper />
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <a
                  href="https://wa.me/525549242477?text=Hola,%20me%20gustaría%20cotizar%20con%20ustedes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 mt-4 mx-4 md:mx-36 rounded-full shadow-lg transition duration-200 ease-in-out"
                >
                  <FaWhatsapp className="mr-2" />
                  Cotiza Paquetes Premium
                </a>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-3">
                    Eventos Exclusivos con Estilo y Sabor Premium
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-center"
                            src={image4}
                            alt="Música en vivo"
                          />
                          <p className="text-white text-center font-bold text-xl">
                          Ambiente Navideño <br />
                          de Alta Clase
                          </p>
                        </div>
                      </Link>
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover object-right-bottom "
                            src={image3}
                            alt="Música en vivo"
                          />
                          <p className="text-white pt-2 font-bold text-xl">
                          Menú Premium que <br />
                          Deleita los Sentidos
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                    Disfruta de experiencias inolvidables en <b>Cantina La Llorona</b>, 
        con paquetes diseñados para quienes buscan exclusividad, estilo y 
        un menú gourmet. Ofrecemos grupos en vivo, imitadores y detalles 
        únicos que harán de tu evento algo inolvidable.
                    </p>

                    <a
                      href="https://wa.me/525549242477?text=Hola,%20me%20gustaría%20cotizar%20con%20ustedes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-2 md:mx-36 rounded-full shadow-lg transition duration-200 ease-in-out"
                    >
                      <FaWhatsapp className="mr-2" />
                      Cotiza Paquetes Premium
                    </a>
                  </div>

                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                    Paquetes Premium
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                      {packages.map((pkg, index) => (
                        <div
                          key={index}
                          className="border rounded-lg shadow-lg p-6"
                        >
                          <h2 className="text-2xl font-bold mb-4 text-white">
                            Paquete {pkg.number}
                          </h2>
                          <ul className="mb-4">
                            {pkg.details.map((detail, i) => (
                              <li key={i} className="text-white">
                                • {detail}
                              </li>
                            ))}
                          </ul>
                          <p className="text-lg font-semibold mb-4 text-gray-400">
                            {pkg.price}
                          </p>
                          <a
                            href="https://wa.me/525549242477?text=Hola,%20me%20gustaría%20cotizar%20con%20ustedes."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-2 rounded-full shadow-lg transition duration-200 ease-in-out"
                          >
                            <FaWhatsapp className="mr-2" />
                            Cotiza Ya
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden bg-black">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                      TESTIMONIOS
                    </h1>
                    <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      TESTIMONIOS
                    </h1>
                  </div>
                </div>
                {/* <p className="text-white pt-2 text-center text-2xl md:text-4xl">
                  ¿Por qué somos <br />
                  los <b>preferidos</b>?
                </p> */}
                <div className="bg-black py-[50px]">
                  <QuickInfo5 idioma={espa} />
                </div>
                <div className="bg-white">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                        RECOMENDADOS
                      </h1>
                      <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                        REVISTAS
                      </h1>
                    </div>
                  </div>

                  <div className="py-[50px] px-2">
                    <QuickInfo6 idioma={espa} />
                  </div>
                </div>
                <Encontramos />
                <div className="w-full pb-4">
  <h1 className="font-bold text-3xl md:text-4xl text-white pt-4 text-center">
    POLÍTICAS
  </h1>
  <div className="px-8">
    <p className="text-center text-white sm:text-xs md:text-2xl mt-3 font-bold">
      Pago y Reserva:
    </p>
    <ul className="text-center">
      <li className="text-white">
        • Para confirmar tu evento, requerimos un anticipo del 50% del monto total como garantía de exclusividad.
      </li>
      <li className="text-white">
        • El saldo restante deberá ser liquidado al menos 48 horas antes del evento, junto con la confirmación final del número de asistentes.
      </li>
      <li className="text-white">
        • Ofrecemos menús de 3 tiempos diseñados para grupos de 12 personas en adelante. Cualquier consumo adicional será facturado al cierre del evento.
      </li>
    </ul>
  </div>
  <div className="px-8">
    <p className="text-center text-white sm:text-xs md:text-2xl mt-3 font-bold">
      Cancelaciones y Cambios:
    </p>
    <ul className="text-center">
      <li className="text-white">
        • Cancelaciones o modificaciones realizadas con al menos 10 días de antelación tendrán un cargo administrativo del 10% para cubrir costos operativos.
      </li>
      <li className="text-white">
        • Para cancelaciones o modificaciones realizadas entre 9 y 3 días antes del evento, se aplicará un cargo del 50%.
      </li>
      <li className="text-white">
        • Cancelaciones o modificaciones realizadas con menos de 48 horas de antelación se cobrarán al 100% del costo total, debido a la exclusividad del servicio.
      </li>
      <li className="text-white">
        • No se realizarán reembolsos por asistentes ausentes o servicios no utilizados.
      </li>
    </ul>
  </div>
  <div className="px-8">
    <p className="text-center text-white sm:text-xs md:text-2xl mt-3 font-bold">
      Políticas Adicionales:
    </p>
    <ul className="text-center">
      <li className="text-white">
        • No está permitido el descorche de botellas, garantizando la calidad y curaduría de nuestras opciones.
      </li>
      <li className="text-white">
        • Contamos con opciones personalizadas para preferencias vegetarianas, veganas, sin gluten y sin lactosa.
      </li>
      <li className="text-white">
        • Ofrecemos menús exclusivos para niños de 2 a 12 años. Los mayores de 12 años cuentan como menú de adultos.
      </li>
      <li className="text-white">
        • La alteración del mobiliario o decoración solo será permitida con previa autorización para mantener la estética premium del espacio.
      </li>
      <li className="text-white">
        • En caso de condiciones climáticas adversas, los montajes al aire libre serán reubicados en áreas interiores cuidadosamente diseñadas.
      </li>
      <li className="text-white">
        • Servicios adicionales disponibles incluyen Valet Parking, DJ, y experiencias especiales como bengalas personalizadas, ideales para eventos premium.
      </li>
    </ul>
  </div>
</div>

              </>
            ) : (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      Enjoy the only Cantina with Live Cuban Son
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image3}
                            alt="Great Cuban 
                            Son Orchestras Llorona Cantina"
                          />
                          <p className="text-white pt-2">
                            Great Cuban <br />
                            Son Orchestras
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image4}
                            alt="The best atmosphere Llorona"
                          />
                          <p className="text-white pt-2">
                            The best <br />
                            atmosphere
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      At <b>Cantina La Llorona</b>, we offer a vibrant and
                      authentic experience with Cuban son groups that will
                      transport you with their warm and infectious rhythms.
                      Every week we feature great orchestras directly from{' '}
                      <b>Cuba 🇨🇺</b>.
                    </p>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      Don't miss the opportunity to book and live this unique
                      experience at Cantina La Llorona. We look forward to
                      sharing a night of exquisite flavors and live music that
                      will make you feel the true essence of a{' '}
                      <b>Mexican Cantina! 🥁🪇🎺🇲🇽</b>
                    </p>
                  </div>
                  <div className="w-full">
                    <Calendario />
                  </div>
                </div>

                <div className="overflow-hidden bg-black">
                  <div className="flex items-center gap-4 whitespace-nowrap">
                    <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                      TESTIMONIALS
                    </h1>
                    <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                      TESTIMONIALS
                    </h1>
                  </div>
                </div>
                <div className="bg-black py-[50px]">
                  <QuickInfo5 idioma={espa} />
                </div>
                <div className="bg-white">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <h1 className="inline-block animate-marqueeleft text-black text-[70px] md:text-[100px] font-bold  w-full">
                        RECOMMENDED
                      </h1>
                      <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                        INTERNATIONAL MAGAZINES
                      </h1>
                    </div>
                  </div>

                  <div className="py-[50px] px-2">
                    <QuickInfo6 idioma={espa} />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      </>
    </>
  );
}

export default Reserva;
