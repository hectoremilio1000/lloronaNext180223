import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mejorterrazaCDMXcantinalallorona.jpg)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/rib%2Beye%2Bllorona%2Bcarne.jpg)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {" "}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/tostadaMariscos%2Bllorona%2Bcantina.jpg)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {" "}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/cumplean%CC%83os%2Bsorpresa%2Bfiesta%2Bllorona%2Bcantina.png)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {" "}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/franquicias/banner/IMG_8773.jpg)",
            height: "80vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {" "}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={"/reserva"}
              className="inline-block px-4 py-3 rounded-md text-green-900 font-bold bg-[#3eeb91] text-xl m:text-2xl"
            >
              Reserva Ahora
            </Link>
          </div> */}
        </div>
      </SwiperSlide>

      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
