import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      meta:{
        title : '加班/休假'
      },
      component: () => import('../views/home')
    },
    {
      path: '/order',
      meta:{
        title : '筛选'
      },
      component: () => import('../views/order')
    },
    {
      path: '/login',
      meta:{
        title : '登录'
      },
      component: () => import('../views/login')
    },
    {
      path: '/detail',
      meta:{
        title : '详情页'
      },
      component: () => import('../views/detail')
    },
    {
      path: '/commit',
      meta:{
        title : '申请页'
      },
      component: () => import('../views/commit')
    }
  ]
})

router.beforeEach((to,from,next) => {
  document.title = to.meta.title;
  next();//不加next不会渲染视图
})

export default router;
