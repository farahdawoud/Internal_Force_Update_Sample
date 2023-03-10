import axios from 'axios';

const BASE_URL = 'https://355f-37-245-27-67.in.ngrok.io/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
