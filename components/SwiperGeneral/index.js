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
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: img.url,
                height: "80vh",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center p-4">
                  {img.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
