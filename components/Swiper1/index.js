import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
              'url(/img/ambiente/terraza-noche.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/cumple/carrito-dulces-cumpleanera.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/salsa/cantante-son-cubano.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/salsa/cantante-son-cubano.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/mixologia/amigas-martini-rosa.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/carne/arrachera-cenital.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        ></div>
      </SwiperSlide>
      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
