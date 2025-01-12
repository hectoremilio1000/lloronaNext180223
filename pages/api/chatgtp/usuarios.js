import poolCandidatos from '../../../lib/dbChat';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { nombre, email } = req.body;

      if (!nombre || !email) {
        return res.status(400).json({ error: 'Se requieren nombre y email.' });
      }

      const [result] = await poolCandidatos.query(
        'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
        [nombre, email]
      );

      // Enviar el ID y el nombre del usuario registrado al cliente
      res.status(201).json({
        id_usuario: result.insertId,
        nombre, // Incluimos el nombre del usuario
        message: 'Usuario registrado con éxito.',
      });
    } catch (error) {
      console.error('Error en la API usuarios:', error.message);
      res.status(500).json({ error: 'Error al registrar usuario.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
