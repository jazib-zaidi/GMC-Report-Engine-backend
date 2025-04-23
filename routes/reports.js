const express = require('express');
const router = express.Router();
const { fetchReports } = require('../controllers/reportController');
const { merchantAccountList } = require('../controllers/merchantAccountList');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/fetch_reports', authMiddleware, fetchReports);
router.get('/merchant_account_list', authMiddleware, merchantAccountList);

module.exports = router;
