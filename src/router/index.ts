import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HangmanGameView from "@/views/HangmanGameView.vue";
import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/hangman",
        name: "hangman",
        component: HangmanGameView,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: HelloWorld,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: HelloWorld,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("status") === "loggedIn";
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
