// pages/bookpoint.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Bookpoint() {
  const router = useRouter();
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [regalo, setRegalo] = useState();

  useEffect(() => {
    const { nombre, regalo_seleccionado, codigoUnico } = router.query;
    setCodigo(codigoUnico);
    setRegalo(regalo_seleccionado);
    setNombre(nombre);
  }, [router.query]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[600px] py-20">
        <h1 className="text-4xl">
          Hola {nombre} Gracias por completar la encuesta. Te ganaste {regalo}
          <br />
          Canjea tu codigo:
          <p className="font-bold text-green-800 text-5xl">{codigo}</p>
        </h1>
        <p className="text-sm">
          Recuerda guardar este codigo para reclamar tu premio, de lo contrario
          no podras acceder a el
        </p>
      </div>
    </div>
  );
}
