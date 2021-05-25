import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCars from '../components/AppCars.vue'
import AddCar from '../components/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cars',
    name: 'Home'
  },
  {
    path: '/cars',
    component: AppCars,
    name: 'cars'
  },
  {
    path: '/add',
    component: AddCar,
    name: 'add'
  },
  {
    path: '/edit/:id',
    component: AddCar,
    name: 'edit'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
