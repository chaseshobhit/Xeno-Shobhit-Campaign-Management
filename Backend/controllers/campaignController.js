const Campaign = require('../models/Campaign');
const { sendMessages } = require('../services/campaignService');

const createCampaign = async (req, res) => {
  try {
    const { title, audienceId, message } = req.body;
    const newCampaign = new Campaign({ title, audienceId, message });
    await newCampaign.save();
    await sendMessages(newCampaign);
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(500).json({ message: 'Error creating campaign', error: err.message });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({}).sort({ createdAt: -1 });
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching campaigns', error: err.message });
  }
};

module.exports = { createCampaign, getCampaigns };
