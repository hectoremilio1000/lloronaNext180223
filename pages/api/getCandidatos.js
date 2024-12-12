import poolCandidatos from '../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = 'SELECT * FROM candidatos ORDER BY creado_en DESC';
      const [rows] = await poolCandidatos.query(query);
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error al obtener candidatos:', error);
      res.status(500).json({ message: 'Error al obtener candidatos' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
