import { createRouter, createWebHistory } from 'vue-router'
import { authBeforeEnter } from './navigation-guard'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue'),
    beforeEnter: authBeforeEnter
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/Register.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/pages/Post.vue'),
    beforeEnter: authBeforeEnter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLISH_PATH),
  routes
})

export default router
