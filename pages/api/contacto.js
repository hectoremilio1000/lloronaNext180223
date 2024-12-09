import pool from '../../lib/db'; // Importa el pool de conexión a MySQL

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, whatsapp, email } = req.body;

    if (!nombre || !whatsapp || !email) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son obligatorios' });
    }

    try {
      // Inserta los datos en la base de datos
      const query =
        'INSERT INTO contactos (nombre, whatsapp, email) VALUES (?, ?, ?)';
      const values = [nombre, whatsapp, email];
      await pool.query(query, values);

      res.status(201).json({ message: 'Contacto guardado exitosamente' });
    } catch (error) {
      console.error('Error al guardar contacto:', error);
      res.status(500).json({ message: 'Error al guardar el contacto' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
