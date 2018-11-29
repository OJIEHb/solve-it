import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/grey-wolf',
      name: 'grey-wolf',
      component: () => import(/* webpackChunkName: "grey-wolf" */ '@/views/GreyWolf.vue')
    },
    {
      path: '/bat-gang',
      name: 'bat-gang',
      component: () => import(/* webpackChunkName: "bat-gang" */ '@/views/BatGang.vue')
    },
    {
      path: '/gravitational-search',
      name: 'gravitational-search',
      component: () => import(/* webpackChunkName: "gravitational-search" */ '@/views/GravitationalSearch.vue')
    },
  ]
})
