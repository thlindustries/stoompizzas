import axios from 'axios';

const api = axios.create({
  baseURL: 'https://stoompizza-server-production.up.railway.app/',
});

export default api;
