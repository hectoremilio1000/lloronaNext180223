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
              'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/mariscoplayacantinallorona1.jpg)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center p-4">
              Del mar a tu paladar
            </h2>
          </div>
        </div>
      </SwiperSlide>

      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
