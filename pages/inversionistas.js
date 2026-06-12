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
import NavBar from '../components/NavInversionista/NavBarEs';
import QuickInfo5 from '../components/QuickInfo5';
import '../styles/Slider.module.css'; // Importa el archivo CSS aquí

import dynamic from 'next/dynamic';
import MySwiper from '../components/SwiperCantina';
import CalendarioInversion from '../components/CalendarioInversion';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Inversionstas() {
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');

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

  const { ingles, espa, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  const [hasInitialized, setHasInitialized] = useState(false);
  useEffect(() => {
    if (!hasInitialized) {
      onIdiomaEspa();
      setHasInitialized(true);
    }
  }, [hasInitialized, onIdiomaIngles]);

  const handleLanguageChange = (language) => {
    if (language === 'espa') {
      onIdiomaEspa();
    } else {
      onIdiomaIngles();
    }
    setHasInitialized(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { nombre, whatsapp, email };

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Contacto guardado exitosamente');
        // Limpiar los campos del formulario
        setNombre('');
        setWhatsapp('');
        setEmail('');
      } else {
        alert('Error al guardar contacto: ' + result.message);
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Hubo un problema al guardar el contacto');
    }
  };

  const bannerData = espa
    ? {
        title:
          'Aliados en el crecimiento de conceptos únicos que conectan con la gente',
        imageURL:
          '/img/eventos/chile-en-nogada.webp',
      }
    : {
        title: 'From the sea to your palate',
        imageURL:
          '/img/platos/tostada-aguachile-aguacate-llorona.webp',
      };

  const image1 =
    '/img/reserva/chica-coctel-calavera.webp';
  const image2 =
    '/img/cumple/chica-carrito-dulces.webp';
  const image3 =
    '/img/eventos/pan-de-muerto.webp';
  const image4 =
    '/img/ambiente/mesa-tacos-domino.webp';

  const image5 =
    '/img/logos/maximiliano-restaurante.webp';
  const image6 =
    '/img/mixologia/amigas-martini-rosa.webp';
  const image7 =
    '/img/cumple/festejo-bengala-terraza.webp';
  const image8 =
    '/img/mixologia/coctel-mazapan-martini.webp';
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
          <NavBar onLanguageChange={handleLanguageChange} />
          <div>
            <MySwiper title={bannerData.title} imageURL={bannerData.imageURL} />
          </div>

          <div className="w-full bg-black h-[200px]"></div>
          <div className="w-full bg-[#020a06] -mt-[200px]">
            {espa ? (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
                      Propuestas innovadoras con una experiencia operativa
                      incomparable
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image3}
                            alt="Música en vivo"
                          />
                          <p className="text-white pt-2">
                            Productos <br />
                            Innovadores
                          </p>
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image4}
                            alt="Música en vivo"
                          />
                          <p className="text-white text-center">
                            Ambientes <br />
                            Aspiracionales
                          </p>
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
                      Somos más que un fondo de Inversión: somos{' '}
                      <b>titanes de la hospitalidad</b> y expertos en crear
                      conceptos que <b>enamoran y trascienden</b>
                    </p>
                  </div>
                  <div className="w-full">
                    <CalendarioInversion />
                  </div>
                </div>

                <div className=" bg-white pt-20 grid-cols-1 md:grid-cols-2 px-10">
                  <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="font-bold text-2xl md:text-4xl text-black text-center">
                      Nuestro nuevo concepto
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      <div>
                        <h2 className="font-bold text-3xl md:text-4xl text-black text-center">
                          Maximiliano
                        </h2>
                        <p className="text-black pt-2 text-lg md:text-2xl text-center">
                          Modernizamos el concepto de restaurante mexicano para
                          conectar <b> generaciones con elementos mexicanos</b>
                        </p>
                      </div>

                      <div>
                        <img
                          className="rounded-lg w-fit object-cover "
                          src={image5}
                          alt="Maximiliano"
                        />
                        <p className="text-white text-center">
                          Concepto <br />
                          Innovador
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-black">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-4 whitespace-nowrap"></div>
                  </div>

                  <div className="px-2 pb-2">
                    <h1 className="text-white text-center pt-4 text-2xl">
                      Si tienes alguna duda no dudes en contactarnos
                    </h1>
                    <a
                      href="https://wa.me/525620305618?text=Hola,%20me%20gustaría%20ganar%20con%20ustedes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 my-2 md:mx-36 rounded-full shadow-lg transition duration-200 ease-in-out"
                    >
                      <FaWhatsapp className="mr-2" />
                      Contactanos ya
                    </a>
                  </div>
                </div>

                <div className="bg-white">
                  <div className="px-2 pb-2">
                    <div className="bg-white py-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6 uppercase">
                        Contáctanos y únete a nuestros inversionistas
                      </h2>
                      <form
                        className="max-w-xl mx-auto bg-gray-100 shadow-lg rounded-lg p-6"
                        onSubmit={handleSubmit}
                      >
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Escribe tu nombre"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="whatsapp"
                            className="block text-sm font-medium text-gray-700"
                          >
                            WhatsApp
                          </label>
                          <input
                            type="text"
                            id="whatsapp"
                            name="whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Escribe tu número de WhatsApp"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            placeholder="Escribe tu correo electrónico"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md shadow-lg transition duration-200"
                        >
                          Quiero invertir ya y ganar dinero
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
                  <div className="w-full">
                    <h1 className="font-bold text-4xl text-white">
                      On Thursdays, a birthday <br />
                      piñata with a bottle of mezcal
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image3}
                            alt="Música en vivo"
                          />
                        </div>
                      </Link>

                      <Link href="/reserva">
                        <div>
                          <img
                            className="rounded-lg w-full h-[350px] object-cover"
                            src={image4}
                            alt="Música en vivo"
                          />
                        </div>
                      </Link>
                    </div>
                    <p className="text-start text-white sm:text-xs md:text-md mt-3">
                      The birthday piñata is free of charge and applies every
                      Thursday if your birthday is in the month. You just need
                      to make a reservation. We give away traditional Mexican
                      candies and a bottle of our best house mezcal 🍶🥃 madre
                      cuishe, which is handcrafted.
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
              </>
            )}
          </div>
        </>
      </>
    </>
  );
}

export default Inversionstas;
