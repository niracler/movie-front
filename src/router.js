import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import Details from './components/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Table
  },
  {
    path: '/details/:mid',
    name: 'details',
    component: Details,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
