const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  audienceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Audience', required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  sentAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
