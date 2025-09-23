import HomePage from '@/pages/HomePage.vue'
import MealsPage from '@/pages/MealsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routers = [
  {path: '/', component: HomePage},
  {path: '/meals/:categoryId', component: MealsPage},
  {path: '/:pathMatch(.*)*', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
})

export default router
