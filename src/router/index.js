import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import notfound from '../views/notfound.vue'
import Postdetails from '../views/Postdetails.vue'
import Createblog from '../views/Createblog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: notfound
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/posts/:id',
    name: 'Postdetails',
    component: Postdetails,
    props: true
  },
  {
    path: '/posts',
    redirect: '/'
  },
  {
    path: '/newblog',
    name: 'Createblog',
    component: Createblog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
