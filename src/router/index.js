import Vue from 'vue'
import Router from 'vue-router'
import index from '@/dom/index'
import Login from '@/dom/render/login'
import zhuSu from '@/dom/render/zhuSu'
import zc from '@/dom/render/zc'
import jp from '@/dom/render/jp'
import car from '@/dom/render/car'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/zhuSu',
      children: [
        {
          path: '/zhuSu',
          name: 'zhuSu',
          component: zhuSu,
        },
        {
            path: '/zc',
            name: 'zc',
            component: zc,
        },
        {
            path: '/jp',
            name: 'jp',
            component: jp,
        },
        {
            path: '/car',
            name: 'car',
            component: car,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ]
})
