import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AIRedactor from "@/views/AIRedactor.vue";
import AISocialHistoryGenerator from "@/views/AISocialHistoryGenerator.vue";
import page404 from "@/views/404.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/AIRedactor",
      name: "AIRedactor",
      component: AIRedactor,
    },
    {
      path: "/AISocialHistoryGenerator ",
      name: "AISocialHistoryGenerator ",
      component: AISocialHistoryGenerator,
    },
    {
      path: "/page404",
      name: "page404",
      component: page404,
    },
    {
      path: "/:pathMatch(.*)*",
      component: page404,
      beforeEnter(to) {
        window.location = "/page404";
      },
    }
  ],
});

export default router;
