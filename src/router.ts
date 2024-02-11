import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from './views/AboutView.vue'
import HomeViewVue from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeViewVue },
    { path: '/about', name: 'about', component: AboutViewVue }
  ]
})

export default router
