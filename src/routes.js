import { createRouter, createWebHashHistory } from "vue-router";

const isMobile = () => {
  let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return flag;
}
const routesPc = [
  {
    path: "/",
    component: () => import("./pc/index.vue"),
    meta: {
      name: "Index",
      index: 1
    },
  },
]
const routesMobile = [
  {
    path: "/",
    component: () => import("./index/index.vue"),
    meta: {
      name: "Index",
      index: 1
    },
  },
  {
    path: "/login",
    component: () => import("./login/index.vue"),
    meta: {
      name: "Login",
      index: 2
    },
  },
  {
    path: "/register",
    component: () => import("./register/index.vue"),
    meta: {
      name: "Register",
      index: 2
    },
  },
  {
    path: "/changebuspwd",
    component: () => import("./changebuspwd/index.vue"),
    meta: {
      name: "Changebuspwd",
      index: 3
    },
  },
  {
    path: "/changepwd",
    component: () => import("./changepwd/index.vue"),
    meta: {
      name: "Changepwd",
      index: 3
    },
  },
  {
    path: "/kefu",
    component: () => import("./kefu/index.vue"),
    meta: {
      name: "Kefu",
    },
  },
  {
    path: "/language",
    component: () => import("./language/index.vue"),
    meta: {
      name: "Language",
      index: 2
    },
  },
  {
    path: "/mine",
    component: () => import("./mine/index.vue"),
    meta: {
      name: "Mine",
      index: 1
    },
  },
  {
    path: "/mybill",
    component: () => import("./mybill/index.vue"),
    meta: {
      name: "Mybill",
      index: 2
    },
  },
  {
    path: "/mybill/:id",
    component: () => import("./mybill/detail.vue"),
    meta: {
      name: "MybillInfo",
      index: 3
    },
  },
  {
    path: "/notice",
    component: () => import("./notice/index.vue"),
    meta: {
      name: "Notice",
      index: 2
    },
  },
  {
    path: "/notice/:id",
    component: () => import("./notice/detail.vue"),
    meta: {
      name: "NoticeInfo",
      index: 3
    },
  },
  {
    path: "/recharge",
    component: () => import("./recharge/index.vue"),
    meta: {
      name: "Recharge",
      index: 1
    },
  },
  {
    path: "/rechargehistory",
    component: () => import("./rechargehistory/index.vue"),
    meta: {
      name: "RechargeHistory",
      index: 2
    },
  },
  {
    path: "/rechargehistory/:id",
    component: () => import("./rechargehistory/detail.vue"),
    meta: {
      name: "RechargeHistoryInfo",
      index: 3
    },
  },
  {
    path: "/safe",
    component: () => import("./safe/index.vue"),
    meta: {
      name: "Safe",
      index: 2
    },
  },
  {
    path: "/vip/:id",
    component: () => import("./vip/index.vue"),
    meta: {
      name: "Vip",
      index: 2
    },
  },
  {
    path: "/withdraw",
    component: () => import("./withdraw/index.vue"),
    meta: {
      name: "Withdraw",
      index: 2
    },
  },
  {
    path: "/withdrawhistory",
    component: () => import("./withdrawhistory/index.vue"),
    meta: {
      name: "WithdrawHistory",
      index: 3
    },
  },
  {
    path: "/withdrawhistory/:id",
    component: () => import("./withdrawhistory/detail.vue"),
    meta: {
      name: "WithdrawHistoryInfo",
      index: 4
    },
  },
  {
    path: "/cashoutselect",
    component: () => import("./cashoutselect/index.vue"),
    meta: {
      name: "cashoutselect",
      index: 2
    },
  },
  {
    path: "/chip/:id",
    component: () => import("./chip/index.vue"),
    meta: {
      name: "chip",
      index: 4
    },
  },
  {
    path: "/trade",
    component: () => import("./trade/index.vue"),
    meta: {
      name: "trade",
      index: 5
    },
  },
  {
    path: "/bank",
    component: () => import("./bank/index.vue"),
    meta: {
      name: "bank",
      index: 3
    },
  },
  {
    path: "/bank/:id",
    component: () => import("./bank/info.vue"),
    meta: {
      name: "bankInfo",
      index: 4
    },
  },
  {
    path: "/bank/add",
    component: () => import("./bank/add.vue"),
    meta: {
      name: "bankAdd",
      index: 5
    },
  },
  {
    path: "/rule",
    component: () => import("./rule/index.vue"),
    meta: {
      name: "rule",
      index: 3
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobile() ? routesMobile : routesPc,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
