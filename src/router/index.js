import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'index',
      redirect: '/',
      component: () => import('views/index'),
      children: [
        {
          path: '/',
          name: 'home-page',
          component: () => import('views/home-page/index')
        }
      ]
    }
  ],
  scrollBehavior (to) { // 滚动行为只有在history模式下才能有用
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
