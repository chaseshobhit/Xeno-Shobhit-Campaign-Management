const Audience = require('../models/Audience');

const createAudience = async (req, res) => {
  try {
    const { name, conditions, size } = req.body;
    const newAudience = new Audience({ name, conditions, size, createdBy: req.user.id });
    await newAudience.save();
    res.status(201).json(newAudience);
  } catch (err) {
    res.status(500).json({ message: 'Error creating audience', error: err.message });
  }
};

const getAudiences = async (req, res) => {
  try {
    const audiences = await Audience.find({ createdBy: req.user.id });
    res.status(200).json(audiences);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching audiences', error: err.message });
  }
};

module.exports = { createAudience, getAudiences };
