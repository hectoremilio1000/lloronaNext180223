import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const [resultados] = await poolCandidatos.query(`
      SELECT 
        r.id,
        c.nombre,
        r.puesto,
        r.puntaje_bondad,
        r.puntaje_optimismo,
        r.puntaje_etica_trabajo,
        r.puntaje_curiosidad,
        r.puntaje_integridad,
        r.puntaje_autoconciencia,
        r.puntaje_empatia,
        r.puntaje_conocimientos,
        r.fecha
      FROM resultados r
      JOIN candidatos c ON r.candidato_id = c.id
      ORDER BY r.fecha DESC
    `);

    res.status(200).json(resultados);
  } catch (error) {
    console.error('Error al obtener resultados:', error);
    res.status(500).json({ message: 'Error al obtener resultados' });
  }
}
