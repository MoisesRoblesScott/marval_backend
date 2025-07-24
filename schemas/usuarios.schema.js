const Joi = require('joi');

const nombre_usuario = Joi.string();
const password       = Joi.string().min(8);
const role           = Joi.string();

const crearUsuariosSchema = Joi.object({
  nombre_usuario: nombre_usuario.required(),
  password: password.required(),
  role: role.required()
});


module.exports = { crearUsuariosSchema }
