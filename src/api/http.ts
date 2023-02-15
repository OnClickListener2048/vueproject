import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { GlobalConfig } from "@/stores/counter";
import { ElLoading, ElMessage } from "element-plus";
import { HttpResponseStatus } from "@/api/http_enum";
import router from "@/router";
import type { ResultData } from "@/interface";
import router_path from "@/router/router_path";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  withCredentials: true
};

let loading: ReturnType<typeof ElLoading.service>;

class RequestHttp {
  axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      let globalConfig = GlobalConfig();
      loading = ElLoading.service({ fullscreen: true, text: "加载中" });
      config.headers.set("x-access-token", globalConfig.token);
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    this.axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
      let globalConfig = GlobalConfig();
      loading.close();
      if (response.data.code == HttpResponseStatus.OVERDUE) {
        ElMessage.error(response.data.msg);
        globalConfig.setToken("");
        let newVar = await router.replace(router_path.login);
        if (newVar) {
          console.log(newVar);
        }
      }

      if (response.data.code != HttpResponseStatus.SUCCESS) {
        ElMessage.error(response.data.msg);
        return Promise.reject(response.data);
      }

      return response.data;
    }, (error) =>{
      loading?.close();
      return Promise.reject(error);
    });

  }


  get<T>(url: string, params?: object): Promise<Partial<ResultData<T>>> {
    return this.axiosInstance.get("/geeker" + url, { params });
  }

  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.axiosInstance.post("/geeker" + url, { ...params });
  }

}

export default new RequestHttp(config);