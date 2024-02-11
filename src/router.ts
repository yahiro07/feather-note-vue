import AboutViewVue from '@/pages/AboutView.vue'
import HomeViewVue from '@/pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeViewVue },
    { path: '/about', name: 'about', component: AboutViewVue }
  ]
})

export default router
