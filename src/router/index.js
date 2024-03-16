import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AIRedactor from "@/views/AIRedactor.vue"
import AIxxx from "@/views/AIxxx.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AIRedactor',
      name: 'AIRedactor',
      component: AIRedactor
    },
    {
      path: '/AIxxx',
      name: 'AIxxx',
      component: AIxxx
    }
  ]
})

export default router
