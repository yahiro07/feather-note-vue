import AboutView from '@/pages/AboutView.vue'
import HomeView from '@/pages/HomeView.vue'
import SettingsView from '@/pages/SettingsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/settings', name: 'settings', component: SettingsView },
    { path: '/about', name: 'about', component: AboutView }
  ]
})

export default router
