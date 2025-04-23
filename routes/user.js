const express = require('express');
const router = express.Router();
const { user } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/user', authMiddleware, user);

module.exports = router;
