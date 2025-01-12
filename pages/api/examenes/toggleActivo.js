// pages/api/examenes/toggleActivo.js
import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { id, activo } = req.body;

  if (!id || typeof activo === 'undefined') {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  try {
    // Desactivar todas las versiones del mismo examen antes de activar una
    if (activo === 1) {
      const [examen] = await poolCandidatos.query(
        `SELECT nombre FROM examenes WHERE id = ?`,
        [id]
      );

      if (examen.length) {
        await poolCandidatos.query(
          `UPDATE examenes SET activo = 0 WHERE nombre = ?`,
          [examen[0].nombre]
        );
      }
    }

    // Actualizar el estado de la versión
    await poolCandidatos.query(`UPDATE examenes SET activo = ? WHERE id = ?`, [
      activo,
      id,
    ]);

    return res.status(200).json({ message: 'Estado del examen actualizado' });
  } catch (error) {
    console.error('Error al actualizar estado del examen:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
