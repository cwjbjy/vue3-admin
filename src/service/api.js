//定义接口
import service from "./index";

const API = {};

/* 登录接口 */
API.getLogin = (params) => {
  return service.get("/login", { params: params });
};

/* 获取应用数据接口 */
API.getData = () => {
  return service.get("/getData");
};

export default API;