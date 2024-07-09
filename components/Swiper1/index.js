import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
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
            height: "700px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG)",
            height: "700px",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/fotosBanner/IMG_0907.jpg)",
            height: "700px",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              "url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/fotosBanner/IMG_3087.jpg)",
            height: "700px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      </SwiperSlide>
      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
