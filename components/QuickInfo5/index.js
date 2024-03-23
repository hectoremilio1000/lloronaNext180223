import React from "react";
import Carousel from "../Carousel/Carousel";

function QuickInfo5() {
  const testimonials = [
    {
      photo:
        "https://lh3.googleusercontent.com/a-/ALV-UjUxNJQuFLCTAQlSBGAdFgrpbL2zs-1PAWTDEfA0Jq14X7I=w120-h120-p-rp-mo-ba3-br100",
      rating: 5,
      text: "¡Excelente servicio! Muy recomendable.",
      date: "2023-03-15",
    },
    {
      photo:
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 4,
      text: "Muy buena experiencia, comida deliciosa.",
      date: "2023-03-16",
    },
    {
      photo:
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 5,
      text: "¡Increíble ambiente! Definitivamente volveré.",
      date: "2023-03-17",
    },
    {
      photo:
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 5,
      text: "¡Increíble ambiente! Definitivamente volveré.",
      date: "2023-03-17",
    },
    {
      photo:
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 5,
      text: "¡Increíble ambiente! Definitivamente volveré.",
      date: "2023-03-17",
    },
    {
      photo:
        "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg",
      rating: 5,
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
