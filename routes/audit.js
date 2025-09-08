const express = require('express');
const router = express.Router();

const { auditFeedController } = require('../controllers/auditFeedController');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/audit-feed', authMiddleware, auditFeedController);

module.exports = router;
