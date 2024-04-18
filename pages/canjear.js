import React, { useState } from "react";

const Canjear = () => {
  const [codigo, setCodigo] = useState("");
  const [respuestaCanje, setRespuestaCanje] = useState("");
  const [registroEncontrado, setRegistroEncontrado] = useState("");
  const searchCodigo = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_premio");
      formdata.append("codigo_unico", codigo);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
      const response = await fetch(
        `${ruta_static}controlador/UsuarioController.php`,
        requestOptions
      );
      if (!response.error) {
        const data = await response.json();
        console.log(data);

        if (data.mensaje === "no-data") {
          setRegistroEncontrado("no-register");
        } else {
          if (data.error) {
            console.log(data.error);
            setRegistroEncontrado("no-register");
          } else {
            setRegistroEncontrado(data);
          }
        }
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Error al buscar el registro:", error);
    }
  };
  const canjearCodigo = async () => {
    const id = registroEncontrado[0]?.id;
    console.log(id);
    try {
      var formdata = new FormData();
      formdata.append("funcion", "canjear_premio");
      formdata.append("id", id);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
      const response = await fetch(
        `${ruta_static}controlador/UsuarioController.php`,
        requestOptions
      );
      if (!response.error) {
        const data = await response.text();
        console.log(data);

        if (data === "canjeado") {
          setRespuestaCanje("Se canjeo tu codigo");
          setTimeout(() => {
            setRespuestaCanje("");
          }, 1000);
          searchCodigo();
        } else {
          setRespuestaCanje(
            "Ocurrio algo inesperado, no se pudo canjear tu codigo"
          );
          setTimeout(() => {
            setRespuestaCanje("");
          }, 1000);
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
            <p>Nombre: {registroEncontrado[0]?.nombre}</p>
            <p>Email: {registroEncontrado[0]?.email}</p>
            <p>Código Único: {registroEncontrado[0]?.codigo_unico}</p>
            <p>Status: {registroEncontrado[0]?.status}</p>
            {registroEncontrado[0]?.status === "NO CANJEADO" ? (
              <button
                onClick={canjearCodigo}
                className="px-4 py-3 bg-green-700 text-white"
              >
                Canjear
              </button>
            ) : null}

            <p>{respuestaCanje}</p>
          </div>
        ) : (
          <p>No se encontro el codigo</p>
        )}
      </div>
    </div>
  );
};

export default Canjear;
