import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useAppContext } from "../context/Context";
const Slider = () => {
  return (
    <>
      <div className="w-full bg-black py-12">
        <div className="overflow-hidden bg-black">
          <div className="inline-block whitespace-nowrap animate-marqueeleft">
            <h1 className="inline-block text-red-500 text-[70px] md:text-[100px] font-bold px-4 py-2">
              OUR MENU FOR YOUR DATE
            </h1>
            <h1 className="inline-block text-white text-[70px] md:text-[100px] font-bold px-4 py-2">
              OUR MENU FOR YOUR DATE
            </h1>
          </div>
        </div>
        <div className="w-full max-w-[1184px] mx-auto px-[20px]">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation
            scrollbar={{ draggable: true }}
            loop={true}
            breakpoints={{
              // cuando el ancho de la ventana es igual o mayor a 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // cuando el ancho de la ventana es igual o mayor a 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              // cuando el ancho de la ventana es igual o mayor a 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full">
                <img
                  className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/tostadaCantinera.jpg"
                  alt=""
                />
                <h1 className="text-2xl md:text-5xl text-white mt-3">
                  Tostada Cantinera
                </h1>
                <p className="text-xs md:text-xl text-white">
                  Our sourdough pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img
                  className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologiaIncreible.jpg"
                  alt=""
                />
                <h1 className="text-2xl md:text-5xl text-white mt-3">
                  Tacos with heirloom corn
                </h1>
                <p className="text-xs md:text-xl text-white">
                  100% nixtamal, no preservatives
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img
                  className="rounded-lg border-2 border-white w-full h-[300px] object-left object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png"
                  alt=""
                />
                <h1 className="text-2xl md:text-5xl text-white mt-3">
                  Live Cuban
                </h1>
                <p className="text-xs md:text-xl text-white">Son Band</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <img
                  className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/lugarincreible%2Bcomida%2Bdeliciosa%2Bcantina.jpg"
                  alt=""
                />
                <h1 className="text-2xl md:text-5xl text-white mt-3">
                  Unique Mexican Cantina
                </h1>
                <p className="text-xs md:text-xl text-white">
                  Roma Condesa Mexico City
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                <video
                  className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover object-center"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/llorona%2Bmariachi%2Bcantina.MP4"
                  autoPlay
                  loop
                  muted
                />
                <h1 className="text-2xl md:text-5xl text-white mt-3">
                  Meeting place for foreigners
                </h1>
                <p className="text-xs md:text-xl text-white">
                  Mexican food in Mexico City
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider;
