import { useRouter } from "next/router";
import { useAppContext } from "../../components/context/Context";
import Link from "next/link";
import CalendarioGoogleAds from "../../components/CalendarioGoogleAds";
import QuickInfo5 from "../../components/QuickInfo5";
import QuickInfo6 from "../../components/QuickInfo6";
import NavBar from "../../components/NavBarEs/NavBarEs";
import MySwiper from "../../components/SwiperGeneral";
import Head from "next/head";
import Slider from "../../components/Sliders/Slider";
import { useEffect, useState } from "react";

const Evento = () => {
  const router = useRouter();
  const { espa } = useAppContext();
  const [eventoData, setEventoData] = useState(null);
  const { nombre_evento } = router.query; // Obtén el nombre del evento de la URL
  useEffect(() => {
    if (nombre_evento) {
      getEventData(nombre_evento, espa);
    }
  }, [nombre_evento]);

  // Asegúrate de que `nombre_evento` esté disponible antes de continuar
  if (!nombre_evento) return null;
  // DATA PARA CAMBIAR SEGUN NUEVAS PAGINAS QUE SUBAS
  const data = [
    {
      nombre_evento: "familia",
      es: {
        metas: {
          title:
            "El restaurante con un diseño sorprendente y la comida más sabrosa",
          descripcion: "L amagia ya esta aqui",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Hrg9XUZSQuu4rrsyx8wrkzbS0cLRsUTwSw&s",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/terrazaespecialromanceromacondesaamigoscantina.jpg",
            textImage: "Diseño espectacular y unico en CDMX",
            alt: "Diseño espectacular y unico en CDMX",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
            textImage: "Restaurante de familia y comida",
            alt: "Restaurante de familia y comida",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )",
            title: "SALSA MAGICA",
          },
        ],
        titulo:
          "El restaurante con un diseño sorprendente y la comida más sabrosa",
        descripcion: (
          <>
            <b>La Llorona es el lugar perfecto </b>para disfrutar en familia de
            una experiencia única en un ambiente acogedor y lleno de sabor. Ven
            a descubrir nuestros platillos que deleitarán a grandes y chicos, y
            haz de cada comida una ocasión especial. ¡Reserva ahora y vive un
            momento inolvidable con los que más quieres!
          </>
        ),
      },
      en: {
        metas: {
          title:
            "The restaurant with breathtaking design and the most delicious food",
          descripcion: "L amagia ya esta aqui",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Hrg9XUZSQuu4rrsyx8wrkzbS0cLRsUTwSw&s",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg",
            textImage: "Diseño espectacular y unico en CDMX",
            alt: "Diseño espectacular y unico en CDMX",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
            textImage: "Restaurante de familia y comida",
            alt: "Restaurante de familia y comida",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)",
            title: "SALSA MAGICA",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )",
            title: "SALSA MAGICA",
          },
        ],
        titulo:
          "The restaurant with breathtaking design and the most delicious food",
        descripcion: (
          <>
            <b>La Llorona es el lugar perfecto </b>para disfrutar en familia de
            una experiencia única en un ambiente acogedor y lleno de sabor. Ven
            a descubrir nuestros platillos que deleitarán a grandes y chicos, y
            haz de cada comida una ocasión especial. ¡Reserva ahora y vive un
            momento inolvidable con los que más quieres!
          </>
        ),
      },
    },
    {
      nombre_evento: "pizzapremiadacdmx",
      es: {
        metas: {
          title:
            "Pizza de Pera y Queso Premiada CDMX roma condesa | Cantina La Llorona",
          descripcion:
            "Disfruta la pizza de pera y queso más premiada de roma condesa CDMX en Cantina La Llorona. Sabores únicos y creatividad culinaria. ¡Reserva ahora!",
          image:
            "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg",
            textImage: "Prueba la pizza más premiada de México",
            alt: "Prueba la pizza más premiada de México cdmx roma condesa",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg",
            textImage: "Restaurante de familia y comida",
            alt: "Restaurante con diseño único",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg)",
            title: "La pizza más premiada",
          },
        ],
        titulo:
          "Ven a probar la pizza más premiada de cdmx en roma condesa 🍐🧀",
        descripcion: (
          <>
            ¿Buscas una experiencia culinaria diferente en el corazón de{" "}
            <strong>Roma Condesa</strong>? En{" "}
            <strong>Cantina La Llorona</strong>, te ofrecemos algo fuera de lo
            común: nuestra
            <strong>pizza de pera y queso</strong>, reconocida como una de las
            más premiadas en la Ciudad de México.
            <br></br>
            📍<strong>Ubicación</strong>:{" "}
            <a href="https://maps.app.goo.gl/S6pGcf26H5iKgpwdA">
              Álvaro Obregón 308 Roma Condesa, CDMX{" "}
            </a>
            <br />
            📞 <strong>Reserva</strong>:{" "}
            <a href="tel:+525549242477">5549242477</a>
            <br />
          </>
        ),
      },
      en: {
        metas: {
          title:
            "Award-Winning Pear and Cheese Pizza in CDMX Roma Condesa | Cantina La Llorona",
          descripcion:
            "Enjoy the most awarded pear and cheese pizza in Roma Condesa, CDMX at Cantina La Llorona. Unique flavors and culinary creativity. Reserve now!",
          image:
            "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg",
            textImage: "Try Mexico’s most awarded pizza",
            alt: "Try the most awarded pizza in Mexico, CDMX, Roma Condesa",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg",
            textImage: "Family restaurant and delicious food",
            alt: "Restaurant with unique design",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg)",
            title: "The Most Awarded Pizza",
          },
        ],
        titulo: "Come and try the most awarded pizza in CDMX Roma Condesa 🍐🧀",
        descripcion: (
          <>
            Are you looking for a unique culinary experience in the heart of{" "}
            <strong>Roma Condesa</strong>? At{" "}
            <strong>Cantina La Llorona</strong>, we offer something
            extraordinary: our <strong>pear and cheese pizza</strong>,
            recognized as one of the most awarded pizzas in Mexico City.
            <br></br>
            📍<strong>Location</strong>:{" "}
            <a href="https://maps.app.goo.gl/S6pGcf26H5iKgpwdA">
              Álvaro Obregón 308, Roma Condesa, CDMX{" "}
            </a>
            <br />
            📞 <strong>Reserve</strong>:{" "}
            <a href="tel:+525549242477">5549242477</a>
            <br />
          </>
        ),
      },
    },
    //    ... establecer las demas paginas
  ];

  // Función para filtrar por nombre_evento y idioma (lang)
  const getEventData = (nombre_evento, lang) => {
    // Buscar el evento por nombre_evento
    const espa = lang ? "es" : "en";
    const evento = data.find((event) => event.nombre_evento === nombre_evento);

    if (!evento) {
      setEventoData(null);
    }

    setEventoData(evento[espa]);
  };

  if (eventoData === null) {
    return <p>Evento no encontrado</p>;
  }
  return (
    <>
      <Head>
        <title>{eventoData.metas.title}</title>
        <meta
          property="og:description"
          content={eventoData.metas.descripcion}
        />
        <meta property="og:image" content={eventoData.metas.image} />
      </Head>
      <NavBar />
      <div>
        <MySwiper BannerImages={eventoData.bannerImages} />
      </div>

      <div className="w-full bg-black h-[200px]"></div>
      <div className="w-full bg-[#020a06] -mt-[200px]">
        <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
          <div className="w-full">
            <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
              {eventoData.titulo}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventoData?.images.map((img, index) => {
                return (
                  <Link href="/reserva">
                    <div>
                      <img
                        className="rounded-lg w-full h-[350px] object-cover"
                        src={img.url}
                        alt={img.alt}
                      />
                      <p className="text-white pt-2">{img.textImage}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <p className="text-start text-white sm:text-xs md:text-2xl mt-3">
              {eventoData.descripcion}
            </p>
          </div>
          <div className="w-full">
            <CalendarioGoogleAds />
          </div>
        </div>
        <div className="overflow-hidden bg-black">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
              {espa ? "TESTIMONIOS" : "TESTIMONIALS"}
            </h1>
            <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
              {espa ? "TESTIMONIOS" : "TESTIMONIALS"}
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
                {espa ? "RECOMENDADOS" : "RECOMMENDED"}
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                {espa ? "REVISTAS" : "MAGAZINES"}
              </h1>
            </div>
          </div>

          <div className="py-[50px] px-2">
            <QuickInfo6 idioma={espa} />
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Evento;
