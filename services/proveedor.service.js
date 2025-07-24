const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProveedorService {

  async creacion(data) {
    const nuevoProveedor = await models.Proveedor.create(data);
    return { "data":nuevoProveedor, "msj": "Registrado correctamente" };
  }

  async listarTodos() {
    const rta = await models.Proveedor.findAll({
      include: ['beneficiarios', 'usuario']
    });
    return rta
  }

  async buscarId(id) {
    const proveedor = await models.Proveedor.findByPk(id)
    if(!proveedor){
      throw boom.notFound('proveedor no existe')
    }
    return proveedor;
  }

  async actualizar(id, changes) {
    const proveedor = await this.buscarId(id)
    const rta = await proveedor.update(changes)
    return {"data": rta};
  }

  async eliminar(id) {
    const proveedor = await this.buscarId(id)
    await proveedor.destroy()
    return { "id":id, "msj": "Eliminado correctamente" };
  }

  async actualizarEstado(id, changes) {
    const proveedor = await this.buscarId(id)
    const usuario = await models.Usuarios.findByPk(proveedor.usuarioId);

    if (!usuario) {
      throw boom.notFound('Usuario no encontrado');
    }

    if (usuario.role !== 'administrador') {
      throw boom.forbidden('No tienes permisos para cambiar el estado');
    }

    const rta = await proveedor.update(changes)
    return {id:rta.id, estado:rta.estado};
  }

}

module.exports = ProveedorService;
