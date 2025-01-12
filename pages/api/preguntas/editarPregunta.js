import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, texto, peso_a, peso_b, peso_c, respuesta_correcta } = req.body;

    try {
      const query = `
        UPDATE preguntas
        SET texto = ?, peso_a = ?, peso_b = ?, peso_c = ?, respuesta_correcta = ?
        WHERE id = ?
      `;
      const values = [texto, peso_a, peso_b, peso_c, respuesta_correcta, id];
      await poolCandidatos.query(query, values);

      res.status(200).json({ message: 'Pregunta actualizada correctamente.' });
    } catch (error) {
      console.error('Error al actualizar la pregunta:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido.' });
  }
}
