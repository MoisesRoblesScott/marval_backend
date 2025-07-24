const { ValidationError } = require("sequelize");

function logErrors (err, req, res, next) {
  console.error(err);
  next(err);
}

function errorr(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomError(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

function ormError(err, req, res, next) {
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    })
  }
  next(err)
}


module.exports = { logErrors, errorr, boomError, ormError }
