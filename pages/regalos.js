import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../utils/Modal";

const Regalos = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState([]);
  const [formActive, setFormActive] = useState([]);
  // Agrega más campos según sea necesario
  const buscar_formulario_activo = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_formulario_activo");
      var ruta_static = "http://localhost/apillorona/";
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      const response = await fetch(
        ruta_static + `controlador/UsuarioController.php`,
        requestOptions
      );
      if (!response.error) {
        const data = await response.json();
        console.log(data);

        if (data.mensaje === "no-data") {
          setFormActive([]);
        } else {
          if (data.error) {
            console.log(data.error);
          } else {
            let formatedResponseData = data.map((pregunta) => ({
              ...pregunta,
              respuesta: "",
            }));
            setFormActive(formatedResponseData);
          }
        }
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Error al buscar el registro:", error);
    }
  };
  const handleChangeResponse = (e, id) => {
    const nuevasRespuestas = formActive.map((item) => {
      if (item.id === id) {
        return { ...item, respuesta: e.target.value };
      }
      return item;
    });
    setFormActive(nuevasRespuestas);
  };
  const handleChangeCalificacion = (id, calificacion) => {
    const nuevasRespuestas = formActive.map((item) => {
      if (item.id === id) {
        return { ...item, calificacion: calificacion };
      }
      return item;
    });
    setFormActive(nuevasRespuestas);
  };

  const registrar_respuestas = async (respuestas) => {
    try {
      console.log(respuestas);
      var formdata = new FormData();
      formdata.append("funcion", "registrar_respuestas");
      formdata.append("respuestas", JSON.stringify(respuestas));
      var ruta_static = "http://localhost/apillorona/";
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
    }
  };
  const handleSubmitRespuestas = async () => {
    const respuestasCompletas = formActive.every(
      (item) => item.respuesta.trim() !== "" && item?.calificacion
    );
    const nuevasRespuestas = formActive.map((item) => ({
      pregunta_id: item?.id,
      calificaicon: item?.calificacion,
      repsuesta: item?.respuesta,
    }));
    if (respuestasCompletas) {
      let registro = await registrar_respuestas(nuevasRespuestas);
      console.log(registro);
      // Aquí puedes enviar el formulario
      console.log("Formulario enviado");
    } else {
      toast.warning("Por favor llena todos los campos del formulario");
      console.log("Por favor completa todas las respuestas");
    }
  };
  useEffect(() => {
    buscar_formulario_activo();
  }, [0]);
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
  function validateInputs(nombre, email, celular) {
    // Expresiones regulares para validar el nombre, email y celular
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const celularRegex = /^[0-9+]+$/;

    // Validar el nombre
    if (!nombreRegex.test(nombre)) {
      alert(
        "Por favor ingresa un nombre válido sin caracteres especiales ni números."
      );
      return false;
    }

    // Validar el email
    if (!emailRegex.test(email)) {
      toast("No es un email valido");
      alert("Por favor ingresa un email válido.");
      return false;
    }

    // Validar el celular
    if (!celularRegex.test(celular)) {
      alert(
        "Por favor ingresa un número de celular válido (solo números y el símbolo +)."
      );
      return false;
    }

    // Si todas las validaciones pasan, retorna true
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar los inputs
    // if (validateInputs(nombre, email, celular)) {
    //   // Si la validación pasa, aquí puedes realizar acciones adicionales, como enviar los datos al servidor
    //   console.log(
    //     "Los datos son válidos. Puedes proceder con el envío del formulario."
    //   );
    // } else {
    const codigoUnico = generarCodigoUnico();
    const regalo_seleccionado = generarRegalo();
    const fecha_vigente = dayjs().add(15, "day").format("YYYY-MM-DD HH:mm:ss");
    console.log(fecha_vigente);
    var formdata = new FormData();
    formdata.append("funcion", "crear_premio");
    formdata.append("nombre", nombre);
    formdata.append("email", email);
    formdata.append("celular", celular);
    formdata.append("regalo", regalo_seleccionado);
    formdata.append("codigo_unico", codigoUnico);
    formdata.append("fecha_vigente", fecha_vigente);
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
    // }
  };
  return (
    <div className="bg-gray-100 w-full flex items-center justify-center py-[80px] px-4">
      <ToastContainer />
      {/* form de cliente para premio */}
      <div className="form_questions w-full max-w-[800px] mx-auto bg-white  py-12">
        <div className="bg-white sticky top-[0] px-8 py-4 shadow-lg">
          <h1 className="text-4xl text-center text-gray-900 sticky top-[20px]">
            {formActive.length > 0
              ? formActive[0].nombre_formulario
              : "cargando formulario"}
          </h1>
          <p className="text-xl text-center text-gray-900 sticky top-[80px]">
            Llena la encuesta y canjea tu codigo con nosotros
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 px-8 py-12">
          {formActive.map((question, index) => {
            return (
              <div className="group" key={index}>
                <label className="text-gray-900 font-bold block mb-2">
                  {question.nombre_pregunta}
                </label>
                {question.is_rating === "SI" ? (
                  <div className="my-6 w-full flex items-center gap-4 justify-center">
                    {Array.from({ length: question.max_rating }, (_, i) => (
                      <div
                        className={`cursor-pointer w-[40px] h-[40px] rounded-full bg-gray-200 font-bold text-center flex items-center justify-center text-xs ${
                          question.calificacion !== null &&
                          i < question.calificacion
                            ? "bg-green-500 text-white"
                            : ""
                        }`}
                        key={i + 1}
                        onClick={() =>
                          handleChangeCalificacion(question.id, i + 1)
                        }
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                ) : null}

                <textarea
                  key_id={question.id}
                  type="text"
                  placeholder="Ingresa tu respuesta aqui"
                  onChange={(e) => handleChangeResponse(e, question.id)}
                  className="w-full mb-4 p-2 border border-gray-300"
                />
                {question?.status === false ? (
                  <p style={{ color: "red" }}>Este campo es obligatorio</p>
                ) : null}
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={handleSubmitRespuestas}
          className="mt-8 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </div>
      {/* <Modal
        width={"800px"}
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        onConfirm={handleFormSubmit}
        textConfirm={"Crear Formulario"}
        footer={false}
      >
        <div>
          <h2 className="text-xl font-bold mb-4">Crear Formulario</h2>
          <input
            type="text"
            placeholder="Nombre del formulario"
            className="border border-gray-400 rounded w-full px-3 py-2 mb-4"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={handleFormSubmit}
          >
            Guardar
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </Modal> */}
      <form onSubmit={handleSubmit} className="w-full max-w-md hidden">
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
