import pool from '../../lib/db';

export default async function handler(req, res) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT NOW() AS currentTime');
    res.status(200).json({ currentTime: rows[0].currentTime });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.release(); // Libera la conexión al pool
  }
}
