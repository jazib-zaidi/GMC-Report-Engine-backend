const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const {
  createGoogleSheetFromXmlUrl,
} = require('../controllers/feedXmlUploder');

router.post('/upload-feed-xml', authMiddleware, createGoogleSheetFromXmlUrl);

module.exports = router;
