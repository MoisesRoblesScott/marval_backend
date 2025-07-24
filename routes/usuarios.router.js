const express = require('express');

const UsuariosService = require('../services/usuarios.service.js');
const validador = require('../middlewares/validador.js');
const { crearUsuariosSchema } = require('../schemas/usuarios.schema.js');

const router = express.Router();
const service = new UsuariosService();

router.get('/', async (req, res, next) => {
  try {
    const usuarios = await service.listarTodos();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validador(crearUsuariosSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoUsuario = await service.creacion(body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
