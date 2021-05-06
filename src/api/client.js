import axios from 'axios';

const client = axios.create({
  baseURL: 'https://encapture-api.herokuapp.com',
});

export default client;
