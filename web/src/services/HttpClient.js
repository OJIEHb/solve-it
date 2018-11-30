import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000',
});

export default axiosInstance;
