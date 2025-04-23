const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {
  createGoogleSheetReport,
} = require('../controllers/createGoogleSheetReport');

router.post('/google-sheet', authMiddleware, createGoogleSheetReport);

module.exports = router;
