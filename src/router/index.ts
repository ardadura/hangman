import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import HangmanGameView from "@/views/HangmanGameView.vue";
import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/MainView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      isAuthenticated: false,
    },
  },
  {
    path: "/",
    name: "main",
    component: MainView,
    meta: {
      isAuthenticated: true,
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardView,
        meta: {
          isAuthenticated: true,
        },
      },
      {
        path: "/hangman",
        name: "hangman",
        component: HangmanGameView,
        meta: {
          isAuthenticated: true,
        },
        beforeEnter: (to, from, next) => {
          //checkPermission()
          next();
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
