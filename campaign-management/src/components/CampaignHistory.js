import React, { useEffect, useState } from 'react';
import axios from '../api';

const CampaignHistory = () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('/campaigns');
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };
        fetchCampaigns();
    }, []);

    return (
        <div>
            <h2>Campaign History</h2>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign.id}>
                        <strong>{campaign.name}</strong> - Sent on {campaign.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignHistory;
