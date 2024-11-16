import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const signIn = (user) => {
        setUser(user);
        setIsSignedIn(true);
    };

    const signOut = () => {
        setUser(null);
        setIsSignedIn(false);
    };

    return (
        <AuthContext.Provider value={{ user, isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
