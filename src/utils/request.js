import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8002",
  timeout: 5000,
});

//请求拦截器
instance.interceptors.request.use((config) => {
  let tokan = localStorage.getItem("token");
  config.headers.token = tokan;
  return config;
});

//响应拦截器
instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status == 401) {
      setTimeout(() => {
        message.warning("登录已过期，请重新登录");
        window.location.href = "/login"
      }, 500);
    } else if (error?.response?.status == 404) {
      message.error("资源找不到，请重试");
    } else {
      message.error("网络错误，请重试");
    }
    return Promise.reject(error.message);
  }
);

export default instance;
