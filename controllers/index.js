const { StatusCodes } = require('http-status-codes');
const Invoice = require('../models/invoice');

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find({});
  res.status(StatusCodes.OK).json({ message: 'getAllInvoices', invoices });
};
const createInvoice = async (req, res) => {
  const createdInvoice = await Invoice.create(req.body);
  res.status(StatusCodes.OK).json({ message: 'createInvoice', createdInvoice });
};
const getSingleInvoice = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'getSingleInvoice' });
};
const updateInvoice = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'updateInvoice' });
};
const deleteInvoice = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'deleteInvoice' });
};

module.exports = {
  getAllInvoices,
  createInvoice,
  updateInvoice,
  getSingleInvoice,
  deleteInvoice,
};
