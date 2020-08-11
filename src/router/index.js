import Vue from 'vue'
import VueRouter from 'vue-router'


const Signup = () => import('../views/auth/Signup.vue');
const Landing = () => import('../views/Landing.vue');
const Home = () => import('../views/Home.vue');
const Categories = () => import('../views/Categories.vue');

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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
