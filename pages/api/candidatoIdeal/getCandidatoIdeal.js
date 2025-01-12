import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ message: `Método ${req.method} no permitido` });
  }

  try {
    const { puesto } = req.query;
    const query = puesto
      ? 'SELECT * FROM candidato_ideal WHERE puesto = ?'
      : 'SELECT * FROM candidato_ideal';

    const [result] = await poolCandidatos.query(query, puesto ? [puesto] : []);
    if (!result.length) {
      return res
        .status(404)
        .json({ message: 'No se encontraron candidatos ideales' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error al obtener candidatos ideales:', error.message);
    res
      .status(500)
      .json({ message: 'Error interno al obtener candidatos ideales' });
  }
}
