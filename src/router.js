import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: () => import('./views/Sandbox.vue')
    },
    {
      path: '/examples/chartjs',
      name: 'chartjs',
      component: () => import('./views/examples/ChartJsExample.vue')
    },
    {
      path: '/examples/firebase',
      name: 'firebase',
      component: () => import('./views/examples/FirebaseExample.vue')
    },
    {
      path: '/examples/todo',
      name: 'todo',
      component: () => import('./views/examples/TodoExample.vue')
    }
  ]
});
