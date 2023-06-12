import axios from 'axios';

const port = '3001';

const configOptions = {
  baseURL: `http://localhost:${port}/`,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
};

const API = axios.create(configOptions);

export default API;