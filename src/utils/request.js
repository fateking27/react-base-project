import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8002",
  timeout: 5000,
});

instance.interceptors.request.use((req) => {
  return req;
});

export default instance;
