const { Model, DataTypes } = require('sequelize')

const BENEFICIARIOS_TABLA = 'beneficiarios'; //nombre de la tabla

const BeneficiariosSchema = { //define estructura de la tabla
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING,
    allowNull: false
  },

  proveedorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'proveedor',
      key: 'id'
    }
  }
}

class Beneficiarios extends Model{
  static associate(models){
    this.belongsTo(models.Proveedor, {
      foreignKey: 'proveedorId',
      as: 'proveedor'
    });
  }

  static config(sequelize){
    return {
      sequelize, //coneccion que va a tener
      tableName: BENEFICIARIOS_TABLA, // nombre de la tabla
      modelName: 'Beneficiarios', //nombre del modelo
      timestamps: false
    }
  }
}

module.exports = { BENEFICIARIOS_TABLA, BeneficiariosSchema, Beneficiarios }

