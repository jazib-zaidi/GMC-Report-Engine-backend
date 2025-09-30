const express = require('express');
const router = express.Router();

const { googleProductsAudit } = require('../controllers/auditFeedController');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/audit-feed', authMiddleware, googleProductsAudit);

module.exports = router;
