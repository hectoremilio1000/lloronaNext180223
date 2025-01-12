import React, { useState, useEffect } from 'react';

const AdminExamenes = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [filtros, setFiltros] = useState({
    tipoExamen: '',
    nombreExamen: '',
    version: '',
  });
  const [opciones, setOpciones] = useState({
    tipos: [],
    nombres: [],
    versiones: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20; // Número de filas por página
  const [showWeights, setShowWeights] = useState(true); // Mostrar/ocultar columnas de pesos

  // Datos paginados
  const paginatedData = preguntas.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const fetchData = async () => {
    try {
      const query = new URLSearchParams(filtros).toString();
      const response = await fetch(`/api/preguntas/cambiarPreguntas?${query}`);
      if (!response.ok) throw new Error('Error al obtener datos.');
      const data = await response.json();
      setOpciones(data.filtros);
      setPreguntas(data.preguntas);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const handleEdit = (id, field, value) => {
    setPreguntas((prev) =>
      prev.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, [field]: value } : pregunta
      )
    );
  };

  const saveChanges = async (pregunta) => {
    try {
      const { id, examen_id, ...editableFields } = pregunta; // Enviar solo campos editables
      const response = await fetch(`/api/preguntas/editarPregunta`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...editableFields }),
      });
      if (!response.ok) throw new Error('Error al guardar cambios.');
      alert('Cambios guardados correctamente');
    } catch (error) {
      console.error('Error al guardar cambios:', error);
      alert('Error al guardar cambios.');
    }
  };

  useEffect(() => {
    fetchData();
  }, [filtros]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Administrar Preguntas
      </h1>

      {/* Filtros */}
      <div className="mb-4 grid grid-cols-3 gap-4">
        <select
          value={filtros.tipoExamen}
          onChange={(e) =>
            setFiltros({ ...filtros, tipoExamen: e.target.value })
          }
          className="border px-4 py-2"
        >
          <option value="">Todos los Tipos</option>
          {opciones.tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
        <select
          value={filtros.nombreExamen}
          onChange={(e) =>
            setFiltros({ ...filtros, nombreExamen: e.target.value })
          }
          className="border px-4 py-2"
        >
          <option value="">Todos los Nombres</option>
          {opciones.nombres.map((nombre) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
        <select
          value={filtros.version}
          onChange={(e) => setFiltros({ ...filtros, version: e.target.value })}
          className="border px-4 py-2"
        >
          <option value="">Todas las Versiones</option>
          {opciones.versiones.map((version) => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
        </select>
      </div>

      {/* Botón para mostrar/ocultar pesos */}
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setShowWeights(!showWeights)}
          className="bg-gray-300 px-4 py-2 rounded shadow-md"
        >
          {showWeights ? 'Ocultar Pesos' : 'Mostrar Pesos'}
        </button>
      </div>

      {/* Tabla con scroll horizontal */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 text-xs">
          <thead>
            <tr className="bg-gray-100">
              <th className="border text-xs">ID</th>
              <th className="border text-xs">E_ID</th>
              <th className="border">Preg.</th>
              <th className="border">A</th>
              <th className="border">B</th>
              <th className="border">C</th>
              <th className="border">D</th>
              <th className="border">E</th>
              {showWeights && (
                <>
                  <th className="border">P.A</th>
                  <th className="border">P.B</th>
                  <th className="border">P.C</th>
                  <th className="border">P.D</th>
                  <th className="border">P.E</th>
                </>
              )}
              <th className="border">R.C.</th>
              <th className="border text-xs">Acción</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((pregunta) => (
              <tr key={pregunta.id} className="hover:bg-gray-50">
                <td className="border peso text-center">{pregunta.id}</td>
                <td className="border peso text-center">
                  {pregunta.examen_id}
                </td>
                <td className="border preguntaExamen">
                  <input
                    type="text"
                    value={pregunta.texto}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'texto', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                <td className="border peso">
                  <input
                    type="text"
                    value={pregunta.a}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'a', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    value={pregunta.b}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'b', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                <td className="border ">
                  <input
                    type="text"
                    value={pregunta.c}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'c', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    value={pregunta.d}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'd', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    value={pregunta.e}
                    onChange={(e) =>
                      handleEdit(pregunta.id, 'e', e.target.value)
                    }
                    className="border preguntaExamen"
                  />
                </td>
                {showWeights && (
                  <>
                    <td className="border peso">
                      <input
                        type="number"
                        value={pregunta.peso_a}
                        onChange={(e) =>
                          handleEdit(pregunta.id, 'peso_a', e.target.value)
                        }
                        className="border peso"
                      />
                    </td>
                    <td className="border peso">
                      <input
                        type="number"
                        value={pregunta.peso_b}
                        onChange={(e) =>
                          handleEdit(pregunta.id, 'peso_b', e.target.value)
                        }
                        className="border peso"
                      />
                    </td>
                    <td className="border peso">
                      <input
                        type="number"
                        value={pregunta.peso_c}
                        onChange={(e) =>
                          handleEdit(pregunta.id, 'peso_c', e.target.value)
                        }
                        className="border peso"
                      />
                    </td>
                    <td className="border peso">
                      <input
                        type="number"
                        value={pregunta.peso_d}
                        onChange={(e) =>
                          handleEdit(pregunta.id, 'peso_d', e.target.value)
                        }
                        className="border peso"
                      />
                    </td>
                    <td className="border peso">
                      <input
                        type="number"
                        value={pregunta.peso_e}
                        onChange={(e) =>
                          handleEdit(pregunta.id, 'peso_e', e.target.value)
                        }
                        className="border peso"
                      />
                    </td>
                  </>
                )}
                <td className="border peso">
                  <input
                    type="text"
                    value={pregunta.respuesta_correcta}
                    onChange={(e) =>
                      handleEdit(
                        pregunta.id,
                        'respuesta_correcta',
                        e.target.value
                      )
                    }
                    className="border w-10"
                  />
                </td>
                <td className="border">
                  <button
                    onClick={() => saveChanges(pregunta)}
                    className="bg-blue-500 text-white px-1 py-1 rounded text-sm"
                  >
                    Guardar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 px-4 py-2 mx-1 rounded shadow-md"
        >
          Anterior
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(preguntas.length / rowsPerPage))
            )
          }
          disabled={currentPage * rowsPerPage >= preguntas.length}
          className="bg-gray-300 px-4 py-2 mx-1 rounded shadow-md"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AdminExamenes;
