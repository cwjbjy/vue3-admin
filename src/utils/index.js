import { ROLE } from "../config/constant";

// 权限检查方法
export function has(value) {
  let isExist = false;
  // 获取用户按钮权限
  let btnPermissionsStr = localStorage.getItem(ROLE);

  if (btnPermissionsStr == undefined || btnPermissionsStr == null) {
    return false;
  }

  if (value.indexOf(btnPermissionsStr) > -1) {
    isExist = true;
  }
  return isExist;
}
