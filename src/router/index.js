import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: "/about",
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: "Home" }
      },
      {
        path: '/shopp',
        component: () => import('../views/shopo/shopp.vue'),
        meta: { title: "商品管理" }
      },
      {
        path: '/shopchakan',
        component: () => import('../views/shopo/shopchakan.vue'),

      },
      {
        path: '/shopxiugai',
        component: () => import('../views/shopo/shopxiugai.vue'),

      },
      {
        path: '/shopadd',
        component: () => import('../views/shopo/shopadd.vue'),
        meta: {
          header: false,
          title: '商品管理',
          item: '修改商品',
        }
      },

      {
        path: '/shopplist',
        component: () => import('../views/shopo/shopplist.vue'),
        meta: { title: "品类管理" },
        children: [
         
        ]
      },
      {
        path: "/shopclassify_id",
        component: import('../views/shopo/shopclassify_id.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/order/order.vue'),
        meta: { title: "订单管理" }
      }
    ]
  },

  {
    path: '/login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
