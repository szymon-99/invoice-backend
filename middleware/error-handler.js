const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return req
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong');
};

module.exports = errorHandlerMiddleware;
