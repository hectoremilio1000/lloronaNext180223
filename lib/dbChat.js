import mysql from 'mysql2/promise';

const poolCandidatos = mysql.createPool({
  host: process.env.DB_CHAT_HOST,
  port: process.env.DB_CHAT_PORT,
  user: process.env.DB_CHAT_USER,
  password: process.env.DB_CHAT_PASSWORD,
  database: process.env.DB_CHAT_DATABASE,
});

export default poolCandidatos;
