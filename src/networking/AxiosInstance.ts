import axios from 'axios';

const BASE_URL = 'https://64083c902f01352a8a8d4a67.mockapi.io/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
