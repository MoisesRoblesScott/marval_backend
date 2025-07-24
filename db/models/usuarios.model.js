const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'usuarios';

const UsuariosSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre_usuario: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}

class Usuarios extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Usuarios',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UsuariosSchema, Usuarios }
