// pages/bookpoint.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Bookpoint() {
  const router = useRouter();
  const [codigo, setCodigo] = useState();

  useEffect(() => {
    const { nombre, email, codigoUnico } = router.query;

    // Aquí puedes procesar los parámetros si es necesario
    console.log(nombre, email, codigoUnico);
    setCodigo(codigoUnico);
  }, [router.query]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[1084px] py-20">
        <h1>
          Gracias por completar la encuesta. Te ganaste una cena romantica.
          Canjea tu codigo:
        </h1>
        <p className="font-bold text-green-800 text-5xl">{codigo}</p>
      </div>
    </div>
  );
}
