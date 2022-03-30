import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home'
import WallPaper from '../views/WallPaper'
import PicDownload from '../views/PicDownload'
import Us from '../views/Us'
import UseHelp from '../views/UseHelp'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/WallPaper',
    name: 'WallPaper',
    component: () => import(/* webpackChunkName: "about" */ '../views/WallPaper.vue')
  },
  {
    path: '/PicDownload',
    name: 'PicDownload',
    component: () => import(/* webpackChunkName: "about" */ '../views/PicDownload.vue')
  }, {
    path: '/Us',
    name: 'Us',
    component: () => import(/* webpackChunkName: "about" */ '../views/Us.vue')
  },
  {
    path: '/UseHelp',
    name: 'UseHelp',
    component: () => import(/* webpackChunkName: "about" */ '../views/UseHelp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.path === '/') {
    console.log('a十大大苏打的')
    console.log(to.path)
    return next()
  } else {
    const token = window.sessionStorage.getItem('angle')
    if (token === null || '') {
      return next({ name: 'Login' })
    } else {
      return next()
    }
  }
})
export default router
