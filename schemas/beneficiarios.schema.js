const Joi = require('joi');

const nombre   = Joi.string();
const cedula   = Joi.string();
const proveedorId   = Joi.number().integer();

const createBeneficiarioSchema = Joi.object({
  nombre:   nombre,
  cedula:   cedula,
  proveedorId: proveedorId,
});

module.exports = { createBeneficiarioSchema }
