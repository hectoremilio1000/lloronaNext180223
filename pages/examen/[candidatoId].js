import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Examen = () => {
  const router = useRouter();
  const { candidatoId } = router.query;

  const [preguntasPsicometrico, setPreguntasPsicometrico] = useState([]);
  const [preguntaConocimiento, setPreguntaConocimiento] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const [intentoId, setIntentoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [puesto, setPuesto] = useState('');

  // Obtener el puesto del candidato
  useEffect(() => {
    const obtenerPuesto = async () => {
      try {
        const response = await fetch(
          `/api/candidatos/get?candidatoId=${candidatoId}`
        );
        if (!response.ok)
          throw new Error('Error al obtener el puesto del candidato');

        const data = await response.json();
        setPuesto(data.puesto);
      } catch (error) {
        console.error('Error al obtener puesto:', error);
      }
    };

    if (candidatoId) obtenerPuesto();
  }, [candidatoId]);

  // Obtener preguntas psicométricas y de conocimiento
  useEffect(() => {
    const iniciarExamen = async () => {
      if (!puesto) return;

      try {
        const response = await fetch('/api/preguntas/preguntas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ candidatoId, puesto, etapa: 'psicométricos' }),
        });

        if (!response.ok) throw new Error('Error al obtener preguntas');
        const { preguntas, intentoId } = await response.json();
        setIntentoId(intentoId);

        // Filtrar 2 preguntas por habilidad psicométrica en el front
        const habilidadesPsicométricas = [
          { nombre: 'Bondad', examenId: 49 },
          { nombre: 'Optimismo', examenId: 50 },
          { nombre: 'Ética en el Trabajo', examenId: 51 },
          { nombre: 'Inteligencia Curiosa', examenId: 52 },
          { nombre: 'Integridad', examenId: 53 },
          { nombre: 'Autoconciencia', examenId: 54 },
          { nombre: 'Empatía', examenId: 55 },
        ];

        const preguntasPsicometrico = habilidadesPsicométricas.flatMap(
          (habilidad) =>
            preguntas.filter(
              (pregunta) => pregunta.examen_id === habilidad.examenId
            )
          // .slice(0, 2) // Limitar en el front
        );
        setPreguntasPsicometrico(preguntasPsicometrico);

        // Obtener preguntas de conocimientos
        const responseConocimiento = await fetch('/api/preguntas/preguntas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ candidatoId, puesto, etapa: 'conocimientos' }),
        });

        if (!responseConocimiento.ok)
          throw new Error('Error al obtener preguntas de conocimientos');
        const { preguntas: preguntasConocimiento } =
          await responseConocimiento.json();

        setPreguntaConocimiento(preguntasConocimiento);
        // Limitar en el front
        // setPreguntaConocimiento(preguntasConocimiento.slice(0, 2));

        setLoading(false);
      } catch (error) {
        console.error('Error al iniciar examen:', error);
      }
    };

    if (puesto) iniciarExamen();
  }, [puesto]);

  const handleRespuesta = (preguntaId, respuestaSeleccionada) => {
    if (respuestas[preguntaId]) return; // Evitar seleccionar de nuevo

    setRespuestas((prev) => ({
      ...prev,
      [preguntaId]: { seleccionada: respuestaSeleccionada },
    }));
  };

  const finalizarExamen = async () => {
    try {
      // Paso 1: Guardar respuestas
      const response = await fetch('/api/respuestas/respuestas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          respuestas,
          candidatoId,
          examenId: intentoId,
        }),
      });

      if (!response.ok) throw new Error('Error al guardar respuestas');

      // Paso 2: Calcular resultados
      const resultadosResponse = await fetch('/api/resultados/resultados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidatoId,
          intentoId,
          puesto, // Incluye el puesto desde la URL
        }),
      });

      if (!resultadosResponse.ok)
        throw new Error('Error al calcular resultados');

      alert('Examen finalizado exitosamente');
      router.push('/gracias'); // Redirigir después de finalizar
    } catch (error) {
      console.error('Error al finalizar examen:', error);
    }
  };

  if (loading) return <p>Cargando preguntas...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1
        style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}
      >
        Examen
      </h1>

      {/* Preguntas Psicométricas */}
      <h2>Preguntas Psicométricas</h2>
      {preguntasPsicometrico.map((pregunta, index) => (
        <div
          key={pregunta.id}
          style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h3>
            {index + 1}. {pregunta.texto}
          </h3>
          {['a', 'b', 'c', 'd', 'e'].map((opcion) => (
            <button
              key={opcion}
              onClick={() => handleRespuesta(pregunta.id, opcion)}
              disabled={!!respuestas[pregunta.id]} // Deshabilitar después de seleccionar
              style={{
                display: 'block',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor:
                  respuestas[pregunta.id]?.seleccionada === opcion
                    ? '#d4edda'
                    : '#fff',
                cursor: respuestas[pregunta.id] ? 'not-allowed' : 'pointer',
              }}
            >
              {pregunta[opcion]}
            </button>
          ))}
        </div>
      ))}

      {/* Pregunta de Conocimientos */}
      <h2>Pregunta de Conocimientos</h2>
      {preguntaConocimiento &&
        preguntaConocimiento.map((pregunta, index) => (
          <div
            key={pregunta.id}
            style={{
              marginBottom: '20px',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
            }}
          >
            <h3>
              {index + 1}. {pregunta.texto}
            </h3>
            {['a', 'b', 'c', 'd', 'e'].map((opcion) => (
              <button
                key={opcion}
                onClick={() => handleRespuesta(pregunta.id, opcion)}
                disabled={!!respuestas[pregunta.id]} // Deshabilitar después de seleccionar
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  backgroundColor:
                    respuestas[pregunta.id]?.seleccionada === opcion
                      ? '#d4edda'
                      : '#fff',
                  cursor: respuestas[pregunta.id] ? 'not-allowed' : 'pointer',
                }}
              >
                {pregunta[opcion]}
              </button>
            ))}
          </div>
        ))}

      <button
        onClick={finalizarExamen}
        style={{
          width: '100%',
          padding: '15px',
          marginTop: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Finalizar Examen
      </button>
    </div>
  );
};

export default Examen;
