import { createRouter, createWebHistory, } from 'vue-router'
import Home from '../components/Home.vue'
import Authorization from '../components/Authorization.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Authorization,
    },
  ],
})

export default router
