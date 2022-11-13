import { createRouter, createWebHashHistory } from 'vue-router'
import { chaoshen } from './routerInfo/routerInfo'
const routes = [...chaoshen]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.path === '/') {

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
