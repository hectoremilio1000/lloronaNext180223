import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('proyecto_contactos', 'root', 'root', {
  host: 'localhost',
  port: 8889, // MAMP usa este puerto para MySQL
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', // Ruta del socket de MAMP
  },
});

export default sequelize;
