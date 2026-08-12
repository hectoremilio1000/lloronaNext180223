import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
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
            backgroundImage: 'url(/img/ambiente/mesa-tacos-domino.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
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
            backgroundImage: "url('images/PICANIA1.jpg')",
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {' '}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/carne/arrachera-coctel.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {' '}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage:
              'url(/img/comida/ensalada-espinaca-mandarina.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {' '}
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
              'url(/img/cumple/carrito-dulces-cumpleanera.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {' '}
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
              'url(/img/platos/plato-fuerte-guacamole-martini-mazapan.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {' '}
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
            backgroundImage: 'url(/img/ambiente/mesa-tacos-domino.webp)',
            height: '80vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {' '}
        </div>
      </SwiperSlide>

      {/* Agrega más SwiperSlide según sea necesario */}
    </Swiper>
  );
};

export default MySwiper;
