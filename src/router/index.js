import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "../store/store";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/shop.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/shop.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/product.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/cart.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/checkout.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else if ((to.path === "/login" || to.path === "/register") && authStore.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
