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
    this.axiosInstance.interceptors.request.use((value: InternalAxiosRequestConfig) => {
      let globalConfig = GlobalConfig();

      return value;
    }, (error) => {
      console.log(error);
    });

  }
}

export default new RequestHttp(config);