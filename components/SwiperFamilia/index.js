import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen1,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen2,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen3,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen4,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen5,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: BannerImages.imagen6,
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>
      </SwiperSlide>
      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
