import React from 'react';
import CampaignHistory from '../components/CampaignHistory';
import MessageSender from '../components/MessageSender';

const CampaignPage = () => {
    return (
        <div>
            <h1>Campaign Management</h1>
            <CampaignHistory />
            <MessageSender />
        </div>
    );
};

export default CampaignPage;
