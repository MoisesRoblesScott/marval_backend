const Joi = require('joi');

const id       = Joi.number().integer();
const nit      = Joi.string();
const nombre   = Joi.string();
const apellido = Joi.string();
const cedula   = Joi.string();
const tipo_proveedor = Joi.string();
const tipo_persona   = Joi.string();
const banco          = Joi.string();
const numero_cuenta  = Joi.string();
const tipo_cuenta    = Joi.string();
const usuarioId      = Joi.number().integer();
const estado         = Joi.string();

const createProveedorSchema = Joi.object({
  nit:      nit.required(),
  nombre:   nombre.required(),
  apellido: apellido.required(),
  cedula:   cedula.required(),
  tipo_proveedor: tipo_proveedor.valid('Nacional', 'Internacional').required(),
  tipo_persona:   tipo_persona.valid('Natural', 'Jurídica').required(),
  banco:          banco.required(),
  numero_cuenta:  numero_cuenta.required(),
  tipo_cuenta: tipo_cuenta.required(),
  usuarioId: usuarioId,
  estado:   estado.valid('Pendiente', 'Aprobado', 'Rechazado').required(),
});

const updateProveedorSchema = Joi.object({
  nit,
  nombre,
  apellido,
  cedula,
  tipo_proveedor,
  tipo_persona,
  banco,
  numero_cuenta,
  tipo_cuenta,
  estado,
});

const getProveedorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProveedorSchema, getProveedorSchema, updateProveedorSchema }
