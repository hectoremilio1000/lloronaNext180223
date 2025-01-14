import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale
);

const PanelResultados = () => {
  const [resultados, setResultados] = useState([]);
  const [selectedCandidato, setSelectedCandidato] = useState(null);
  const [selectedChartType, setSelectedChartType] = useState(null); // "bar" o "radial"
  const [loading, setLoading] = useState(true);

  // Función para obtener datos del candidato ideal por puesto
  const fetchIdeal = async (puesto) => {
    try {
      const response = await fetch(
        `/api/candidatoIdeal/getCandidatoIdeal?puesto=${encodeURIComponent(
          puesto
        )}`
      );
      if (!response.ok) {
        throw new Error(
          `Error al obtener candidato ideal: ${response.statusText}`
        );
      }
      const [ideal] = await response.json();
      return ideal;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // Manejar la selección de un candidato para visualizar
  const handleView = async (candidato, chartType) => {
    const ideal = await fetchIdeal(candidato.puesto);
    if (!ideal) {
      alert('No se encontró un candidato ideal para el puesto seleccionado.');
      return;
    }
    setSelectedCandidato({ actual: candidato, ideal });
    setSelectedChartType(chartType); // Establecer el tipo de gráfico seleccionado
  };

  // Obtener resultados iniciales
  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const response = await fetch('/api/resultados/getResultados');
        if (!response.ok) {
          throw new Error('Error al cargar resultados.');
        }
        const data = await response.json();
        setResultados(data);
      } catch (error) {
        console.error('Error al cargar resultados:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResultados();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando resultados...</p>;
  }

  if (!resultados.length) {
    return <p className="text-center text-gray-500">No hay resultados.</p>;
  }

  const chartData = {
    labels: [
      'Bondad',
      'Optimismo',
      'Ética',
      'Curiosidad',
      'Integridad',
      'Autoconciencia',
      'Empatía',
      'Conocimientos',
    ],
    datasets: [
      {
        label: 'Candidato Actual',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [
          selectedCandidato?.actual.puntaje_bondad,
          selectedCandidato?.actual.puntaje_optimismo,
          selectedCandidato?.actual.puntaje_etica_trabajo,
          selectedCandidato?.actual.puntaje_curiosidad,
          selectedCandidato?.actual.puntaje_integridad,
          selectedCandidato?.actual.puntaje_autoconciencia,
          selectedCandidato?.actual.puntaje_empatia,
          selectedCandidato?.actual.puntaje_conocimientos,
        ],
      },
      {
        label: 'Candidato Ideal',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [
          selectedCandidato?.ideal.puntaje_bondad,
          selectedCandidato?.ideal.puntaje_optimismo,
          selectedCandidato?.ideal.puntaje_etica_trabajo,
          selectedCandidato?.ideal.puntaje_curiosidad,
          selectedCandidato?.ideal.puntaje_integridad,
          selectedCandidato?.ideal.puntaje_autoconciencia,
          selectedCandidato?.ideal.puntaje_empatia,
          selectedCandidato?.ideal.puntaje_conocimientos,
        ],
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Resultados Exámenes
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Puesto</th>
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((resultado) => (
            <tr key={resultado.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{resultado.id}</td>
              <td className="border px-4 py-2">{resultado.nombre}</td>
              <td className="border px-4 py-2">{resultado.puesto}</td>
              <td className="border px-4 py-2">
                {new Date(resultado.fecha).toLocaleDateString('es-MX')}
              </td>
              <td className="border px-4 py-2 flex gap-2">
                <button
                  onClick={() => handleView(resultado, 'bar')}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Ver Barras
                </button>
                <button
                  onClick={() => handleView(resultado, 'radial')}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Ver Radial
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal con gráficas */}
      {selectedCandidato && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Puntuación</h2>
            {selectedChartType === 'bar' ? (
              <Bar data={chartData} options={{ responsive: true }} />
            ) : (
              <PolarArea data={chartData} options={{ responsive: true }} />
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedCandidato(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelResultados;
