import { useRouter } from "next/router";
import React, { useState } from "react";

const Regalos = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  // Agrega más campos según sea necesario

  const router = useRouter();
  const generarCodigoUnico = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber.toString();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const codigoUnico = generarCodigoUnico();
    const nuevoRegistro = { nombre, email, codigoUnico, status: "no canjeado" };
    try {
      const response = await fetch("/api/datos", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoRegistro),
      });

      if (response.ok) {
        const queryParams = new URLSearchParams({
          nombre,
          email,
          codigoUnico,
        });

        router.push(`/bookpoint?${queryParams.toString()}`);
      } else {
        console.error("Error al guardar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label className="block mb-2">Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300"
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Regalos;
