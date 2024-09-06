// api.js
import axios from 'axios';

// Create an Axios instance with custom configuration
const api = axios.create({
  baseURL: 'https://script.google.com/macros/s/AKfycbzaSdxz532_rI3sAtkts1vcBC6pZiZEZcpJs8FsTj-xRpibJ3Mw8MBw4CE-Hph1i6X-', // Replace with your API base URL
  timeout: 10000, // Optional: Set request timeout (in milliseconds)
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
