import poolCandidatos from '../../../lib/dbChat';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id_usuario } = req.query;

      if (!id_usuario) {
        return res.status(400).json({ error: 'ID de usuario requerido.' });
      }

      // Obtener las recomendaciones y el nombre del usuario
      const [recomendaciones] = await poolCandidatos.query(
        `
        SELECT r.texto AS recomendacion, u.nombre 
        FROM recomendaciones r 
        INNER JOIN usuarios u ON r.id_usuario = u.id 
        WHERE r.id_usuario = ?
        `,
        [id_usuario]
      );

      if (recomendaciones.length === 0) {
        return res.status(404).json({
          error: 'No se encontraron recomendaciones para este usuario.',
        });
      }

      // Obtener las respuestas seleccionadas
      const [respuestas] = await poolCandidatos.query(
        `
        SELECT p.texto AS pregunta, GROUP_CONCAT(o.texto SEPARATOR ', ') AS respuestas
        FROM respuestas r
        INNER JOIN preguntas p ON r.id_pregunta = p.id
        INNER JOIN opciones o ON r.id_opcion = o.id
        WHERE r.id_usuario = ?
        GROUP BY p.id
        `,
        [id_usuario]
      );

      res.status(200).json({
        nombre: recomendaciones[0].nombre,
        respuestas,
        recomendaciones: recomendaciones.map((rec) => rec.recomendacion),
      });
    } catch (error) {
      console.error('Error en la API recomendaciones:', error);
      res.status(500).json({ error: 'Error al obtener datos.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
