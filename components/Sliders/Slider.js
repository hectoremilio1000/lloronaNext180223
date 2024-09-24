import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useAppContext } from "../context/Context";
const Slider = () => {
  const { espa } = useAppContext();
  return (
    <>
      {espa ? (
        <div className="w-full bg-black py-12">
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap ">
              <h1 className="animate-marqueeleft inline-block text-white text-[70px] md:text-[100px] font-bold">
                Nuestra CARTA
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold ">
                NUESTRA CARTA
              </h1>
            </div>
          </div>
          <div className="w-full max-w-[1184px] mx-auto px-[20px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                // cuando el ancho de la ventana es igual o mayor a 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // cuando el ancho de la ventana es igual o mayor a 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // cuando el ancho de la ventana es igual o mayor a 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-center object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/15septiembre/chileennogadamexicolloronacantina.jpg
                    "
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Chile en nogada
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    Premiado en diversos concursos{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-bottom object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/tostada%2Bcamaron%2Bcantina%2Bllorona%2Baguachile%2Bcdmx%2Broma%2Bcondesa.jpg
                    "
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Tostadas deliciosas
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    De Aguachile de camarón{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-bottom object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/barbacoa%2Bpican%CC%83a%2Bcantina%2Bllorona%2Bsabor%2Broma%2Bcondesa%2Bcdmx.jpg"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Barbacoa de picaña
                  </h1>
                  <p className="text-xs md:text-xl text-white">Tacos</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-left object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Son cubano
                  </h1>
                  <p className="text-xs md:text-xl text-white">en vivo</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/comida/amigastomandoCantinaLlorona.JPG"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Festeja con nosotros
                  </h1>
                  <p className="text-xs md:text-xl text-white">gran ambiente</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/festejo+cantina+llorona+salsa+baile.jpg"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Conoce amigos
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    mexicanos y extranjeros
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="w-full bg-black py-12">
          <div className="overflow-hidden bg-black">
            <div className="overflow-hidden bg-black">
              <div className="flex items-center gap-4 whitespace-nowrap ">
                <h1 className="animate-marqueeleft inline-block text-white text-[70px] md:text-[100px] font-bold">
                  Our Menu
                </h1>
                <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold ">
                  Our Menu
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1184px] mx-auto px-[20px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              scrollbar={{ draggable: true }}
              loop={true}
              breakpoints={{
                // cuando el ancho de la ventana es igual o mayor a 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // cuando el ancho de la ventana es igual o mayor a 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // cuando el ancho de la ventana es igual o mayor a 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/tostadaCantinera.jpg"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Tostada Cantinera
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    Our sourdough pizza
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologiaIncreible.jpg"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Tacos with heirloom corn
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    100% nixtamal, no preservatives
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-left object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/salsa/gruposcubanos1.png"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Live Cuban
                  </h1>
                  <p className="text-xs md:text-xl text-white">Son Band</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/lugarincreible%2Bcomida%2Bdeliciosa%2Bcantina.jpg"
                    alt=""
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Unique Mexican Cantina
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    Roma Condesa Mexico City
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <video
                    className="rounded-lg border-2 border-white w-full h-[300px] object-top object-cover object-center"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/llorona%2Bmariachi%2Bcantina.MP4"
                    autoPlay
                    loop
                    muted
                  />
                  <h1 className="text-2xl md:text-5xl text-white mt-3">
                    Meeting place for foreigners
                  </h1>
                  <p className="text-xs md:text-xl text-white">
                    Mexican food in Mexico City
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
