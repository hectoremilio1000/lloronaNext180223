import { useRouter } from "next/router";
import React, { useState } from "react";

const Regalos = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState([]);
  // Agrega más campos según sea necesario

  const router = useRouter();
  const generarCodigoUnico = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber.toString();
  };
  const generarRegalo = () => {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    // Asociar cada premio con el número aleatorio
    let premio = "";
    switch (numeroAleatorio) {
      case 1:
        premio = "2x1 en cocteles";
        break;
      case 2:
        premio = "Piñata estilo llorona";
        break;
      case 3:
        premio = "Barril de cerveza";
        break;
    }
    return premio;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const codigoUnico = generarCodigoUnico();
    const regalo_seleccionado = generarRegalo();
    var formdata = new FormData();
    formdata.append("funcion", "crear_premio");
    formdata.append("nombre", nombre);
    formdata.append("email", email);
    formdata.append("celular", celular);
    formdata.append("regalo", regalo_seleccionado);
    formdata.append("codigo_unico", codigoUnico);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://api.lalloronacantina.com/controlador/UsuarioController.php",
        requestOptions
      );
      const data = await response.text();
      console.log(data);

      if (data === "add-premio") {
        const queryParams = new URLSearchParams({
          nombre,
          regalo_seleccionado,
          codigoUnico,
        });

        router.push(`/bookpoint?${queryParams.toString()}`);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black z-[10000] fixed top-0 left-0 w-full flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h1 className="text-4xl text-white">
          Llena la encuesta y canjea tu codigo con nosotros
        </h1>
        <label className="text-white block mb-2">Nombre:</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre aqui"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300"
        />

        <label className="text-white block mb-2">Email:</label>
        <input
          type="email"
          placeholder="Ingresa tu @correo aqui"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300"
        />
        <label className="text-white block mb-2">Whatsapp o celular:</label>
        <input
          type="text"
          placeholder="Ingresa tu +52 celular aqui"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
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
