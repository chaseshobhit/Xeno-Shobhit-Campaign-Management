import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Ensure this is set in your .env
});

export default instance;
