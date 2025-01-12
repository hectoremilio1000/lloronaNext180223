import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res
      .status(405)
      .json({ message: `Método ${req.method} no permitido` });
  }

  try {
    const {
      id,
      nombre,
      puesto,
      puntaje_bondad,
      puntaje_optimismo,
      puntaje_etica_trabajo,
      puntaje_curiosidad,
      puntaje_integridad,
      puntaje_autoconciencia,
      puntaje_empatia,
      puntaje_conocimientos,
    } = req.body;

    const query = `
      UPDATE candidato_ideal SET
        nombre = ?, 
        puntaje_bondad = ?, 
        puntaje_optimismo = ?, 
        puntaje_etica_trabajo = ?, 
        puntaje_curiosidad = ?, 
        puntaje_integridad = ?, 
        puntaje_autoconciencia = ?, 
        puntaje_empatia = ?, 
        puntaje_conocimientos = ?
      WHERE id = ?`;

    await poolCandidatos.query(query, [
      nombre,
      puntaje_bondad,
      puntaje_optimismo,
      puntaje_etica_trabajo,
      puntaje_curiosidad,
      puntaje_integridad,
      puntaje_autoconciencia,
      puntaje_empatia,
      puntaje_conocimientos,
      id,
    ]);

    res
      .status(200)
      .json({ message: 'Candidato ideal actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar candidato ideal:', error);
    res
      .status(500)
      .json({ message: 'Error interno al actualizar candidato ideal' });
  }
}
