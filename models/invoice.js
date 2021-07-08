const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'item name must be provied'],
  },
  quantity: {
    type: Number,
    required: [true, 'item quantity must bo provided'],
  },
  price: {
    type: Number,
    required: [true, 'item price must be provided'],
  },
});

const invoiceSchema = new mongoose.Schema({
  userInfo: {
    street: { type: String },
    city: { type: String },
    postCode: { type: String },
    country: { type: String },
  },
  clientInfo: {
    name: { type: String },
    email: { type: String },
    street: { type: String },
    city: { type: String },
    postCode: { type: String },
    country: { type: String },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paymentDue: {
    type: Number,
  },
  itemList: {
    type: [itemSchema],
    default: undefined,
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'paid'],
    default: 'draft',
  },
});

module.exports = mongoose.model('invoice', invoiceSchema);
