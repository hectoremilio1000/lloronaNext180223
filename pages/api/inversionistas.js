import pool from '../../lib/dbInversionistas'; // Importa la conexión a la base de datos

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, whatsapp, email } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombre || !whatsapp || !email) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son obligatorios' });
    }

    try {
      // Inserta los datos en la tabla `contactos`
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
    // Método no permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
