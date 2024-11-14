const CommunicationLog = require('../models/CommunicationLog');
const mongoose = require('mongoose');

// Simulates message delivery with a random outcome
const sendMessage = async (communicationLogId) => {
  try {
    // Randomly determine if the message is sent or failed (90% chance SENT, 10% chance FAILED)
    const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';

    // Find the communication log entry and update the status
    await CommunicationLog.findByIdAndUpdate(
      communicationLogId,
      { status },
      { new: true }
    );

    console.log(`Message ${status} for communication log ID: ${communicationLogId}`);
    return status;
  } catch (error) {
    console.error('Error updating delivery status:', error);
    throw new Error('Failed to update delivery status');
  }
};

// Batch update for the communication status in a pub-sub model (Bonus implementation)
const batchUpdateStatuses = async (communicationLogIds) => {
  try {
    const updatePromises = communicationLogIds.map((id) => sendMessage(id));
    const results = await Promise.all(updatePromises);

    console.log('Batch update results:', results);
    return results;
  } catch (error) {
    console.error('Error in batch updating statuses:', error);
    throw new Error('Failed to perform batch updates');
  }
};

module.exports = {
  sendMessage,
  batchUpdateStatuses,
};
