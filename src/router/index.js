import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import WallPaper from '../views/WallPaper'
import PicDownload from '../views/PicDownload'
import Us from '../views/Us'
import UseHelp from '../views/UseHelp'
const routes = [

  {
    path: '/',
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
  },{
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

export default router
