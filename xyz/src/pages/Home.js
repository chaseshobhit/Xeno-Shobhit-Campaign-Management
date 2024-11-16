import React, { useContext , useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { gapi } from 'gapi-script';
import axios from 'axios';
const Home = () => {
  const { isSignedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState(null); 

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      navigate('/');
    });
  };
  
    // Function to fetch data from the server
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/hello', {
                withCredentials: true, // Include credentials in the request
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
    // Call the fetchData function
    fetchData();
}, []);

  return (
    <div className="home-container">
      {isSignedIn ? (
        <div className="welcome">
          <h1>Welcome to the Campaign Management</h1>
          <button onClick={fetchData} className="fetch-button">Get Campaign Data</button>
          {data ? <p>{data.message}</p> : <p>Loading...</p>}
          {/* <button onClick={handleSignOut} className="auth-button signout">Sign Out</button> */}
        </div>
      ) : (
        <div className="welcome">
          <h1>Please sign in to continue</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
