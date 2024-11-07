import React, { useState } from 'react';
import { useAppContext } from '../context/Context';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = () => {
  const [current, setCurrent] = useState('');
  const [navbar, setNavbar] = useState(false);

  const { espa, ingles, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  return (
    <>
      {espa ? (
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
                  'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/festejo+cantina+llorona+salsa+baile.jpg)',
                height: '80vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center p-4">
                  Festeja un cumpleaños Inolvidable
                </h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Agrega más SwiperSlide según sea necesario */}
        </Swiper>
      ) : (
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
                  'url(https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/festejo+cantina+llorona+salsa+baile.jpg)',
                height: '80vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center left',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center p-4">
                  Celebrate an Unforgettable Birthday in Mexico City
                </h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Agrega más SwiperSlide según sea necesario */}
        </Swiper>
      )}
    </>
  );
};

export default MySwiper;
