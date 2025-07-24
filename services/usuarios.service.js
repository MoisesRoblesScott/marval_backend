const { models } = require('../libs/sequelize');

class UsuariosService {

  async creacion(data) {
    const resp = await models.Usuarios.create(data);
    let nuevoUsuarios = {
      "id" : resp.id,
      "nombre_usuario" : resp.nombre_usuario,
      "role" : resp.role
    }
    return { "data": nuevoUsuarios, "msj": "Registrado correctamente" };
  }

  async listarTodos() {
    const rta = await models.Usuarios.findAll({ raw: true });

    const usuarios = rta.map(usuario => ({
      id: usuario.id,
      nombre_usuario: usuario.nombre_usuario,
      role: usuario.role
    }));

    return usuarios;
  }

}

module.exports = UsuariosService;
