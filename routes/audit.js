const express = require('express');
const router = express.Router();

const {
  googleProductsAudit,
  fetchAllProducts,
  fetchAllProductsMatrix,
  fetchProductsMatrixPaginated,
} = require('../controllers/auditFeedController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/audit-feed', authMiddleware, googleProductsAudit);
router.get('/fetch-all-products', authMiddleware, fetchAllProducts);
router.get(
  '/fetch-all-products-matrix',
  authMiddleware,
  fetchAllProductsMatrix
);
router.get(
  '/fetch-products-matrix-paginated',
  authMiddleware,
  fetchProductsMatrixPaginated
);

module.exports = router;
