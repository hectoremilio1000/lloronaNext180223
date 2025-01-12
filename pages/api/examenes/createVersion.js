// pages/api/examenes/createVersion.js
import poolCandidatos from '../../../lib/dbCandidatos';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { nombre, tipo, version } = req.body;

  if (!nombre || !tipo || !version) {
    return res.status(400).json({ message: 'Datos incompletos' });
  }

  try {
    // Insertar nueva versión
    await poolCandidatos.query(
      `INSERT INTO examenes (nombre, tipo, version, activo) VALUES (?, ?, ?, 0)`,
      [nombre, tipo, version]
    );

    return res.status(201).json({ message: 'Versión creada exitosamente' });
  } catch (error) {
    console.error('Error al crear versión de examen:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
