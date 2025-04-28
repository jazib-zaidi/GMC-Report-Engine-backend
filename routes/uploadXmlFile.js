const express = require('express');
const router = express.Router();
const {
  uploadMiddleware,
  uploadXlsxFile,
} = require('../controllers/uploadController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload-xlsx', authMiddleware, uploadMiddleware, uploadXlsxFile);

module.exports = router;
