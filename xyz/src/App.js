import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AudienceCreation from './pages/AudienceCreation';
import CampaignPage from './pages/CampaignPage';

function App() {
  return (
    <AuthProvider>  {/* Wrap the app with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/audience" element={<AudienceCreation />} />
          <Route path="/campaigns" element={<CampaignPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
