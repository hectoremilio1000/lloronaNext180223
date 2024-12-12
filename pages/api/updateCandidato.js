import poolCandidatos from '../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, comentarios, descartado } = req.body;

    if (!id || (comentarios === undefined && descartado === undefined)) {
      return res.status(400).json({
        message:
          'ID y al menos un campo (comentarios o descartado) son requeridos',
      });
    }

    try {
      const query = `
        UPDATE candidatos 
        SET 
          comentarios = COALESCE(?, comentarios), 
          descartado = COALESCE(?, descartado) 
        WHERE id = ?`;
      await poolCandidatos.query(query, [comentarios, descartado, id]);

      const [updatedCandidato] = await poolCandidatos.query(
        'SELECT * FROM candidatos WHERE id = ?',
        [id]
      );

      res.status(200).json(updatedCandidato[0]); // Devuelve el candidato actualizado
    } catch (error) {
      console.error('Error al actualizar candidato:', error);
      res.status(500).json({ message: 'Error al actualizar candidato' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
