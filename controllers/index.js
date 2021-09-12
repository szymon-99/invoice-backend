const { StatusCodes } = require('http-status-codes');
const Invoice = require('../models/invoice');
const { NotFoundError } = require('../errors');

const getAllInvoices = async (req, res) => {
  // await Invoice.deleteMany({});

  const invoices = await Invoice.find({}).sort('paymentDue');

  res.status(StatusCodes.OK).json(invoices);
};

const createInvoice = async (req, res) => {
  const invoice = await Invoice.create(req.body);

  res.status(StatusCodes.CREATED).json(invoice);
};

const getSingleInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;

  const invoice = await Invoice.findById(invoiceId);

  if (!invoice) {
    throw new NotFoundError(`Invoice with id: ${invoiceId} doesn't exist`);
  }

  res.status(StatusCodes.OK).json(invoice);
};

const updateInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;

  const invoice = await Invoice.findByIdAndUpdate(invoiceId, req.body, {
    new: true,
  });

  if (!invoice) {
    throw new NotFoundError(`Invoice with id: ${invoiceId} doesn't exist`);
  }

  res.status(StatusCodes.OK).json(invoice);
};

const deleteInvoice = async (req, res) => {
  const { id: invoiceId } = req.params;

  const invoice = await Invoice.findByIdAndDelete(invoiceId);

  if (!invoice) {
    throw new NotFoundError(`Invoice with id: ${invoiceId}, doesn't exist`);
  }

  res.status(StatusCodes.OK).json({ message: 'Success' });
};

module.exports = {
  getAllInvoices,
  createInvoice,
  updateInvoice,
  getSingleInvoice,
  deleteInvoice,
};
