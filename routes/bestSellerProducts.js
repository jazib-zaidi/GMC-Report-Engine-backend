const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const { bestSellerProducts } = require('../controllers/bestSellerProducts');

router.get('/best-seller-products', authMiddleware, bestSellerProducts);

module.exports = router;
