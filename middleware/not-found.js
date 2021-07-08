const { StatusCodes } = require('http-status-codes');

const notFoundMiddleware = async (req, res) =>
  res.status(StatusCodes.NOT_FOUND).send('Route does not exist');

module.exports = notFoundMiddleware;
