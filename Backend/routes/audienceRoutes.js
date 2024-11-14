const express = require('express');
const { createAudience, getAudiences } = require('../controllers/audienceController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', authenticate, createAudience);
router.get('/', authenticate, getAudiences);

module.exports = router;
