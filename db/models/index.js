// aqui se va colocar todos los modelos.
const { Proveedor, ProveedorSchema } = require('./proveedor.model')
const { Beneficiarios, BeneficiariosSchema } = require('./beneficiarios.model')
const { Usuarios, UsuariosSchema } = require('./usuarios.model')

function setupModels(sequelize){
  Proveedor.init(ProveedorSchema, Proveedor.config(sequelize));
  Beneficiarios.init(BeneficiariosSchema, Beneficiarios.config(sequelize));
  Usuarios.init(UsuariosSchema, Usuarios.config(sequelize));

  Proveedor.associate(sequelize.models);
  Beneficiarios.associate(sequelize.models);
}

module.exports = setupModels
