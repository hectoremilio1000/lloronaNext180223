import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = ({ title, imageURL }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // scrollbar={{ draggable: false }}
      loop={true}
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${imageURL})`,
            height: '90vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            position: 'relative',
          }}
        >
          {/* Overlay para oscurecer la imagen */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece con un overlay semitransparente
              zIndex: 1,
            }}
          ></div>

          {/* Título centrado */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2, // Asegura que esté sobre el overlay
              textAlign: 'center',
            }}
          >
            <h2 className="text-white text-xl md:text-4xl font-bold uppercase">
              {title}
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
