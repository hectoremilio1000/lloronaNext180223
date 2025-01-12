import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Importar useRouter

export default function Formulario({ usuario, onComplete }) {
  const [preguntaInicial, setPreguntaInicial] = useState({
    id: 1,
    texto: '¿Ya abriste tu negocio o estás en planeación?',
    opciones: [
      { id: 'planeacion', texto: 'Planeación' },
      { id: 'operando', texto: 'Operando' },
    ],
  });
  const [contexto, setContexto] = useState(null);
  const [preguntas, setPreguntas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const router = useRouter(); // Inicializar useRouter

  const handleSeleccionInicial = (opcion) => {
    setContexto(opcion);
  };

  useEffect(() => {
    if (!contexto) return;

    const fetchPreguntas = async () => {
      setCargando(true);
      setError(null);

      try {
        const res = await fetch(
          `/api/chatgtp/preguntaschat?contexto=${encodeURIComponent(contexto)}`
        );
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Error al cargar preguntas');
        }
        const data = await res.json();
        setPreguntas(data);
      } catch (error) {
        console.error('Error al cargar preguntas:', error.message);
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    fetchPreguntas();
  }, [contexto]);

  const logRespuesta = (pregunta, opcion) => {
    if (!usuario?.nombre) {
      console.error('El nombre del usuario no está disponible.');
      return;
    }
    console.log(`Usuario: ${usuario.nombre} (${usuario.id})`);
    console.log(`Pregunta: ${pregunta.texto}`);
    console.log(`Opción seleccionada: ${opcion.texto}`);
  };

  const handleCheckboxChange = (pregunta, opcion) => {
    setRespuestas((prev) => {
      const respuestasPregunta = prev[pregunta.id] || [];
      if (respuestasPregunta.includes(opcion.id)) {
        const updated = {
          ...prev,
          [pregunta.id]: respuestasPregunta.filter((id) => id !== opcion.id),
        };
        logRespuesta(pregunta, opcion);
        return updated;
      } else {
        if (respuestasPregunta.length < 2) {
          const updated = {
            ...prev,
            [pregunta.id]: [...respuestasPregunta, opcion.id],
          };
          logRespuesta(pregunta, opcion);
          return updated;
        }
        return prev; // No permitir más de 2 selecciones
      }
    });
  };

  const handleRadioChange = (pregunta, opcion) => {
    setRespuestas((prev) => {
      const updated = {
        ...prev,
        [pregunta.id]: [opcion.id], // Almacena una sola respuesta
      };
      logRespuesta(pregunta, opcion);
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedRespuestas = Object.entries(respuestas).map(
      ([id_pregunta, ids_opciones]) => ({
        id_pregunta: parseInt(id_pregunta),
        ids_opciones,
      })
    );

    const payload = {
      id_usuario: usuario.id,
      respuestas: formattedRespuestas,
    };

    console.log('Datos enviados al backend (respuestas):', payload);

    try {
      // Guardar respuestas en la base de datos
      const res = await fetch('/api/chatgtp/respuestaschat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al guardar respuestas.');
      }

      console.log('Respuestas guardadas exitosamente.');

      // Llamar a onComplete para manejar las recomendaciones
      onComplete(formattedRespuestas);
    } catch (error) {
      console.error('Error al guardar respuestas:', error.message);
      alert('Hubo un problema al guardar las respuestas.');
    }
  };

  if (!contexto) {
    return (
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-bold">{preguntaInicial.texto}</h2>
        {preguntaInicial.opciones.map((opcion) => (
          <button
            key={opcion.id}
            onClick={() => handleSeleccionInicial(opcion.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {opcion.texto}
          </button>
        ))}
      </div>
    );
  }

  if (cargando) return <p>Cargando preguntas...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {preguntas.map((pregunta) => (
        <div key={pregunta.id} className="space-y-2">
          <p>{pregunta.texto}</p>
          {pregunta.texto ===
          '¿Quién será tu público objetivo principal? escoge 2'
            ? // Checkbox para esta pregunta específica
              pregunta.opciones.map((opcion) => (
                <label key={opcion.id} className="block">
                  <input
                    type="checkbox"
                    name={`pregunta-${pregunta.id}`}
                    value={opcion.id}
                    onChange={() => handleCheckboxChange(pregunta, opcion)}
                    checked={
                      respuestas[pregunta.id]?.includes(opcion.id) || false
                    }
                  />
                  {opcion.texto}
                </label>
              ))
            : // Radio para las demás preguntas
              pregunta.opciones.map((opcion) => (
                <label key={opcion.id} className="block">
                  <input
                    type="radio"
                    name={`pregunta-${pregunta.id}`}
                    value={opcion.id}
                    onChange={() => handleRadioChange(pregunta, opcion)}
                    checked={
                      respuestas[pregunta.id]?.[0] === opcion.id || false
                    }
                    required
                  />
                  {opcion.texto}
                </label>
              ))}
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white">
        Enviar Respuestas
      </button>
    </form>
  );
}
