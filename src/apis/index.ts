//定义接口
import service from "../utils/axios";

/* 登录接口 */
export const getLogin = (params: { name: string; password: string }) => {
  return service.get("/login", { params: params });
};

/* 获取应用数据接口 */
export const getData = () => {
  return service.get("/getData");
};