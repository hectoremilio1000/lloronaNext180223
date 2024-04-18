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
  const [premios, setPremios] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Agrega más campos según sea necesario
  const buscar_premios = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_premios");
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
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
          setPremios([]);
        } else {
          if (data.error) {
            console.log(data.error);
          } else {
            setPremios(data);
          }
        }
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Error al buscar el registro:", error);
    }
  };
  const buscar_formulario_activo = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_formulario_activo");
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
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

  const registrar_con_cliente = async () => {
    try {
      if (nombre !== "" && celular !== "" && email !== "") {
        var formdata = new FormData();
        formdata.append("funcion", "registrar_cliente");
        formdata.append("nombre", nombre);
        formdata.append("email", email);
        formdata.append("celular", celular);
        // var ruta_static = "http://localhost/apillorona/";

        var ruta_static = "https://api.lalloronacantina.com/";
        const response = await axios.post(
          ruta_static + "controlador/UsuarioController.php",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        let data = response.data;
        console.log(response.data);
        if (data[0].msg === "add-cliente") {
          const respuestasSend = await registrar_respuestas(
            formActive,
            data[0].cliente_id
          );
          if (respuestasSend[0].msg === "add-respuestas") {
            await generar_premio(data[0].cliente_id);

            toast.success("Se registraron las respuestas, revisa tu email");
            setFormActive([]);
            setNombre("");
            setCelular("");
            setEmail("");
            setModalIsOpen(false);
          } else {
            toast.error("Ocurrio un error intentalo mas tarde");
          }
        } else {
          toast.error(
            "ocurrio un error y no se pudo registrar tus datos personales"
          );
        }
      } else {
        toast.warning("Los campos de tus datos deben estar llenos");
      }
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
    }
  };
  const registrar_sin_cliente = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "registrar_cliente");
      formdata.append("nombre", "DEFECTO");
      formdata.append("email", "");
      formdata.append("celular", "");
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      let data = response.data;
      console.log(response.data);
      if (data[0].msg === "add-cliente") {
        const respuestasSend = await registrar_respuestas(
          formActive,
          data[0].cliente_id
        );
        if (respuestasSend[0].msg === "add-respuestas") {
          toast.success("Se registraron las respuestas, revisa tu email");
          setFormActive([]);
          setNombre("");
          setCelular("");
          setEmail("");
          setModalIsOpen(false);
        } else {
          toast.error("Ocurrio un error intentalo mas tarde");
        }
      } else {
        toast.error(
          "ocurrio un error y no se pudo registrar tus datos personales"
        );
      }
    } catch (error) {
      console.error("Error al actualizar el registro:", error);
    }
  };
  const registrar_cliente = async () => {
    try {
      console.log(respuestas);
      var formdata = new FormData();
      formdata.append("funcion", "registrar_cliente");
      formdata.append("id_cliente", id_cliente);
      formdata.append("respuestas", JSON.stringify(respuestas));
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
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
  const registrar_respuestas = async (respuestas, id_cliente) => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "registrar_respuestas");
      formdata.append("id_cliente", id_cliente);
      formdata.append("respuestas", JSON.stringify(respuestas));
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
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
    // const nuevasRespuestas = formActive.map((item) => ({
    //   pregunta_id: item?.id,
    //   calificaicon: item?.calificacion,
    //   repsuesta: item?.respuesta,
    // }));
    if (respuestasCompletas) {
      setModalIsOpen(true);
      // let registro = await registrar_respuestas(nuevasRespuestas);
      // console.log(registro);
    } else {
      toast.warning("Por favor llena todos los campos del formulario");
    }
  };
  useEffect(() => {
    buscar_formulario_activo();
    buscar_premios();
  }, [0]);
  const router = useRouter();
  const generarCodigoUnico = () => {
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    return randomNumber.toString();
  };
  const generarRegalo = () => {
    const numeroAleatorio = Math.floor(Math.random() * premios.length) + 1;
    // Asociar cada premio con el número aleatorio
    const premioEncontrado = premios[numeroAleatorio - 1];
    return premioEncontrado;
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
  const enviar_email = async (nombre, email, premio, codigoUnico) => {
    try {
      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
      const response = await axios.post(ruta_static + "sendemail.php", {
        nombre,
        email,
        premio,
        codigo_unico: codigoUnico,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error al enviar el email:", error);
    }
  };
  const generar_premio = async (id_cliente) => {
    try {
      const codigoUnico = generarCodigoUnico();
      const regalo_seleccionado = generarRegalo();
      console.log(regalo_seleccionado);
      const fecha_creacion = dayjs().format("YYYY-MM-DD HH:mm:ss");
      const fecha_vigente = dayjs()
        .add(15, "day")
        .format("YYYY-MM-DD HH:mm:ss");
      console.log(fecha_vigente);
      var formdata = new FormData();
      formdata.append("funcion", "crear_premio");
      formdata.append("cliente_id", id_cliente);
      formdata.append("premio_id", regalo_seleccionado.id);
      formdata.append("codigo_unico", codigoUnico);
      formdata.append("fecha_creacion", fecha_creacion);
      formdata.append("fecha_vigente", fecha_vigente);

      // var ruta_static = "http://localhost/apillorona/";

      var ruta_static = "https://api.lalloronacantina.com/";
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = response.data;
      console.log(data);
      if (data === "add-premio") {
        const emailSend = await enviar_email(
          nombre,
          email,
          regalo_seleccionado.regalo,
          codigoUnico
        );
        if (emailSend === "add-email") {
          toast.success(
            "Se ha registrado tus respuestas, revisa tu correo electronico"
          );
        } else {
          toast.error("No se envio el email por SMTP");
        }
        const queryParams = new URLSearchParams({
          nombre,
          regalo_seleccionado: regalo_seleccionado.regalo,
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
      <Modal
        width={"800px"}
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        textConfirm={"Enviar"}
        footer={false}
      >
        {" "}
        <h1 className="text-4xl">
          Hola Gracias por completar la encuesta.
          <br />
        </h1>
        <div className="w-full">
          <label className="text-gray-900 block mb-2">Nombre:</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre aqui"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300"
          />

          <label className="text-gray-900 block mb-2">Email:</label>
          <input
            type="email"
            placeholder="Ingresa tu @correo aqui"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300"
          />
          <label className="text-gray-900 block mb-2">
            Whatsapp o celular:
          </label>
          <input
            type="text"
            placeholder="Ingresa tu +52 celular aqui"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300"
          />
          <div className="flex">
            <button
              type="button"
              onClick={registrar_con_cliente}
              className="mt-8 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={registrar_sin_cliente}
              className="mt-8 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Solo enviar respuestas
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Regalos;
