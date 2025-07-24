const { models } = require('../libs/sequelize');

class BeneficiarioService {

  async creacion(data) {
    const nuevoBeneficiario = await models.Beneficiarios.create(data);
    return nuevoBeneficiario;
  }

  async listarTodos() {
    const rta = await models.Beneficiarios.findAll();
    return rta
  }
}

module.exports = BeneficiarioService;
