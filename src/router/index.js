import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    redirect: '/index',
    path: '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/register")
  },
  {
    path: '/index',
    name: 'index',
    component: () => import("../views/index"),
    redirect: '/index/home',
    beforeEnter(to,from,next){
      let token = localStorage.getItem("token");
      if(token) {
        next()
      }else {
        next("/login")
      }
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import("../views/home/index")
      },
      {
        path: 'order',
        name: 'order',
        component: () => import("../views/order/index"),
        redirect: '/index/order/notPay',
        children: [
          {
            name: 'notPay',
            path: 'notPay',
            component: () => import("../views/order/notPay")
          },
          {
            name: 'pay',
            path: 'pay',
            component: () => import("../views/order/pay")
          },
          {
            name: 'shipped',
            path: 'shipped',
            component: () => import("../views/order/shipped")
          },
          {
            name: 'complete',
            path: 'complete',
            component: () => import("../views/order/complete")
          }
        ]
      },
      {
        path: 'shopcar',
        name: 'shopcar',
        component: () => import("../views/shopcar/index")
      },
      {
        path: 'user',
        name: 'user',
        component: () => import("../views/user/index")
      },
      {
        path: 'shopList',
        name: 'shopList',
        component: () => import("../views/shopList/index")
      },
      {
        path: 'confirmOrder',
        name: 'confirmOrder',
        component: () => import("../views/shopcar/confirmOrder")
      },
      {
        path: 'adminIndex',
        name: 'adminIndex',
        component: () => import("../views/adminControl/index")
      },
      {
        path: 'setIndex',
        name: 'setIndex',
        component: () => import("../views/user/set")
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
