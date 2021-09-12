const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'item name must be provied'],
  },
  qty: {
    type: Number,
    // required: [true, 'item quantity must bo provided'],
  },
  price: {
    type: Number,
    // required: [true, 'item price must be provided'],
  },
});

const invoiceSchema = new mongoose.Schema({
  userInfo: {
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    postCode: { type: String, default: '' },
    country: { type: String, default: '' },
  },
  clientInfo: {
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    street: { type: String, default: '' },
    city: { type: String, default: '' },
    postCode: { type: String, default: '' },
    country: { type: String, default: '' },
  },
  createdAt: {
    type: String,
  },
  initializedIn: {
    type: Date,
    default: Date.now(),
  },
  desc: {
    type: String,
    default: '',
  },
  paymentDue: {
    type: Date,
  },
  itemList: {
    type: [itemSchema],
    default: [],
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'paid'],
    default: 'draft',
  },
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('invoice', invoiceSchema);
