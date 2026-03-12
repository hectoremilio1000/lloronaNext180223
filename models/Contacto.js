import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const Contacto = sequelize.define('Contacto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  whatsapp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Contacto;
