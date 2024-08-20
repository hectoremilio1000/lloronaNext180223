import React from "react";
import { useAppContext } from "../context/Context";
import title from "../Main/title.module.css";
import Link from "next/link";

function Encontramos() {
  const { espa } = useAppContext();
  return (
    <div className="w-full bg-black py-[50px]">
      <div className="max-w-[1184px] mx-auto w-full px-[20px]">
        <div>
          <div>
            <h1 className="text-center text-white text-3xl md:text-4xl uppercase font-black">
              Experience Mexico in the Heart of Roma Condesa Mexico City
            </h1>
            <p className="text-white text-center text-lg md:text-xl mt-2">
              Discover the vibrant flavors of Mexico in our unique cantina,
              located in the trendy Roma Condesa district.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg md:text-xl text-center">
              Alvaro Obregón 308
            </h4>

            <div className="linea"></div>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
            className="px-2 py-2"
          >
            <iframe
              className="w-full md:w-[70%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9147905379655!2d-99.17210979010005!3d19.416087281784087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff471aa89e01%3A0x19ddea4c05056652!2sLa%20Llorona%20Cantina!5e0!3m2!1sen!2smx!4v1682974852347!5m2!1sen!2smx"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="py-3"
          >
            <Link href="/reserva">
              <button
                type="button"
                className="buttonComponente focus:outline-none text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                ¡Book Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Encontramos;
