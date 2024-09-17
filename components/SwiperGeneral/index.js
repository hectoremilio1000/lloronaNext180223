import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = ({ BannerImages }) => {
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
      {BannerImages.map((img, index) => {
        return (
          <SwiperSlide>
            <div
              style={{
                backgroundImage: img.url,
                height: "80vh",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
