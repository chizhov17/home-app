import { createRouter, createWebHistory, } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import IconsPage from '../components/home-page/IconsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/icons',
          component: IconsPage,
        },
      ],
    },
    {
      path: '/login',
      component: LoginPage,
    },
  ],
})

export default router
