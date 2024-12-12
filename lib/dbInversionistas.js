import mysql from 'mysql2/promise';

const poolInversionistas = mysql.createPool({
  host: process.env.DB_INV_HOST,
  port: process.env.DB_INV_PORT,
  user: process.env.DB_INV_USER,
  password: process.env.DB_INV_PASSWORD,
  database: process.env.DB_INV_DATABASE,
});

export default poolInversionistas;
