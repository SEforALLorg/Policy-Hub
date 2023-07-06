import axios from "axios";

const checkStatus = (status) => status >= 200 && status < 300;

const instance = axios.create({
  baseURL: "http://182.77.63.150:5300/api/", //"https://kmit-policyhub.herokuapp.com/api/", //"http://192.168.1.39:1337/api/",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  validateStatus: checkStatus,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance };
