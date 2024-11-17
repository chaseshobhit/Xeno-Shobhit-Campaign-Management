import React from 'react';
import CampaignHistory from '../components/CampaignHistory';
import MessageSender from '../components/MessageSender';

const CampaignPage = () => {
  console.log("Campaign");
  return (
  
  <div>
    <h2>Campaigns Overview</h2>
    <CampaignHistory />
    <MessageSender />
  </div>
)};

export default CampaignPage;
