import axios from "axios";

const BASE_URL = "http://localhost:8081";

// Configure axios defaults
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

// Add request interceptor for authentication
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
