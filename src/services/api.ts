import axios from 'axios';

const api = axios.create({
  baseURL: 'https://stoompizza-server.herokuapp.com/',
});

export default api;
