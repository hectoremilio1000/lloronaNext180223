import React, { useState } from "react";

const Canjear = () => {
  const [codigo, setCodigo] = useState("");

  const [registroEncontrado, setRegistroEncontrado] = useState("");
  const searchCodigo = async () => {
    try {
      const response = await fetch(
        `https://apilloronaregalos.vercel.app/api/datos/${codigo}`
      );
      if (!response.error) {
        const data = await response.json();
        console.log(data);
        if (!data.msg) {
          setRegistroEncontrado(data);
        } else {
          setRegistroEncontrado("no-register");
          console.log(data.msg);
        }
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Error al buscar el registro:", error);
    }
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-full max-w-[600px] shadow-md py-8 px-6">
        <label htmlFor="codigo">Ingresa el codigo de canjeo</label>
        <input
          className="w-full border-2 border-gray-400 px-3 py- roudned"
          onChange={(e) => setCodigo(e.target.value)}
          value={codigo}
          onBlur={searchCodigo}
          type="text"
        />
        {registroEncontrado !== "no-register" && registroEncontrado !== "" ? (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Registro Encontrado:</h2>
            <p>Nombre: {registroEncontrado?.nombre}</p>
            <p>Email: {registroEncontrado?.email}</p>
            <p>Código Único: {registroEncontrado?.codigoUnico}</p>
            <p>Status: {registroEncontrado?.status}</p>
          </div>
        ) : (
          <p>No se encontro el codigo</p>
        )}
      </div>
    </div>
  );
};

export default Canjear;
