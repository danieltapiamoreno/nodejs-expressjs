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

module.exports = { logErrors, errorHandler };
