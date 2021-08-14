const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong',
  };

  if (err.name === 'CastError') {
    customError.message = `No item found with id: ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }
  if (err.name === 'ValidationError') {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.message = Object.values(err.errors)
      .map((error) => error.message)
      .join(', ');
  }

  return res.status(customError.statusCode).send(customError.message);
};

module.exports = errorHandlerMiddleware;
