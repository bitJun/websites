import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./index/index.vue"),
    meta: {
      name: "Index",
    },
  },
  {
    path: "/login",
    component: () => import("./login/index.vue"),
    meta: {
      name: "Login",
    },
  },
  {
    path: "/register",
    component: () => import("./register/index.vue"),
    meta: {
      name: "Register",
    },
  },
  {
    path: "/changebuspwd",
    component: () => import("./changebuspwd/index.vue"),
    meta: {
      name: "Changebuspwd",
    },
  },
  {
    path: "/changepwd",
    component: () => import("./changepwd/index.vue"),
    meta: {
      name: "Changepwd",
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
    },
  },
  {
    path: "/mine",
    component: () => import("./mine/index.vue"),
    meta: {
      name: "Mine",
    },
  },
  {
    path: "/mybill",
    component: () => import("./mybill/index.vue"),
    meta: {
      name: "Mybill",
    },
  },
  {
    path: "/mybill/:id",
    component: () => import("./mybill/detail.vue"),
    meta: {
      name: "MybillInfo",
    },
  },
  {
    path: "/notice",
    component: () => import("./notice/index.vue"),
    meta: {
      name: "Notice",
    },
  },
  {
    path: "/notice/:id",
    component: () => import("./notice/detail.vue"),
    meta: {
      name: "NoticeInfo",
    },
  },
  {
    path: "/recharge",
    component: () => import("./recharge/index.vue"),
    meta: {
      name: "Recharge",
    },
  },
  {
    path: "/rechargehistory",
    component: () => import("./rechargehistory/index.vue"),
    meta: {
      name: "RechargeHistory",
    },
  },
  {
    path: "/rechargehistory/:id",
    component: () => import("./rechargehistory/detail.vue"),
    meta: {
      name: "RechargeHistoryInfo",
    },
  },
  {
    path: "/safe",
    component: () => import("./safe/index.vue"),
    meta: {
      name: "Safe",
    },
  },
  {
    path: "/vip/:id",
    component: () => import("./vip/index.vue"),
    meta: {
      name: "Vip",
    },
  },
  {
    path: "/withdraw",
    component: () => import("./withdraw/index.vue"),
    meta: {
      name: "Withdraw",
    },
  },
  {
    path: "/withdrawhistory",
    component: () => import("./withdrawhistory/index.vue"),
    meta: {
      name: "WithdrawHistory",
    },
  },
  {
    path: "/withdrawhistory/:id",
    component: () => import("./withdrawhistory/detail.vue"),
    meta: {
      name: "WithdrawHistoryInfo",
    },
  },
  {
    path: "/cashoutselect",
    component: () => import("./cashoutselect/index.vue"),
    meta: {
      name: "cashoutselect",
    },
  },
  {
    path: "/chip/:id",
    component: () => import("./chip/index.vue"),
    meta: {
      name: "chip",
    },
  },
  {
    path: "/trade",
    component: () => import("./trade/index.vue"),
    meta: {
      name: "trade",
    },
  },
  {
    path: "/bank",
    component: () => import("./bank/index.vue"),
    meta: {
      name: "bank",
    },
  },
  {
    path: "/bank/:id",
    component: () => import("./bank/info.vue"),
    meta: {
      name: "bankInfo",
    },
  },
  {
    path: "/bank/add",
    component: () => import("./bank/add.vue"),
    meta: {
      name: "bankAdd",
    },
  },
  {
    path: "/rule",
    component: () => import("./rule/index.vue"),
    meta: {
      name: "rule",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
