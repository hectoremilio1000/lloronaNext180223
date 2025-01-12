import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { candidatoId, puesto, etapa } = req.body;

    if (!candidatoId || !puesto || !etapa) {
      return res.status(400).json({
        message: 'CandidatoId, puesto y etapa son requeridos',
      });
    }

    // Obtener todas las preguntas activas según la etapa
    const examenQuery =
      etapa === 'psicométricos'
        ? `SELECT * FROM preguntas WHERE examen_id IN (49, 50, 51, 52, 53, 54, 55)`
        : `SELECT * FROM preguntas WHERE examen_id = (SELECT id FROM examenes WHERE nombre = ? AND tipo = 'Conocimientos' AND activo = 1)`;

    const [preguntas] = await poolCandidatos.query(
      examenQuery,
      etapa === 'conocimientos' ? [puesto] : []
    );

    // Calcular el siguiente intento_id
    const [intentosPrevios] = await poolCandidatos.query(
      `SELECT MAX(intento_id) AS ultimoIntento FROM respuestas WHERE candidato_id = ?`,
      [candidatoId]
    );

    const intentoId = (intentosPrevios[0]?.ultimoIntento || 0) + 1;

    return res.status(200).json({ preguntas, intentoId });
  } catch (error) {
    console.error('Error en la API de preguntas:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
