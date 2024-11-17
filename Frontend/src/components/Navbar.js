import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Import the context

const Navbar = () => {
  const { isSignedIn, user, login, logout } = useContext(AuthContext); // Access context values
    console.log(user);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Campaign Management</h1>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/audience" className="navbar-link">Audience Creation</Link>
        <Link to="/campaigns" className="navbar-link">Campaign Page</Link>
      </div>

      <div className="auth-info">
        {!isSignedIn ? (
          <button onClick={login}>Login with Google</button> 
        ) : (
          <div>
            <p>Welcome, {user?.name || 'User'}</p> 
            <button onClick={logout}>Logout</button> 
            {user?.imageUrl && <img src={user.imageUrl} alt={user.name} />} 
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
