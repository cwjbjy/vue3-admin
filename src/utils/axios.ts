//axios服务
import axios from "axios";
//新增
import { CODE_LOGGED_OTHER, CODE_RELOGIN } from '../config/returnCodeMap';
import { ACCESS_TOKEN, AUTH } from '../config/constant';
import router from '../router';

const service = axios.create({
  baseURL: "//127.0.0.1:4000",
  timeout: 30000,
});

service.interceptors.request.use(
    (config) => {
      let { headers } = config;
      const tk = localStorage.getItem(ACCESS_TOKEN);
      tk &&
        Object.assign(headers, {
          [AUTH]: tk,
        });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  
  service.interceptors.response.use(
    (res) => {
      let { data } = res;
      if (data.returncode === CODE_RELOGIN || data.returncode === CODE_LOGGED_OTHER) {
        router.push('/login');
        //清除动态路由缓存
        location.reload();
      }
      return res;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  

export default service;