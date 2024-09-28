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

export const getStaticPaths = async () => {
  // Aquí defines las rutas dinámicas que quieres pre-generar.
  const paths = [
    { params: { nombre_evento: "familia" } },
    { params: { nombre_evento: "pizzapremiadacdmx" } },
    { params: { nombre_evento: "eventosempresariales" } },
    { params: { nombre_evento: "carne" } },
  ];

  return { paths, fallback: true }; // fallback: true permite la generación dinámica de páginas no especificadas.
};

export const getStaticProps = async (context) => {
  const { nombre_evento } = context.params;

  return {
    props: { nombre_evento }, // Pasas los datos del evento como props a la página.
    revalidate: 10, // Opcional: permite que la página se revalide cada 10 segundos.
  };
};

const Evento = ({ nombre_evento }) => {
  const router = useRouter();
  const { espa } = useAppContext(); // Obtén el nombre del evento de la URL
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "9999999999",
              name: "LLama Ahora",
              isActive: true, //activado true, desactivado false
            },
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "99999999",
              name: "LLama Ahora",
              isActive: false, //activado true, desactivado false
            },
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "+525549242477",
              name: "LLama Ahora",
              isActive: false, //activado true, desactivado false
            },
          },
        ],
        titulo:
          "Ven a probar la pizza más premiada de cdmx en roma condesa 🍐🧀",
        descripcion: (
          <>
            ¿Buscas una experiencia culinaria diferente en el corazón de{" "}
            <strong>Roma Condesa</strong>? En{" "}
            <strong>Cantina La Llorona</strong>, te ofrecemos algo fuera de lo
            común: nuestra <strong> pizza de pera y queso</strong>, reconocida
            como una de las más premiadas en la Ciudad de México.
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "+525549242477",
              name: "LLama Ahora",
              isActive: false, //activado true, desactivado false
            },
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
    {
      nombre_evento: "eventosempresariales",
      es: {
        metas: {
          title: "Cenas Navideñas y Fin de Año en CDMX | Cantina La Llorona",
          descripcion:
            "Reserva tus cenas navideñas, de fin de año o cierre de año en Roma Condesa CDMX. Paquetes a la medida con música en vivo y pantallas para mensajes. ¡Reserva ahora!",
          image:
            "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/pizza/pizza%2Bpera%2Bqueso%2Bsabores%2Bdeliciosos%2Bllorona%2Bmexico%2Bcdmx%2Broma%2Bcondesa.jpg",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png",
            textImage: "Celebra tu cena navideña a lo grande con grupo en vivo",
            alt: "Prueba la pizza más premiada de México cdmx roma condesa",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg",
            textImage: "Paquetes a la medida para tus cenas",
            alt: "Restaurante con diseño único",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/navidad/fiesta-empresa-mexico-cantina-llorona.jpg)",
            title: "Cenas Navideñas y Fin de Año",
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "+525549242477",
              name: "LLama Ahora",
              isActive: true, //activado true, desactivado false
            },
          },
        ],
        titulo:
          "Reserva tu Cena Navideña o de Fin de Año en Cantina La Llorona 🎄🎉",
        descripcion: (
          <>
            🎄 ¡Celebra a lo grande en Cantina La Llorona! 🎉
            <br />
            ¿Buscas un lugar perfecto para tu cena navideña, de fin de año o
            cierre de año en el corazón de la<strong> Roma Condesa</strong>? En{" "}
            <strong>Cantina La Llorona</strong> te ofrecemos paquetes a la
            medida para que tu evento sea inolvidable. <br /> 🎶 Disfruta de
            música en vivo con son cubano o mariachi, elige la opción perfecta
            para tu celebración. 🎤 Te proporcionamos pantallas y micrófonos con
            audio para que puedas transmitir videos y dar tus mensajes
            personalizados.
            <br /> 📍<strong>Ubicación</strong>:{" "}
            <a href="https://maps.app.goo.gl/S6pGcf26H5iKgpwdA">
              Álvaro Obregón 308 Roma Condesa, CDMX
            </a>
            <br />
            📞 <strong>Reserva</strong>:{" "}
            <a href="tel:+525549242477">5549242477</a>
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "99999999",
              name: "LLama Ahora",
              isActive: false, //activado true, desactivado false
            },
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
    {
      nombre_evento: "carne",
      es: {
        metas: {
          title:
            "Mejor Barbacoa de Picanha y Quesabirria en CDMX | Cantina La Llorona",
          description:
            "Prueba la barbacoa de picanha, la quesabirria más deliciosa y el ribeye con cocción perfecta en Roma Condesa. ¡Reserva tu mesa en Cantina La Llorona hoy mismo!",
          image:
            "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/carne/barbacoa%2Bpican%CC%83a%2Bcantina%2Bllorona%2Bsabor%2Broma%2Bcondesa%2Bcdmx.jpg",
        },
        images: [
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/carne/aguachile%2Bcantina%2Bllorona%2Bribeye%2Bdelicioso.jpg",
            textImage: "Disfruta del mejor ribeye con cocción perfecta",
            alt: "Ribeye cocción perfecta en Cantina La Llorona CDMX",
          },
          {
            url: "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/carne/chicharron%2Bpork%2Bbelly%2Bguacamole%2Bcantina%2Bllorona.jpg",
            textImage: "Prueba la quesabirria más deliciosa de CDMX",
            alt: "Quesabirria más deliciosa en Cantina La Llorona",
          },
        ],
        bannerImages: [
          {
            url: "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/carne/barbacoa%2Bpican%CC%83a%2Bcantina%2Bllorona%2Bsabor%2Broma%2Bcondesa%2Bcdmx%2Bdeliciosa+copy.jpg)",
            title: "Reserva ya en Cantina La Llorona",
            buttonAction: {
              type: "phone_contact",
              valor: "+525549242477",
              name: "Llama Ahora",
              isActive: true,
            },
          },
        ],
        titulo:
          "Disfruta la Mejor Barbacoa, Quesabirria y Ribeye en Cantina La Llorona 🍖🍴",
        descripcion: (
          <>
            <strong>🍖 Bienvenidos a Cantina La Llorona 🍴</strong>
            <br />
            Si buscas una experiencia gastronómica inigualable, te invitamos a
            probar la mejor <strong>barbacoa de picanha</strong>, nuestra famosa
            quesabirria, el chicharrón de pork belly más crunchy y nuestro
            ribeye con gran jugosidad por su perfecta cocción. Todo esto en un
            ambiente vibrante y lleno de sabor en el corazón de Roma Condesa.
            <br /> 🎶 Además, disfruta de nuestro inigualable ambiente con
            música en vivo: grandes grupos de son cubano o mariachi para
            acompañar tu comida. ¡La combinación perfecta de sabor y
            entretenimiento!
            <br /> 📍<strong>Ubicación</strong>:{" "}
            <a href="https://maps.app.goo.gl/S6pGcf26H5iKgpwdA">
              Álvaro Obregón 308, Roma Condesa, CDMX
            </a>
            <br />
            📞 <strong>Reserva</strong>:{" "}
            <a href="tel:+525549242477">5549242477</a>
            <br />
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width="20px"
                style={{ marginRight: "5px" }}
              />
              <strong>WhatsApp</strong>:
              <a
                href="https://wa.me/525549242477"
                target="_blank"
                style={{ marginLeft: "5px" }}
              >
                5549242477
              </a>
            </span>
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
            buttonAction: {
              type: "phone_contact", //tipos: phone_contact, link_external, popup, etc
              valor: "99999999",
              name: "LLama Ahora",
              isActive: false, //activado true, desactivado false
            },
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
  const eventoData =
    data.find((evento) => evento.nombre_evento === nombre_evento) || null;

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  if (!eventoData) {
    return <div>No se encontró el evento.</div>;
  }
  const lang = espa ? "es" : "en";
  const data_detail = eventoData[lang];

  return (
    <>
      <Head>
        <title>{data_detail.metas.title}</title>
        <meta
          property="og:description"
          content={data_detail.metas.descripcion}
        />
        <meta property="og:image" content={data_detail.metas.image} />
      </Head>
      <NavBar />
      <div>
        <MySwiper BannerImages={data_detail.bannerImages} />
      </div>

      <div className="w-full bg-black h-[200px]"></div>
      <div className="w-full bg-[#020a06] -mt-[200px]">
        <div className="w-full max-w-[1184px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-8 text-center">
          <div className="w-full">
            <h1 className="font-bold text-3xl md:text-4xl text-white pt-4">
              {data_detail.titulo}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data_detail?.images.map((img, index) => {
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
              {data_detail.descripcion}
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
