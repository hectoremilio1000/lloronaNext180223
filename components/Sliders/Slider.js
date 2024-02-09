import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <div className="w-full bg-black py-12">
      <div className="overflow-hidden bg-black">
        <div className="flex items-center gap-4 whitespace-nowrap ">
          <h1 className="animate-marquee inline-block text-white text-[70px] md:text-[100px] font-bold">
            Nuestra CARTA
          </h1>
          <h1 className="animate-marquee inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold ">
            NUESTRA CARTA
          </h1>
        </div>
      </div>
      <div className="w-full max-w-[1184px] mx-auto px-[20px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // cuando el ancho de la ventana es igual o mayor a 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // cuando el ancho de la ventana es igual o mayor a 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // cuando el ancho de la ventana es igual o mayor a 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full">
              <img
                className="rounded-lg border-2 border-white w-full object-cover"
                src="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
                alt=""
              />
              <h1 className="text-2xl md:text-5xl text-white mt-3">
                Ensaladas
              </h1>
              <p className="text-xs md:text-xl text-white">
                Para compartir y no compartir
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img
                className="rounded-lg border-2 border-white w-full object-cover"
                src="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
                alt=""
              />
              <h1 className="text-2xl md:text-5xl text-white mt-3">
                Ensaladas
              </h1>
              <p className="text-xs md:text-xl text-white">
                Para compartir y no compartir
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img
                className="rounded-lg border-2 border-white w-full object-cover"
                src="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
                alt=""
              />
              <h1 className="text-2xl md:text-5xl text-white mt-3">
                Ensaladas
              </h1>
              <p className="text-xs md:text-xl text-white">
                Para compartir y no compartir
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full">
              <img
                className="rounded-lg border-2 border-white w-full object-cover"
                src="https://www.goiko.com/es/wp-content/uploads/2023/07/TO-SHARE.png"
                alt=""
              />
              <h1 className="text-2xl md:text-5xl text-white mt-3">
                Ensaladas
              </h1>
              <p className="text-xs md:text-xl text-white">
                Para compartir y no compartir
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
