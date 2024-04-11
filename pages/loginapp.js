import axios from "axios";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../utils/Modal";
import MUIDataTable from "mui-datatables";
const Loginapp = () => {
  const [forms, setForms] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formActiveId, setFormActiveId] = useState(null);
  const [questions, setQuestions] = useState([]);
  // preguntas state
  const [modalPreguntas, setModalPreguntas] = useState(false);
  const [listPreguntas, setListPreguntas] = useState([]);
  const buscar_formularios = async () => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "buscar_formularios");
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
  const update_formularios = async (id, nombre, status) => {
    try {
      var formdata = new FormData();
      formdata.append("funcion", "update_formularios");
      formdata.append("id", id);
      formdata.append("nombre", nombre);
      formdata.append("status", status);
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

  const toggleStatus = async (id, status, nombre) => {
    let formActivo = forms.filter((f) => f.status === "ACTIVADO");
    if (status === "DESACTIVADO") {
      const newFormularios = forms.map((form) => {
        if (form.id === id) {
          return { ...form, status: "ACTIVADO" };
        } else {
          return { ...form, status: "DESACTIVADO" };
        }
      });
      let formulario = await update_formularios(id, nombre, "ACTIVADO");
      if (formulario[0].msg === "update-formulario") {
        toast.success("Se actualizo el estado del formulario");
      } else {
        toast.errro("Ocurrio un error" + pregunta[0].error);
      }
      if (formActivo.length > 0) {
        let formulario = await update_formularios(
          formActivo[0].id,
          nombre,
          "DESACTIVADO"
        );
      }
      setForms(newFormularios);
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

  const addQuestion = async () => {
    try {
      var indice = 0;
      var ruta_static = "http://localhost/apillorona/";
      const formdata = new FormData();
      const fecha_created = dayjs().format("YYYY-MM-DD HH:mm:ss");
      formdata.append("funcion", "crear_pregunta");
      formdata.append("id_form", formActiveId);
      formdata.append("fecha_created", fecha_created);
      formdata.append("indice", indice);
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      let pregunta = response.data;
      if (pregunta[0].msg === "add-question") {
        toast.success("Se registro la pregunta correctamente");
        setQuestions([
          ...questions,
          {
            id: pregunta[0].question_id,
            name: "",
            is_rating: "NO",
            max_rating: 10,
            indice: indice,
          },
        ]);
      } else {
        toast.errro("Ocurrio un error" + pregunta[0].error);
      }
    } catch (error) {
      console.error("Error al crear la preguntas:", error);
    }
  };

  const removeQuestion = async (id) => {
    try {
      console.log(id);
      let confirmado = confirm("Estas seguro de eliminar esta pregunta");
      if (confirmado) {
        var ruta_static = "http://localhost/apillorona/";
        const formdata = new FormData();
        const fecha_created = dayjs().format("YYYY-MM-DD HH:mm:ss");
        formdata.append("funcion", "eliminar_pregunta");
        formdata.append("id", id);
        const response = await axios.post(
          ruta_static + "controlador/UsuarioController.php",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
        let pregunta = response.data;
        if (pregunta[0].msg === "delete-question") {
          toast.success("Se elimino la pregunta");
          setQuestions(questions.filter((question) => question.id !== id));
        } else {
          toast.errro("Ocurrio un error" + pregunta[0].error);
        }
      }
    } catch (error) {
      console.error("Error al eliminar la pregunta:", error);
    }
  };

  const handleCheckboxChange = (id, isChecked) => {
    let newData = questions.map((question) =>
      question.id === id
        ? { ...question, is_rating: isChecked ? "SI" : "NO" }
        : question
    );
    setQuestions(newData);
    if (JSON.stringify(questions) !== JSON.stringify(newData)) {
      updateQuestion(
        id,
        newData.find((q) => q.id === id)
      );
    }
  };
  const handleMaxRatingChange = (id, max) => {
    console.log(max);
    let newData = questions.map((question) =>
      question.id === id ? { ...question, max_rating: max } : question
    );
    setQuestions(newData);
    if (JSON.stringify(questions) !== JSON.stringify(newData)) {
      updateQuestion(
        id,
        newData.find((q) => q.id === id)
      );
    }
  };

  const handleQuestionChange = (id, newName) => {
    let newData = questions.map((question) =>
      question.id === id ? { ...question, nombre_pregunta: newName } : question
    );
    setQuestions(newData);
    if (JSON.stringify(questions) !== JSON.stringify(newData)) {
      updateQuestion(
        id,
        newData.find((q) => q.id === id)
      );
    }
  };
  const updateQuestion = async (id, newData) => {
    try {
      // Llamar a una función para enviar la petición a PHP
      var ruta_static = "http://localhost/apillorona/";
      const formdata = new FormData();
      formdata.append("funcion", "update_pregunta");
      formdata.append("id_question", id);
      formdata.append("data", JSON.stringify(newData));
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      let pregunta = response.data;
      if (pregunta[0].msg === "update-question") {
        toast.success("Se actualizo la pregunta");
      } else {
        toast.errro("Ocurrio un error" + pregunta[0].error);
      }
    } catch (error) {
      console.error("Error al actualizar la pregunta:", error);
    }
  };
  // formulario api llorona
  const crear_formulario = async (name, fecha_created) => {
    try {
      var ruta_static = "http://localhost/apillorona/";
      const formdata = new FormData();
      formdata.append("funcion", "crear_formulario");
      formdata.append("nombre", name);
      formdata.append("fecha_created", fecha_created);
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
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
      var ruta_static = "http://localhost/apillorona/";
      const formdata = new FormData();
      formdata.append("funcion", "buscar_preguntas");
      formdata.append("id", id);
      const response = await axios.post(
        ruta_static + "controlador/UsuarioController.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      return response.data; // Puedes manejar la respuesta según necesites
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };
  const columns = ["nombre_pregunta", "acciones"];
  const verPreguntas = async (id) => {
    setFormActiveId(id);
    const preguntas = await buscar_preguntas(id);
    console.log(preguntas);
    setQuestions(preguntas[0].data);
    setModalPreguntas(true);
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
            <th className="border border-gray-400 px-4 py-2">status</th>
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
                  onClick={() =>
                    toggleStatus(form.id, form.status, form.nombre)
                  }
                  className={`rounded text-sm font-bold px-3 py-2 ${
                    form.status === "ACTIVADO"
                      ? "bg-blue-800 text-white"
                      : "bg-gray-200 text-gray-900"
                  } `}
                >
                  {form.status}
                </button>
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
      </Modal>
      <Modal
        width={"800px"}
        open={modalPreguntas}
        setOpen={setModalPreguntas}
        textConfirm={"Registrar Preguntas"}
        footer={false}
      >
        <div className="px-8">
          <h1 className="font-bold text-xl mb-6">Mis Preguntas</h1>
          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto">
            {questions.length > 0 &&
              questions.map((question) => (
                <div
                  key={question.id}
                  className="border border-gray-200 rounded p-4 flex items-start gap-3"
                >
                  <div className="w-full">
                    <label
                      htmlFor="nombre pregunta"
                      className="font-bold text-sm text-gray-900"
                    >
                      Nombre Pregunta
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre de la pregunta"
                      className="border border-gray-400 rounded text-sm w-full px-3 py-2 mb-2"
                      defaultValue={question.nombre_pregunta}
                      // onChange={(e) =>
                      //   handleQuestionChange(question.id, e.target.value)
                      // }
                      onBlur={(e) =>
                        handleQuestionChange(question.id, e.target.value)
                      }
                    />
                    <div className="flex items-center mb-4">
                      <input
                        onChange={(e) =>
                          handleCheckboxChange(question.id, e.target.checked)
                        }
                        id="default-checkbox"
                        type="checkbox"
                        defaultValue={question.is_rating}
                        defaultChecked={
                          question.is_rating === "SI" ? true : false
                        }
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900"
                      >
                        ¿Tiene Calificacion?
                      </label>
                    </div>
                    <div
                      className={
                        question.is_rating === "SI" ? "flex w-full" : "hidden"
                      }
                    >
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="w-full flex items-center gap-4">
                          <div className="font-bold text-sm">Max</div>
                          <div className="w-full">
                            <input
                              className="px-3 py-2 rounded bg-gray-200 text-sm"
                              type="number"
                              min={1}
                              onBlur={(e) =>
                                handleMaxRatingChange(
                                  question.id,
                                  e.target.value
                                )
                              }
                              defaultValue={question?.max_rating}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 max-h-max hover:bg-red-700 text-white inline-block font-bold py-1 px-2 rounded"
                    onClick={() => removeQuestion(question.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            <button
              onClick={addQuestion}
              className="px-3 py-2 inline-block bg-blue-700 text-white rounded"
            >
              + Crear Pregunta
            </button>
          </div>
        </div>
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
