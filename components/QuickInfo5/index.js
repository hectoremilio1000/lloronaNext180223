import React from "react";
import Carousel from "../Carousel/Carousel";

function QuickInfo5({ idioma }) {
  const testimonialsEs = [
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjUxNJQuFLCTAQlSBGAdFgrpbL2zs-1PAWTDEfA0Jq14X7I=w120-h120-p-rp-mo-ba3-br100",
      rating: 5,
      nombre: "ethan carbajal",
      url: "https://g.co/kgs/mJXTxJ1",
      text: "Bonito restaurante con una vista simpática, si te sientas afuera es mucho mejor... Algo tiene la experiencia de comer en el exterior un restaurante y la zona es bonita, les recomiendo intentarlo <br/> Pedí un mezcal de gusano, una hamburguesa de pollo y una cerveza para acompañar!",
      date: "2023-03-15",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjXYp55Vw7rkN8VpKPZ943gxa3x58PDNlOmPUk8FJwrpobKV=w120-h120-p-rp-mo-ba3-br100",
      rating: 5,
      nombre: "Dale Piceno",
      url: "https://g.co/kgs/rJAd94s",
      text: "Un lugar muy chic, menú de autor, buen sabor y presentación. Muy recomendable y las hamburguesas son delis",
      date: "2023-03-16",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjXK7_enaQuwynGEzJkhhVHU65TGBOg03ODSrY4GP_R8Y2TT=w120-h120-p-rp-mo-br100",
      rating: 5,
      nombre: "Ivan Ramirez Trejo",
      url: "https://g.co/kgs/wZbdKKg",
      text: "💯% recomendable, comida, atención y bebidas de lujo! Lugar Pet Friendly, recomiendo la hamburguesa crujicerdo y la variedad de tacos </br> En esta ocasión me atendió Roberto él mexicano🙌🏽",
      date: "2023-03-17",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjVHTZs61uPphRYtaHBB1ZHCHIaah1PelMVFWSHGUF4Kq4w=w120-h120-p-rp-mo-ba5-br100",
      rating: 5,
      nombre: "Raul Arreaza mijares",
      url: "https://g.co/kgs/rS2hRTg",
      text: "Excelente lugar, la atención es muy cordial y amable, los platillos de verdad vienen cargados de sabor, todos tienen un toque original en su receta, la pizza de la casa está increíble con peperonni salchicha italiana y aceitunas negras , el guacamole muy rico también y los cócteles se llevaron 5 estrellas en sabor y presentación ! Un lugar muy agradable para disfrutar un buen rato.",
      date: "2023-03-17",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100",
      rating: 5,
      nombre: "Jorge David Santacruz Morhy",
      url: "https://g.co/kgs/gVgZDhf",
      text: "Excelente lugar - la cerveza oscura está exquisita, así cómo la  hamburguesa. El servicio muy amable.",
      date: "2023-03-17",
    },
  ];
  const testimonialsEn = [
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjU-eD1Bf9aMyK372MXWBN7g4YgbBl6yWx1cC3ZRu_YgW3k=w72-h72-p-rp-mo-ba4-br100",
      rating: 5,
      nombre: "Amanda V",
      url: "https://maps.app.goo.gl/GL3A5K35yeAZdQ8u9",
      text: "Service was quick, friendly, and informative about the menu. I got the Don Huevo burger, and it was SO GOOD. (I'm going to start adding arugula and fried eggs when I make burgers at home!) Also got the strawberry horchata (in the pictures) since it was one of the only non-alcoholic options, and it was divine. The flavor was great and it was so creamy. The only thing I wasn't a huge fan of was the TV was on with the volume kind of loud the whole time, the music was a little too loud, and the lights were synchronized with the music, so it was a little overstimulating.",
      date: "2024-01-27",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a/ACg8ocItU4W0dCOiujTKHmB8VH7wDRsH8AR0F-ho-Gvg0DFD=w72-h72-p-rp-mo-br100",
      rating: 5,
      nombre: "lowell moore",
      url: "https://maps.app.goo.gl/qzCD2gzVXMMeFQRy6",
      text: "First night in Mexico City. Just stopped by for a quick drink and looked at the menu.  Hamburger with carmelized onions and blue cheese is one of the best burgers I've ever had.  Sat outdoors and Robert took excellent care of us. Highly recommend. You will love it!",
      date: "2024-03-20",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjUGcZfuqJgBQdnyKgdkg-oceqZRcc3CqaFmPRfe29OYCnY=w72-h72-p-rp-mo-br100",
      rating: 5,
      nombre: "sandra baca",
      url: "https://maps.app.goo.gl/ZJMTbNCMEd9dgDLo7",
      text: "Nice cocktails and food, I've just got dessert but it was delicious, excellent service, the only thing is that music is a bit louder 🤗",
      date: "2023-12-27",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjV59R_Omgyfga0TgY28SuqcWYiDp2Z25csoTFPE0c13xEk=w72-h72-p-rp-mo-ba4-br100",
      rating: 5,
      nombre: "Kelly Ording",
      url: "https://maps.app.goo.gl/C6YMzKvwJMA3i1JPA",
      text: "La Llorona Cantina is a good spot for some food and drinks. I got one of the taco options  and a cocktail. Both were great! The staff was incredibly friendly and put the women’s World Cup on the television. Sometimes they have live music as well.",
      date: "2023-03-17",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjUtcBpPxtrulJCOXAOBGTrHtLcvjZ8xse4TBRKRPWKSJ0k=w72-h72-p-rp-mo-ba5-br100",
      rating: 5,
      nombre: "Pratik Desai",
      url: "https://maps.app.goo.gl/Rv94nb1T1xtXC8U37",
      text: "Amazing artisanal tacos (but smaller in size) - a great place to day drink outside. Some of the servers are a little careless, but the owner (or manager?) is very thoughtful. Good mezcal list as well!",
      date: "2023-03-17",
    },
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjXiW3l7abC7CeoVxAqmpCrki47n0HymK-Qn7z4Qb3K_RA=w72-h72-p-rp-mo-br100",
      rating: 5,
      nombre: "Christophe Diot",
      url: "https://maps.app.goo.gl/hidk1jdyDYwZjmFT6",
      text: "nice outdoor bar atmosphere. nothing fancy but very friendly, tasty food, excellent cocktails. everything you need for a quiet dinner with family in mexico city.",
      date: "2023-03-17",
    },
  ];

  return (
    <>
      {idioma ? (
        <div className="container mx-auto px-4 lg:px-0">
          <Carousel testimonials={testimonialsEs} />
        </div>
      ) : (
        <div className="container mx-auto px-4 lg:px-0">
          <Carousel testimonials={testimonialsEn} />
        </div>
      )}
    </>
  );
}

export default QuickInfo5;
