import mysql from 'mysql2/promise';

const poolCandidatos = mysql.createPool({
  host: process.env.DB_CAND_HOST,
  port: process.env.DB_CAND_PORT,
  user: process.env.DB_CAND_USER,
  password: process.env.DB_CAND_PASSWORD,
  database: process.env.DB_CAND_DATABASE,
});

export default poolCandidatos;
