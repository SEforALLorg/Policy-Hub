import axios from 'axios';

const checkStatus = (status) => status >= 200 && status < 300;
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://kmit-vkh.herokuapp.com/api';
 
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  validateStatus: checkStatus,
});


instance.interceptors.request.use(config => {
    // Do something before request is sent
    // if(!config.headers.Authorization) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    // }
    return config;
  },  (error) => {
    return Promise.reject(error);
  });



export { instance };