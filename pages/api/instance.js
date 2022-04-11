import axios from 'axios';

const checkStatus = (status) => status >= 200 && status < 300;
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://192.168.1.108:1337/api';
 
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  validateStatus: checkStatus,
});


instance.interceptors.request.use(config => {
    return config;
  },  (error) => {
    return Promise.reject(error);
  });



export { instance };