import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { id } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ message: 'El ID del candidato es requerido' });
    }

    const query = 'DELETE FROM candidatos WHERE id = ?';
    await poolCandidatos.query(query, [id]);

    res.status(200).json({ message: 'Candidato eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar candidato:', error);
    res.status(500).json({ message: 'Error al eliminar candidato' });
  }
}
