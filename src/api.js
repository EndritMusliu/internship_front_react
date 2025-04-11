import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/auth/', // Adjust as needed
});

// Add token to all requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default api;