import axios from 'axios';

const checkStatus = (status) => status >= 200 && status < 300;
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

 
const instance = axios.create({
  baseURL: "https://vkh-dev.herokuapp.com/api",
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