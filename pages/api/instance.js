import axios from 'axios';

const checkStatus = (status) => status >= 200 && status < 300;
// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

 
const instance = axios.create({
  baseURL: "https://vkh-dev.onrender.com/api/", //http://182.77.63.150:5300/api/
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