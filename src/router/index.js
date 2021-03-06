import Vue from 'vue'
import VueRouter from 'vue-router'

const Signup = () => import('../views/auth/Signup.vue');
const Landing = () => import('../views/Landing.vue');
const Home = () => import('../views/Home.vue');
const Categories = () => import('../views/Categories.vue');
const Cart = () => import('../views/Cart.vue');
const Checkout = () => import('../views/Checkout.vue');
const SearchProduct = () => import('../views/SearchProduct.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [
      {
        path: '', 
        name: 'Home',
        component: Home,
      },
      {
        path: 'categories/:id', 
        name: 'Categories',
        component: Categories,
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout,
      },
      {
        path: 'search/:product_name',
        name: 'Search-Product',
        component: SearchProduct
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
