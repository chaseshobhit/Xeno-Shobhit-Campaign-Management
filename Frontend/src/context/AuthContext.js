import React, { createContext, useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

// Create the authentication context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize Google API client
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Make sure this is set in .env
        scope: 'email',
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();

        // Set the initial sign-in state
        setIsSignedIn(authInstance.isSignedIn.get());

        // Listen for sign-in state changes
        authInstance.isSignedIn.listen((signedIn) => {
          setIsSignedIn(signedIn);
          if (signedIn) {
            const userProfile = authInstance.currentUser.get().getBasicProfile();
            setUser({
              id: userProfile.getId(),
              name: userProfile.getName(),
              email: userProfile.getEmail(),
              imageUrl: userProfile.getImageUrl(),
            });
          } else {
            setUser(null);
          }
        });
      });
    };

    gapi.load('client:auth2', initClient); // Load Google API client
  }, []);

  // Function to handle login
  const login = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then(() => {
      const userProfile = authInstance.currentUser.get().getBasicProfile();
      setUser({
        id: userProfile.getId(),
        name: userProfile.getName(),
        email: userProfile.getEmail(),
        imageUrl: userProfile.getImageUrl(),
      });
      setIsSignedIn(true);
    });
  };

  // Function to handle logout
  const logout = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signOut().then(() => {
      setUser(null);
      setIsSignedIn(false);
    });
  };

  // Return the context provider with values
  return (
    <AuthContext.Provider value={{ isSignedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
