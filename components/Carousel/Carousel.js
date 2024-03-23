import React, { useState, useEffect } from "react";

const TestimonialCard = ({ testimonial }) => {
  const { photo, rating, text, date } = testimonial;

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Contenedor de la imagen ajustado para dispositivos móviles y escritorio */}
      <img
        className="h-32 w-32 md:h-48 md:w-48 rounded-full object-cover" // Tamaños diferentes para móvil (h-32 w-32) y escritorio (md:h-48 md:w-48)
        src={photo}
        alt="Client photo"
      />
      <div className="text-center mt-4">
        {" "}
        {/* Centrar texto y añadir espacio en la parte superior */}
        <h2 className="text-sm md:text-base font-medium text-gray-500">
          Rating:
        </h2>
        <div className="flex justify-center items-center">
          <span className="text-lg md:text-xl font-semibold text-gray-900">
            {rating}
          </span>
          <svg
            fill="currentColor"
            className="w-5 h-5 text-orange-500 ml-1"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.384-.955 1.683-.955 2.067 0l1.462 3.635a1.5 1.5 0 001.419 1.034h3.813c1.054 0 1.488 1.33.71 1.997l-3.08 3.004a1.5 1.5 0 00-.432 1.34l.73 4.259c.177 1.041-1.045 1.84-1.949 1.347l-3.613-1.9a1.5 1.5 0 00-1.395 0l-3.613 1.9c-.903.493-2.125-.306-1.949-1.347l.73-4.259a1.5 1.5 0 00-.432-1.34l-3.08-3.004c-.778-.667-.344-1.997.71-1.997h3.813a1.5 1.5 0 001.419-1.034l1.462-3.635z"></path>
          </svg>
        </div>
        <p className="text-md md:text-lg font-medium text-gray-900 mt-1">
          {text}
        </p>
        <p className="text-xs md:text-sm text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
};

const Carousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const gap = "0.25rem";

  // Ajusta el número de slides visibles según el tamaño de pantalla
  useEffect(() => {
    const updateVisibleSlides = () => {
      setVisibleSlides(window.innerWidth >= 768 ? 3 : 1);
    };

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleSlides < 0 ? 0 : prevIndex - visibleSlides
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // Se calcula el posible nuevo índice
      const newIndex = prevIndex + visibleSlides;
      // Si el nuevo índice más la cantidad de slides visibles excede el total de testimonios, solo avanzamos a los últimos testimonios
      if (newIndex + visibleSlides - 1 >= testimonials.length) {
        return testimonials.length - visibleSlides;
      }
      // De lo contrario, avanzamos normalmente
      return newIndex;
    });
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-x-1 md:gap-x-4">
        {" "}
        {/* gap-x-1 para móviles y md:gap-x-4 para escritorio */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none transition-transform duration-500"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleSlides
              }%)`,
              width: `calc(${100 / visibleSlides}% - ${gap} - ${gap})`, // Resta el gap doble (izquierda y derecha)
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg text-black"
        >
          &#8592;
        </button>
      )}
      {currentIndex + visibleSlides < testimonials.length && (
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg text-black"
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

export default Carousel;
