import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const GoogleAuth = () => {
    const { signIn, signOut, user, isSignedIn } = useContext(AuthContext);

    useEffect(() => {
        if (!window.gapi) return;

        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            }).then(() => {
                const authInstance = window.gapi.auth2.getAuthInstance();
                authInstance.isSignedIn.listen(isSignedIn => {
                    isSignedIn ? signIn(authInstance.currentUser.get()) : signOut();
                });
            });
        });
    }, [signIn, signOut]);

    return (
        <div>
            {isSignedIn ? (
                <button onClick={signOut}>Sign Out</button>
            ) : (
                <button onClick={() => {
                    const authInstance = window.gapi.auth2.getAuthInstance();
                    authInstance.signIn();
                }}>Sign In with Google</button>
            )}
        </div>
    );
};

export default GoogleAuth;
