import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';
import * as types from '../store/types';
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Repository from '../views/Repository.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/repository',
    name: 'Resposity',
    meta: {
      requireAuth: true,
    },
    component: Repository
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
})

export default router;
