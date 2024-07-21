import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // adjust this to your API base URL
});

export default instance;