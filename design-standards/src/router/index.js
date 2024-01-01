import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/Home',
    name: 'HomeH',

    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'layout',

    component: () => import('../views/layout.vue'),
    children: [{
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
  ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
