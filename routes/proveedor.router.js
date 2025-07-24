const express = require('express');

const ProveedorService = require('../services/proveedor.service');
const validador = require('../middlewares/validador.js');
const { updateProveedorSchema, createProveedorSchema, getProveedorSchema } = require('../schemas/proveedor.schema');

const router = express.Router();
const service = new ProveedorService();

router.get('/', async (req, res, next) => {
  try {
    const proveedores = await service.listarTodos();
    res.json(proveedores);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validador(getProveedorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const proveedor = await service.buscarId(id);
      res.json(proveedor);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validador(createProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const nuevoProveedor = await service.creacion(body);
      res.status(201).json(nuevoProveedor);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  validador(getProveedorSchema, 'params'),
  validador(updateProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const proveedor = await service.actualizar(id, body);
      res.json(proveedor);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validador(getProveedorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const resultado = await service.eliminar(id);
      res.status(200).json(resultado);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id/validar',
  validador(getProveedorSchema, 'params'),
  validador(updateProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const proveedor = await service.actualizarEstado(id, body);
      res.json(proveedor);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

