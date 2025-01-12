import React, { useState, useEffect } from 'react';

const CandidatoIdealModificar = () => {
  const [resultados, setResultados] = useState([]); // Almacenar todos los candidatos
  const [loading, setLoading] = useState(true);

  // Cargar los datos iniciales desde la API
  const fetchResultados = async () => {
    try {
      const response = await fetch('/api/candidatoIdeal/getCandidatoIdeal');
      if (!response.ok) {
        throw new Error(`Error en la API: ${response.statusText}`);
      }
      const data = await response.json();

      // Validar si data es un arreglo
      if (Array.isArray(data)) {
        setResultados(data);
      } else {
        console.error('La API no devolvió un arreglo. Revisar backend.');
        setResultados([]);
      }
    } catch (error) {
      console.error('Error al cargar resultados:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambios en los campos editables
  const handleInputChange = async (e, index, field) => {
    const value = e.target.value;
    const updatedResultados = [...resultados];
    updatedResultados[index][field] = value; // Actualizar el valor localmente
    setResultados(updatedResultados);

    if (e.key === 'Enter') {
      try {
        const response = await fetch(
          '/api/candidatoIdeal/updateCandidatoIdeal',
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedResultados[index]),
          }
        );

        if (!response.ok) {
          throw new Error('Error al actualizar candidato ideal');
        }
        console.log('Candidato actualizado correctamente');
      } catch (error) {
        console.error('Error al guardar cambios:', error.message);
      }
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchResultados();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando resultados...</p>;
  }

  if (!resultados.length) {
    return <p className="text-center text-gray-500">No hay resultados.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Editar Puntajes de Candidatos Ideales
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Puesto</th>
            {[
              'Bondad',
              'Optimismo',
              'Ética',
              'Curiosidad',
              'Integridad',
              'Autoconciencia',
              'Empatía',
              'Conocimientos',
            ].map((header) => (
              <th key={header} className="border px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado, index) => (
            <tr key={resultado.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2 font-bold">{resultado.puesto}</td>
              {[
                'puntaje_bondad',
                'puntaje_optimismo',
                'puntaje_etica_trabajo',
                'puntaje_curiosidad',
                'puntaje_integridad',
                'puntaje_autoconciencia',
                'puntaje_empatia',
                'puntaje_conocimientos',
              ].map((field) => (
                <td key={field} className="border px-4 py-2">
                  <input
                    type="number"
                    value={resultado[field]}
                    onChange={(e) => handleInputChange(e, index, field)}
                    onKeyDown={(e) => handleInputChange(e, index, field)}
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatoIdealModificar;
