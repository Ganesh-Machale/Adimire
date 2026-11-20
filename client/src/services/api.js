import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getServices = async () => {
  const response = await API.get('/services');
  return response.data;
};

export const submitContact = async (data) => {
  const response = await API.post('/contact', data);
  return response.data;
};

export const getCareers = async () => {
  const response = await API.get('/careers');
  return response.data;
};

export default API;
