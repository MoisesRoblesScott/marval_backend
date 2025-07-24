const express = require('express');

const proovedorRouter = require('./proveedor.router');
const beneficiariosRouter = require('./beneficiarios.router');
const usuariosRouter = require('./usuarios.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/proveedores', proovedorRouter);
  router.use('/beneficiarios', beneficiariosRouter);
  router.use('/usuarios', usuariosRouter);
}

module.exports = routerApi;
