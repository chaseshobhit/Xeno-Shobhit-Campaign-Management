import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleAuth from './components/GoogleAuth';
import Home from './pages/Home';
import AudienceCreation from './pages/AudienceCreation';
import CampaignPage from './pages/CampaignPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        {!user ? (
          <GoogleAuth setUser={setUser} />
        ) : (
          <div>
            <h1>Welcome, {user.name}</h1>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/audience" element={<AudienceCreation />} />
              <Route path="/campaigns" element={<CampaignPage />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
