const express = require('express');
const router = express.Router();
const { calculateTotals, paymentDateModifier } = require('../middleware');

const {
  getAllInvoices,
  getSingleInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require('../controllers');

router
  .route('/')
  .get(getAllInvoices)
  .post(calculateTotals, paymentDateModifier, createInvoice);
router
  .route('/:id')
  .get(getSingleInvoice)
  .patch(calculateTotals, paymentDateModifier, updateInvoice)
  .delete(deleteInvoice);

module.exports = router;
