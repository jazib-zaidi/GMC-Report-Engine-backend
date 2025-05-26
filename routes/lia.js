const express = require('express');
const router = express.Router();
const { fetchReports } = require('../controllers/reportController');
const {
  lia,
  liaStoreData,
  AiInsigth,
} = require('../controllers/liaController');
const { listAdsAccounts } = require('../controllers/listAdsAccountsController');
const authMiddleware = require('../middlewares/authMiddleware');
const { liaReportSheet } = require('../controllers/liaReportSheet');

router.post('/lia-report', authMiddleware, lia);
router.post('/lia-report-sheet', authMiddleware, liaReportSheet);
router.get('/list-ads-Accounts', authMiddleware, listAdsAccounts);
router.post('/list-store-data', authMiddleware, liaStoreData);
router.post('/ai-insigth', authMiddleware, AiInsigth);

module.exports = router;
