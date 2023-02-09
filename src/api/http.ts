import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { GlobalConfig } from "@/stores/counter";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000,
  withCredentials: true
};

class RequestHttp {
  axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      let globalConfig = GlobalConfig();
      config.headers.set("x-access-token", globalConfig.token);
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

  }
}

export default new RequestHttp(config);