import axios from 'axios';

const BASE_URL =
  'https://9980-2001-8f8-1b2f-c884-cd31-3946-a0ff-8af6.eu.ngrok.io/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
