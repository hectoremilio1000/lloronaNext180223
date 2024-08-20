import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { useAppContext } from "../context/Context";
import Head from "next/head";

function Calendario() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="reserva">
      <>
        <Head>
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
        </Head>
      </>

      <div className="w-full bg-black">
        <div className="w-full rounded bg-[#141414] max-w-[1184px] py-[80px] px-[20px] mx-auto">
          <h1 className="text2xl md:text-5xl font-bold text-center text-white">
            Book your date now!
          </h1>

          <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
        </div>
      </div>
    </div>
  );
}

export default Calendario;
