import Head from "next/head";
import NavBar from "../components/NavBarEs/NavBarEs";
import ModalAll from "../components/ModalAll";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import CalendarioTiktokTree from "../components/CalendarioTiktokTree";

function Roadopening() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Descubre la Experiencia del Mezcal en Cantina la Llorona en México 🥃"
        ></meta>
        <meta
          property="og:description"
          content="Sumérgete en el mundo del mezcal con nosotros. En Cantina la Llorona, ofrecemos una selección única de mezcales artesanales, cuidadosamente seleccionados para ofrecerte una experiencia auténtica. ¡Haz tu reserva y déjate llevar por los sabores de México! 🌵 #Mezcal #ExperienciaMexicana #Cantina"
        ></meta>
        <title>
          Mezcal artesanal y Cómodo lugar en México | Cantina la llorona
        </title>
      </Head>
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

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <div className="lg:w-1/4">
          <p className="w-full max-w-[1000px]  mx-auto text-justify sm:text-2xl text-xl text-black text-bold">
            Primer acto
          </p>
          <p className="w-full max-w-[1000px]  mx-auto text-justify sm:text-base text-sm text-black">
            Domingo 14 abril 2024. <br />
            5:00 PM A 9:00 PM
          </p>
        </div>
        <div className="lg:w-3/4">
          {" "}
          <p className="w-full max-w-[800px]  mx-auto text-justify sm:text-2xl text-xl text-black text-bold ml-4">
            Tenemos el gusto de invitarte a que degustes algunos de nuestros
            platillos que tendremos en nuestro nuevo menú. acompañados de Luis
            Bartender de Fifty mills y de la dj rasnyshh.
          </p>
        </div>
      </div>
      <>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:p-8">
          <div className="lg:w-1/3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/jorgedumit.jpg"
                alt="Sunset in the mountains"
                height="400"
              />{" "}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Jorge dumit</div>
                <p class="text-gray-700 text-base">chef</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/aguacatechicharronrobeye.jpg"
                alt="Sunset in the mountains"
              />{" "}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Jorge dumit</div>
                <p class="text-gray-700 text-base">chef</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src="https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/aguacatechicharronrobeye.jpg"
                alt="Sunset in the mountains"
              />{" "}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Jorge dumit</div>
                <p class="text-gray-700 text-base">chef</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <CalendarioTiktokTree />
        </div>
      </>
    </>
  );
}

export default Roadopening;
