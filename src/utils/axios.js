import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.analyzer.g1tommy.me",
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
