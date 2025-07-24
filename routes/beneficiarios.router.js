const express = require('express');

const BeneficiarioService = require('../services/beneficiarios.service.js');
const validador = require('../middlewares/validador.js');
const { createBeneficiarioSchema } = require('../schemas/beneficiarios.schema.js');

const router = express.Router();
const service = new BeneficiarioService();

router.get('/', async (req, res, next) => {
  try {
    const beneficiarios = await service.listarTodos();
    res.json(beneficiarios);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validador(createBeneficiarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoBeneficiario = await service.creacion(body);
      res.status(201).json(nuevoBeneficiario);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
