import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Recomendaciones() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const router = useRouter();
  const { id_usuario } = router.query;

  useEffect(() => {
    if (!id_usuario) return;

    const fetchRecomendaciones = async () => {
      try {
        const res = await fetch(
          `/api/chatgtp/getrecomendaciones?id_usuario=${id_usuario}`
        ); // Llama a la API `getrecomendaciones.js`
        if (!res.ok) throw new Error('Error al cargar recomendaciones');
        const data = await res.json();

        setNombreUsuario(data.nombre);
        setRespuestas(data.respuestas || []);
        setRecomendaciones(data.recomendaciones || []);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecomendaciones();
  }, [id_usuario]);

  if (loading)
    return <p className="text-center">Cargando recomendaciones...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Hola {nombreUsuario}, estas son tus recomendaciones:
      </h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Tus respuestas fueron:</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {respuestas.map((resp, index) => (
            <li key={index} className="mb-2">
              <strong>{resp.pregunta}:</strong> {resp.respuestas}
            </li>
          ))}
        </ul>
      </div>

      {recomendaciones.map((rec, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200"
        >
          <p className="text-lg text-gray-700 whitespace-pre-line">{rec}</p>
        </div>
      ))}
    </div>
  );
}
