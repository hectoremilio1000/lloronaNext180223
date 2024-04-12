import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";
import ModalAll from "../components/ModalAll";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import CalendarioTiktokTree from "../components/CalendarioTiktokTree";
import { useAppContext } from "../components/context/Context";

function RoadopeningGoogleAds() {
  const [open, setOpen] = useState(false);
  const { espa } = useAppContext();
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Experiencia culinaria en cdmx 🥃"
        ></meta>
        <meta
          property="og:description"
          content="Disfruta de una experiencia culinaria en cdmx"
        ></meta>
        <title>
          Mezcal artesanal y Cómodo lugar en México | Cantina la llorona
        </title>
      </Head>
      {espa ? (
        <>
          <NavBar />
          <div className="pb-4">
            <div
              className="d-flex subContenedor1Banner"
              style={{
                backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/aguacatechicharronrobeye.jpg")`,
                backgroundSize: "cover",
                height: "80vh",
                backgroundPosition: "right center",
                position: "relative",
              }}
            ></div>
          </div>
          <div className="container-llorona">
            <div>
              <h4 className="text-3xl text-center font-bold uppercase">
                ROAD TO OPENING
              </h4>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:p-8">
            <div className="lg:w-1/4">
              <p className="w-full max-w-[1000px] mx-auto text-center md:text-justify sm:text-2xl text-lg text-black font-bold">
                Primer acto
              </p>
              <p className="w-full max-w-[1000px]  mx-auto text-center md:text-justify sm:text-base text-sm text-black">
                Domingo 14 abril 2024. <br />
                5:00 PM A 9:00 PM
              </p>
            </div>
            <div className="lg:w-3/4">
              {" "}
              <p className="w-full max-w-[800px]  mx-auto text-justify sm:text-2xl text-xl text-black text-bold ml-4 sm:text-lg text-sm">
                Tenemos el gusto de invitarte a que degustes platillos que el
                chef Jorge Dumit ha seleccionado para ti de nuestro nuevo menú,
                acompañados de nuestro bartender invitado y de dj rasnyshh.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:p-8 mt-4">
            <div className="lg:w-1/2 flex justify-center">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-64 h-64 object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/jorgedumit.jpg"
                  alt="Sunset in the mountains"
                />{" "}
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Jorge dumit</div>
                  <p class="text-gray-700 text-base">chef</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center sm:pt-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-64 h-64 object-cover"
                  src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/Screenshot+2024-04-11+at+20.20.30.png"
                  alt="Sunset in the mountains"
                />{" "}
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">rasnyshhdj</div>
                  <p class="text-gray-700 text-base">dj</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <NavBar />
          <div className="pb-4">
            <div
              className="d-flex subContenedor1Banner"
              style={{
                backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/aguacatechicharronrobeye.jpg")`,
                backgroundSize: "cover",
                height: "80vh",
                backgroundPosition: "right center",
                position: "relative",
              }}
            ></div>
          </div>
          <div className="container-llorona">
            <div>
              <h4 className="text-3xl text-center font-bold uppercase">
                ROAD TO OPENING
              </h4>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:p-8">
            <div className="md:w-1/4">
              <p className="w-full max-w-[1000px] mx-auto text-center md:text-justify text-base md:text-lg text-black font-bold">
                First Act
              </p>
              <p className="w-full max-w-[1000px]  mx-auto text-center md:text-justify text-base md:text-lg text-black">
                Sunday 14 abril 2024. <br />
                5:00 PM A 9:00 PM
              </p>
            </div>
            <div className="md:w-3/4">
              {" "}
              <p className="w-full max-w-[800px]  mx-auto text-justify sm:text-2xl text-xl text-black text-bold sm:pl-4 sm:text-lg text-sm pt-2 px-2">
                We are pleased to invite you to taste dishes that the chef Jorge
                Dumit have selected for you from our new menu, accompanied by
                our guest bartender and DJ rasnyshh.
              </p>
            </div>
          </div>
          <>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:p-8 mt-4 pb-2">
              <div className="lg:w-1/2 flex justify-center pt-2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-64 h-64 object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/jorgedumit.jpg"
                    alt="Sunset in the mountains"
                  />{" "}
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Jorge dumit</div>
                    <p class="text-gray-700 text-base">chef</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center pt-2">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    className="w-64 h-64 object-cover"
                    src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/Screenshot+2024-04-11+at+20.20.30.png"
                    alt="Sunset in the mountains"
                  />{" "}
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">rasnyshhdj</div>
                    <p class="text-gray-700 text-base">dj</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}

      {espa ? (
        <div className="w-full bg-white">
          <div className="w-full rounded bg-gray-200 max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text2xl md:text-5xl font-bold text-center text-gray-900">
              Reserva ya y pide un postre especial del chef
            </h1>

            <InlineWidget url="https://calendly.com/reservaciones-14/googleads-roadopening-14-04-24" />
          </div>
        </div>
      ) : (
        <div className="w-full bg-white">
          <div className="w-full rounded bg-gray-200 max-w-[1184px] py-[80px] px-[20px] mx-auto">
            <h1 className="text2xl md:text-5xl font-bold text-center text-gray-900">
              book now for a special dessert by the chef
            </h1>

            <InlineWidget url="https://calendly.com/reservaciones-14/googleads-roadopening-14-04-24" />
          </div>
        </div>
      )}
    </>
  );
}

export default RoadopeningGoogleAds;
