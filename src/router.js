import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/data',
      name: 'data',
      component: () => import('./views/Data.vue'),
      children: [{
          path: '/users',
          name: 'users',
          component: () => import('./views/Users.vue')
        },
        {
          path: '/bikes',
          name: 'bikes',
          component: () => import('./views/Bikes.vue')
        },
        {
          path: '/rider',
          name: 'rider',
          component: () => import('./views/Rider.vue')
        }
      ]
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('./views/Status.vue')
    },

  ]
})