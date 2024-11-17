import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getCampaigns = async () => {
  const response = await api.get('/campaigns');
  return response.data;
};

export const createAudience = async (data) => {
  const response = await api.post('/audiences', data);
  return response.data;
};

export default api;
