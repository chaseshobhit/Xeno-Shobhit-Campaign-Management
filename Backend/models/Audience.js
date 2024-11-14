const mongoose = require('mongoose');

const audienceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  conditions: { type: Array, required: true },
  size: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Audience', audienceSchema);
