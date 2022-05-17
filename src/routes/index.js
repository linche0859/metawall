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
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    beforeEnter: authBeforeEnter
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/pages/Post.vue'),
    beforeEnter: authBeforeEnter
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import('@/pages/Like.vue'),
    beforeEnter: authBeforeEnter
  },
  {
    path: '/track',
    name: 'Track',
    component: () => import('@/pages/Track.vue'),
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
