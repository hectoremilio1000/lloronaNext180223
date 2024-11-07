import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = ({ BannerImages }) => {
  const handleClick = (type, value) => {
    switch (type) {
      case 'link_external':
        // Abre un enlace externo en una nueva pestaña
        window.open(value, '_blank');
        break;
      case 'phone_contact':
        // Realiza una llamada (solo en dispositivos que soportan llamadas)
        window.location.href = `tel:${value}`;
        break;
      case 'hash':
        // Redirige a una sección o almohadilla #
        window.location.href = `#${value}`;
        break;
      default:
        console.warn('Tipo no soportado');
    }
  };
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
                height: '80vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center p-4">
                  {img.title}
                </h2>
                {img.buttonAction.isActive ? (
                  <button
                    onClick={() =>
                      handleClick(img.buttonAction.type, img.buttonAction.valor)
                    }
                    className="bg-black px-4 py-4 rounded text-white bg-red-500"
                  >
                    {img.buttonAction.name}
                  </button>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
