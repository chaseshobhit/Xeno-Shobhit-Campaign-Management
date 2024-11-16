import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleAuth = ({ setUser }) => {
  const handleSuccess = (credentialResponse) => {
    axios.post('http://localhost:5000/auth/google', { tokenId: credentialResponse.credential })
      .then(res => {
        setUser(res.data.user);
        alert('Logged in successfully!');
      })
      .catch(err => console.error('Login failed', err));
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.error('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
