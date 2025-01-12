import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  const { candidatoId } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    if (candidatoId) {
      // Obtener el puesto del candidato específico
      const [result] = await poolCandidatos.query(
        `SELECT puesto FROM candidatos WHERE id = ?`,
        [candidatoId]
      );

      if (!result.length) {
        return res.status(404).json({ message: 'Candidato no encontrado' });
      }

      return res.status(200).json(result[0]);
    }

    // Obtener todos los candidatos
    const [candidatos] = await poolCandidatos.query('SELECT * FROM candidatos');
    return res.status(200).json(candidatos);
  } catch (error) {
    console.error('Error al obtener candidatos:', error);
    return res.status(500).json({ message: 'Error al obtener candidatos' });
  }
}
