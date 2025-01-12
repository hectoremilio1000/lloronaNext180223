import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Resultado = () => {
  const router = useRouter();
  const { candidatoId } = router.query;
  const [puntaje, setPuntaje] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPuntaje = async () => {
      try {
        const response = await fetch(
          `/api/evaluateRespuestas?candidatoId=${candidatoId}`
        );
        const data = await response.json();
        setPuntaje(data.puntaje);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el puntaje:', error);
        setLoading(false);
      }
    };

    if (candidatoId) fetchPuntaje();
  }, [candidatoId]);

  if (loading) return <p>Cargando resultado...</p>;

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1>Resultado del Examen</h1>
      <p>Puntaje obtenido: {puntaje}</p>
    </div>
  );
};

export default Resultado;
