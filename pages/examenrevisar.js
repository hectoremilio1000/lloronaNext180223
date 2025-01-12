import React, { useEffect, useState } from 'react';

function ExamenRevisar() {
  const [resultados, setResultados] = useState([]);
  const [detalles, setDetalles] = useState(null);

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const response = await fetch('/api/getResultados');
        const data = await response.json();
        setResultados(data);
      } catch (error) {
        console.error('Error al obtener resultados:', error);
      }
    };

    fetchResultados();
  }, []);

  const handleVerDetalles = async (categoria) => {
    try {
      const response = await fetch(`/api/getDetalles?categoria=${categoria}`);
      const data = await response.json();
      setDetalles(data);
    } catch (error) {
      console.error('Error al obtener detalles:', error);
    }
  };

  return (
    <div>
      <h1>Resultados del Examen</h1>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Puntaje Promedio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado) => (
            <tr key={resultado.categoria}>
              <td>{resultado.categoria}</td>
              <td>{resultado.puntaje_promedio}</td>
              <td>
                <button onClick={() => handleVerDetalles(resultado.categoria)}>
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {detalles && (
        <div>
          <h2>Detalles de {detalles.categoria}</h2>
          <ul>
            {detalles.preguntas.map((detalle) => (
              <li key={detalle.id}>
                {detalle.texto} - Respuesta: {detalle.respuesta} - Correcta:{' '}
                {detalle.correcta}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExamenRevisar;
