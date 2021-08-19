const { BadRequestError } = require('../errors');

const paymentDateModifier = (req, res, next) => {
  const { createdAt, paymentDue } = req.body;
  if (!createdAt || !paymentDue) {
    throw new BadRequestError('Please provide date');
  }

  const date = new Date(createdAt);

  if (paymentDue === 'next day') {
    date.setDate(date.getDate() + 1);
  }
  if (paymentDue === 'next 7 days') {
    date.setDate(date.getDate() + 7);
  }
  if (paymentDue === 'next 14 days') {
    date.setDate(date.getDate() + 14);
  }
  if (paymentDue === 'next 30 days') {
    date.setDate(date.getDate() + 30);
  }
  req.body.paymentDue = date;

  next();
};

module.exports = paymentDateModifier;
