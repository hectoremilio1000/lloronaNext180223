import React from "react";
import Carousel from "../Carousel/Carousel";

function QuickInfo5() {
  const testimonials = [
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
        "https://lh3.googleusercontent.com/a-/ALV-UjUYCqzu6RvtNGQkip7Tm0qeRUageBvogoGRW_mwOFgwKPc=w120-h120-p-rp-mo-ba5-br100",
      rating: 5,
      nombre: "Boris Céspedes",
      url: "https://g.co/kgs/2vYp7rJ",
      text: "¡Increíble ambiente! Definitivamente volveré.",
      date: "2023-03-17",
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
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 5,
      nombre: "ethan carbajal",
      url: "https://g.co/kgs/mJXTxJ1",
      text: "¡Increíble ambiente! Definitivamente volveré.",
      date: "2023-03-17",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-0">
      {" "}
      {/* Elimina el padding en pantallas grandes con lg:px-0 */}
      <Carousel testimonials={testimonials} />
    </div>
  );
}

export default QuickInfo5;
