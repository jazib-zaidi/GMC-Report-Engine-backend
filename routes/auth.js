const express = require('express');
const router = express.Router();
const {
  getAuthUrl,
  handleOAuthCallback,
} = require('../controllers/authController');

router.get('/', getAuthUrl);
router.get('/oauth2callback', handleOAuthCallback);

module.exports = router;
