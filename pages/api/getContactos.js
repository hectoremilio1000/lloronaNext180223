import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Consulta para obtener los contactos
      const query =
        'SELECT id, nombre, whatsapp, email, created_at FROM contactos';
      const [rows] = await pool.query(query);

      res.status(200).json(rows); // Devuelve los datos como JSON
    } catch (error) {
      console.error('Error al obtener contactos:', error);
      res.status(500).json({ message: 'Error al obtener los contactos' });
    }
  } else {
    // Método no permitido
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
