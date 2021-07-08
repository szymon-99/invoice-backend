const express = require('express');
const router = express.Router();

const {
  getAllInvoices,
  getSingleInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require('../controllers');

router.route('/').get(getAllInvoices).post(createInvoice);
router
  .route('/:id')
  .get(getSingleInvoice)
  .patch(updateInvoice)
  .delete(deleteInvoice);

module.exports = router;
