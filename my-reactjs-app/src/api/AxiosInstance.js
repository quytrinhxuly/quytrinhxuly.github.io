// api.js
import axios from 'axios';
import { env } from '../env';

// Create an Axios instance with custom configuration
const api = axios.create({
  baseURL: env.APP_SCRIPT_API_HOST, // Replace with your API base URL
  timeout: 30000, // Optional: Set request timeout (in milliseconds)
  headers: {
    'Content-Type': 'text/plain;charset=utf-8', // Optional: Default headers
    //'Authorization': 'Bearer YOUR_TOKEN', // Optional: Set Authorization header
  },
});

// Add a request interceptor (optional)
api.interceptors.request.use(
  (config) => {
    // Modify request config before sending, if needed
    // For example, attach tokens dynamically if they change
    // config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
api.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response errors, e.g., display error messages
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default api;
