import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Loginform from '../views/Loginform.vue'
import Modview from '../views/Modview.vue'
//import Lobby from '../views/Lobby.vue'


Vue.use(VueRouter)

const routes = [

  /*{
    path: '/',
    name: 'Login',
    component: Loginform
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import('../views/Lobby.vue')
  },*/
  {
    path: '/',
    name: 'Modview',
    component: Modview
  },
]

const router = new VueRouter({
  routes
})

export default router
