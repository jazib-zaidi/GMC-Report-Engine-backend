const express = require('express');
const router = express.Router();

const {
  googleProductCategory,
} = require('../controllers/googleProductCategory');
const authMiddleware = require('../middlewares/authMiddleware');

router.get(
  '/get-google-product-category',
  authMiddleware,
  googleProductCategory
);

module.exports = router;
