const { StatusCodes } = require('http-status-codes');

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  if (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      stack: err.stack,
    });
  }
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
