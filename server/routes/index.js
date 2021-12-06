const router = require("koa-router")();
let accessToken = "init_s_token"; //定义token
let role = ""; //定义用户等级
let menus = []; //定义菜单列表

/* 5s刷新一次token */
setInterval(() => {
  accessToken = "s_tk" + Math.random();
}, 5000);

/* 登录接口获取token */
router.get("/login", async (ctx) => {
  const { name } = ctx.query;
  switch (name) {
    case "admin":
      role = "admin";
      menus = ["home", "about", "manage"]; //管理员能看到首页，说明页和管理页
      break;
    default:
      role = "visitor";
      menus = ["home","about"]; //游客只能看到首页，说明页
      break;
  }
  ctx.body = {
    accessToken,
    role,
    menus,
  };
});

/* 获取应用数据 */
router.get("/getData", async (ctx) => {
  let { authorization } = ctx.headers;
  if (authorization !== accessToken) {
    ctx.body = {
      returncode: 104,
      info: "token过期,重新登录",
    };
  } else {
    ctx.body = {
      code: 200,
      returncode: 0,
      data: { id: Math.random() },
    };
  }
});

module.exports = router;