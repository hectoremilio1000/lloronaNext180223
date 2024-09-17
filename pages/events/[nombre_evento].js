import { useRouter } from "next/router";
import { useAppContext } from "../../components/context/Context";
import Link from "next/link";
import CalendarioGoogleAds from "../../components/CalendarioGoogleAds";
import QuickInfo5 from "../../components/QuickInfo5";
import QuickInfo6 from "../../components/QuickInfo6";
import NavBar from "../../components/NavBarEs/NavBarEs";
import MySwiper from "../../components/SwiperGeneral";

const Evento = () => {
  const router = useRouter();
  const { espa } = useAppContext();
  const { nombre_evento } = router.query; // Obtén el nombre del evento de la URL

  // DATA PARA CAMBIAR SEGUN NUEVAS PAGINAS QUE SUBAS
  const data = [
    {
      nombre_evento: "familia",
      es: {
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/terrazaespecialromanceromacondesaamigoscantina.jpg",
            textImage: "Diseño espectacular y unico en CDMX",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
            textImage: "Restaurante de familia y comida",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )",
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
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg",
            textImage: "Diseño espectacular y unico en CDMX",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/niurka%2Bcantina%2Bla%2Bllorona%2Bfestejo%2Bcantina%2Bllorona.jpg",
            textImage: "Restaurante de familia y comida",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/pan%2Belote%2Bcantina%2Bllorona%2Bdelicioso.JPG)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscos.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/costra%2Belote%2Bdelicia%2Bchef%2Bcantina%2Bllorona.JPG)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/cantina%2Bllorona%2Btaco.jpg)",
          },
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/familia/tostada%2Batun%2Baguachile%2Bcantina%2Bllorona+copy.jpg )",
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
    //    ... establecer las demas paginas
  ];

  // Función para filtrar por nombre_evento y idioma (lang)
  const getEventData = (nombre_evento, lang) => {
    // Buscar el evento por nombre_evento
    const espa = lang ? "es" : "en";
    const evento = data.find((event) => event.nombre_evento === nombre_evento);

    if (!evento) {
      return null; // Si no se encuentra el evento, devolver null
    }

    // Devolver la información en el idioma seleccionado
    return evento[espa];
  };
  const eventoData = getEventData(nombre_evento, espa);

  if (!eventoData) {
    return <p>Evento no encontrado</p>;
  }

  return (
    <>
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
                        alt="Música en vivo"
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
      </div>
    </>
  );
};

export default Evento;
