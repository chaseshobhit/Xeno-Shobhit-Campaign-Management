const mongoose = require('mongoose');

const communicationLogSchema = new mongoose.Schema({
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  recipient: { type: String, required: true },
  status: { type: String, enum: ['SENT', 'FAILED'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('CommunicationLog', communicationLogSchema);
