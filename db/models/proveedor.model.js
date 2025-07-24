const { Model, DataTypes } = require('sequelize')

const PROVEEDOR_TABLA = 'proveedor'; //nombre de la tabla
const { USER_TABLE } = require('./usuarios.model')


const ProveedorSchema = { //define estructura de la tabla
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cedula: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_proveedor: {
    type: DataTypes.ENUM('Nacional', 'Internacional'),
    allowNull: false
  },
  tipo_persona: {
    type: DataTypes.ENUM('Natural', 'Jurídica'),
    allowNull: false
  },
  banco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_cuenta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_cuenta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuarioId: {
    field: 'usuarioId',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Aprobado', 'Rechazado'),
    defaultValue: 'Pendiente'
  }
}

class Proveedor extends Model{
  static associate(models){
    this.belongsTo(models.Usuarios, {
      as: 'usuario',
      foreignKey: 'usuarioId'
    });
    this.hasMany(models.Beneficiarios, {
      foreignKey: 'proveedorId',
      as: 'beneficiarios',
      onDelete: 'CASCADE'
    });
  }

  static config(sequelize){
    return {
      sequelize, //coneccion que va a tener
      tableName: PROVEEDOR_TABLA, // nombre de la tabla
      modelName: 'Proveedor', //nombre del modelo
      timestamps: false
    }
  }
}

module.exports = { PROVEEDOR_TABLA, ProveedorSchema, Proveedor }

