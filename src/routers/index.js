import { createRouter, createWebHistory } from 'vue-router'
import navGuard from './navigation-guard'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/Index.vue'),
    beforeEnter: navGuard.beforeEnter.checkAuth
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
    path: '/oauth',
    name: 'OAuth',
    component: () => import('@/pages/OAuth.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    beforeEnter: navGuard.beforeEnter.checkAuth
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('@/pages/Post.vue'),
    beforeEnter: navGuard.beforeEnter.checkAuth
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import('@/pages/Like.vue'),
    beforeEnter: navGuard.beforeEnter.checkAuth
  },
  {
    path: '/track',
    name: 'Track',
    component: () => import('@/pages/Track.vue'),
    beforeEnter: navGuard.beforeEnter.checkAuth
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: () => import('@/pages/User.vue'),
    props: true,
    beforeEnter: navGuard.beforeEnter.checkUser
  },
  {
    path: '/post/:postId',
    name: 'SinglePost',
    component: () => import('@/pages/SinglePost.vue'),
    props: true,
    beforeEnter: navGuard.beforeEnter.checkPost
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
