import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Conone',
        component: () => import('@/components/conone'),
      },
      {
        path: 'twohangk',
        name: 'Twohangk',
        component: () => import('@/components/twohangk'),
      },
      {
        path: 'sele',
        name: 'Sele',
        component: () => import('@/components/sele'),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
