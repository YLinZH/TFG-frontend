import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AIRedactor from "@/views/AIRedactor.vue"
import AISceneGenerator from "@/views/AISceneGenerator.vue"
import manualAIRedactor from '@/views/manualAIRedactor.vue'
import manualAISceneGenerator from '@/views/manualAISceneGenerator.vue'
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
      path: '/AISceneGenerator',
      name: 'AISceneGenerator',
      component: AISceneGenerator
    },
    {
      path: '/manualAIRedactor',
      name: 'ManualAIAIRedactor',
      component: manualAIRedactor
    },
    {
      path: '/manualAISceneGenerator',
      name: 'ManualAISceneGenerator',
      component: manualAISceneGenerator
    }
  ]
})

export default router
