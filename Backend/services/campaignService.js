const CommunicationLog = require('../models/CommunicationLog');

const sendMessages = async (campaign) => {
  // Simulate sending messages and creating logs
  const recipients = ['user1@example.com', 'user2@example.com']; // Example recipients

  for (const recipient of recipients) {
    const status = Math.random() < 0.9 ? 'SENT' : 'FAILED'; // 90% success rate
    const log = new CommunicationLog({
      campaignId: campaign._id,
      recipient,
      status,
    });
    await log.save();
  }

  campaign.status = 'Completed';
  campaign.sentAt = new Date();
  await campaign.save();
};

module.exports = { sendMessages };
