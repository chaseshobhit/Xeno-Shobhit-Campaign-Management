import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AudienceCreation from './pages/AudienceCreation';
import CampaignPage from './pages/CampaignPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-audience" element={<AudienceCreation />} />
                <Route path="/campaigns" element={<CampaignPage />} />
            </Routes>
        </Router>
    );
};

export default App;
