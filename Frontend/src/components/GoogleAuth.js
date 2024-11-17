import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import AuthContext from "../context/AuthContext";

const GoogleAuth = () => {
  const { isSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect the user to the Home page after successful login
      navigate("/home");
    }
  }, [isSignedIn, navigate]);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div className="auth-container">
      {isSignedIn ? (
        <button onClick={handleSignOut} className="auth-button signout">
          Sign Out
        </button>
      ) : (
        <button onClick={handleSignIn} className="auth-button signin">
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
