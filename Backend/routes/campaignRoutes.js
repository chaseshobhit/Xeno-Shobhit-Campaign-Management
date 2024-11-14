const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/campaignController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', authenticate, createCampaign);
router.get('/', authenticate, getCampaigns);

module.exports = router;
