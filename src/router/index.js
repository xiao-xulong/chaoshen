import { createRouter, createWebHashHistory } from 'vue-router'

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
    path: '/Share',
    name: 'Share',
    component: () => import(/* webpackChunkName: "about" */ '../views/Share.vue')
  },
  {
    path: '/QPics',
    name: 'QPics',
    component: () => import(/* webpackChunkName: "about" */ '../views/QPics.vue')
  },
  {
    path: '/xiongThree',
    name: 'xiongThree',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiongThree.vue')
  },
  {
    path: '/activePics',
    name: 'activePics',
    component: () => import(/* webpackChunkName: "about" */ '../views/activePics.vue')
  },
  {
    path: '/activePicsDownload',
    name: 'activePicsDownload',
    component: () => import(/* webpackChunkName: "about" */ '../views/activePicsDownload.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.path === '/') {
    // console.log('a十大大苏打的')
    // console.log(to.path)
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
