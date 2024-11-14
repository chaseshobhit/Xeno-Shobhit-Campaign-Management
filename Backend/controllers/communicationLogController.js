const CommunicationLog = require('../models/CommunicationLog');

const getLogs = async (req, res) => {
  try {
    const logs = await CommunicationLog.find({});
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching logs', error: err.message });
  }
};

module.exports = { getLogs };
