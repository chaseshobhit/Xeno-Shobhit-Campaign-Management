import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignHistory = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/campaigns')
      .then(res => setCampaigns(res.data))
      .catch(err => console.error('Error fetching campaigns', err));
  }, []);

  return (
    <div>
      <h2>Campaign History</h2>
      <table>
        <thead>
          <tr>
            <th>Campaign ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Audience Size</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign._id}>
              <td>{campaign._id}</td>
              <td>{campaign.status}</td>
              <td>{new Date(campaign.date).toLocaleDateString()}</td>
              <td>{campaign.audience_size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignHistory;
