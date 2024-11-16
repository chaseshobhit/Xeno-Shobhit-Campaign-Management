import React, { useEffect, useState } from 'react';
import { getCampaigns } from '../api';

const CampaignHistory = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCampaigns();
      setCampaigns(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Campaign History</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>{campaign.title} - {campaign.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignHistory;
