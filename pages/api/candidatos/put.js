import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { id, comentarios, estado } = req.body;

    if (!id || !estado) {
      return res
        .status(400)
        .json({ message: 'El ID del candidato y el estado son requeridos' });
    }

    const query = `
      UPDATE candidatos 
      SET comentarios = ?, estado = ? 
      WHERE id = ?`;

    await poolCandidatos.query(query, [comentarios || null, estado, id]);

    res.status(200).json({ id, comentarios, estado });
  } catch (error) {
    console.error('Error al actualizar candidato:', error);
    res.status(500).json({ message: 'Error al actualizar candidato' });
  }
}
