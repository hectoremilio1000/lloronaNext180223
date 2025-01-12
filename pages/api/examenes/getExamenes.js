// pages/api/examenes/getExamenes.js
import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const [examenes] = await poolCandidatos.query(
      `SELECT * FROM examenes ORDER BY nombre, version`
    );

    return res.status(200).json(examenes);
  } catch (error) {
    console.error('Error al obtener exámenes:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
