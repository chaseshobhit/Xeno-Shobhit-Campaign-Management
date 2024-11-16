import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the `react-dom/client` for React 18
import App from './App'; // Import your main App component
import './index.css'; // Import any global CSS

// Create a root element using React 18's createRoot API
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
