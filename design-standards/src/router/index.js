import { createRouter, createWebHashHistory } from "vue-router";

const routes = [

  {
    path: "/layout",
    name: "layout",

    component: () => import("../views/layout.vue"),
    children: [
      {
        path: "/",
        name: "Home",

        component: () => import("../views/Home.vue"),
      },
      {
        path: "ConExternalv",
        name: "ConExternalv",
        component: () => import("../views/ConExternalv.vue"),
      },
      {
        path: "ConInternal",
        name: "ConInternal",
        component: () => import("../views/ConInternal.vue"),
      },
      {
        path: "ConOther",
        name: "ConOther",
        component: () => import("../views/ConOther.vue"),
      },
      {
        path: "ConStairs",
        name: "ConStairs",
        component: () => import("../views/ConStairs.vue"),
      },
      {
        path: "ConAll",
        name: "ConAll",
        component: () => import("../views/ConAll.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
