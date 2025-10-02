const express = require('express');
const router = express.Router();

const {
  googleProductsAudit,
  fetchAllProducts,
} = require('../controllers/auditFeedController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/audit-feed', authMiddleware, googleProductsAudit);
router.get('/fetch-all-products', authMiddleware, fetchAllProducts);

module.exports = router;
