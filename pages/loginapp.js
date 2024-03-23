import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../utils/Modal";
// import MUIDataTable from "mui-datatables";
const Loginapp = () => {
  const [forms, setForms] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [questions, setQuestions] = useState([]);
  // preguntas state
  const [modalPreguntas, setModalPreguntas] = useState(false);
  const [listPreguntas, setListPreguntas] = useState([]);
  const buscar_formularios = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_formularios");

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      const response = await fetch(
        `https://api.lalloronacantina.com/controlador/UsuarioController.php`,
        requestOptions
      );
      if (!response.error) {
        const data = await response.json();
        console.log(data);

        if (data.mensaje === "no-data") {
          setForms([]);
        } else {
          if (data.error) {
            console.log(data.error);
          } else {
            setForms(data);
          }
        }
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Error al buscar el registro:", error);
    }
  };
  useEffect(() => {
    buscar_formularios();
  }, [0]);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const openModalPreguntas = () => {
    setModalPreguntas(true);
  };
  const closeModalPreguntas = () => {
    setModalPreguntas(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormName("");
    setQuestions([]);
  };

  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, name: "" }]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleQuestionChange = (id, newName) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, name: newName } : question
      )
    );
  };
  // formulario api llorona
  const crear_formulario = async (name, fecha_created) => {
    try {
      const formdata = new FormData();
      formdata.append("funcion", "crear_formulario");
      formdata.append("nombre", name);
      formdata.append("fecha_created", fecha_created);
      const response = await axios.post(
        "https://api.lalloronacantina.com/controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data; // Puedes manejar la respuesta según necesites
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const handleFormSubmit = async () => {
    // Aquí puedes guardar el formulario y las preguntas como desees, por ejemplo, en un estado global o enviarlo a un servidor
    console.log({ name: formName, questions });

    const fecha_created = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const form = await crear_formulario(formName, fecha_created);
    if (form[0].msg === "add-formulario") {
      closeModal();
      await buscar_formularios();
      toast.success("Se registro el formulario correctamente");
    } else {
      toast.errro("Ocurrio un error" + form[0].error);
    }
  };
  // eventos de preguntas
  const buscar_preguntas = async (id) => {
    try {
      const formdata = new FormData();
      formdata.append("funcion", "buscar_preguntas");
      formdata.append("id", id);
      const response = await axios.post(
        "https://api.lalloronacantina.com/controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data; // Puedes manejar la respuesta según necesites
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };
  const columns = ["nombre_pregunta"];
  const verPreguntas = async (id) => {
    const preguntas = await buscar_preguntas(id);
    console.log(preguntas);
    if (preguntas[0].data) {
      setListPreguntas(preguntas[0].data);
      setModalPreguntas(true);
    } else {
      setListPreguntas([]);
      console.log("no registers");
    }
  };

  return (
    <div className="container mx-auto py-[120px] px-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-4">Formularios</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={openModal}
      >
        Crear formulario
      </button>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Nombre</th>
            <th className="border border-gray-400 px-4 py-2">Fecha Creación</th>
            <th className="border border-gray-400 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form, index) => (
            <tr key={form.id}>
              <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-400 px-4 py-2">
                {form.nombre}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {dayjs(form.fecha_created).format(
                  "DD [de] MMMM [del] YYYY HH:mm:ss"
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => verPreguntas(form.id)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  preguntas
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Ver respuestas 0
                </button>
                {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Eliminar
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        onConfirm={handleFormSubmit}
        textConfirm={"Crear Formulario"}
        footer={false}
      >
        {" "}
        <div>
          <h2 className="text-xl font-bold mb-4">Crear Formulario</h2>
          <input
            type="text"
            placeholder="Nombre del formulario"
            className="border border-gray-400 rounded w-full px-3 py-2 mb-4"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <h2 className="text-xl font-bold mb-4">Preguntas</h2>
          {questions.map((question) => (
            <div key={question.id} className="mb-4">
              <input
                type="text"
                placeholder="Nombre de la pregunta"
                className="border border-gray-400 rounded w-full px-3 py-2 mb-2"
                value={question.name}
                onChange={(e) =>
                  handleQuestionChange(question.id, e.target.value)
                }
              />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => removeQuestion(question.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addQuestion}
          >
            Agregar Pregunta
          </button>
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
      </Modal>
      <Modal
        open={modalPreguntas}
        setOpen={setModalPreguntas}
        textConfirm={"Registrar Preguntas"}
        footer={false}
      >
        <h1 className="font-bold text-sm mb-6">Mis Preguntas</h1>
        {/* <MUIDataTable
          title={"Mis Preguntas"}
          data={listPreguntas}
          columns={columns}
          //   options={options}
        /> */}
      </Modal>
    </div>
  );
};

export default Loginapp;
