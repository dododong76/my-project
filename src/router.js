import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Phone_1 from './views/Phone_1.vue'
import Phone_2 from './views/Phone_2.vue'
import Phone_3 from './views/Phone_3.vue'
import SMStoStudent from './views/SMStoStudent.vue'
import SMStoMother from './views/SMStoMother.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Phone_1',
    name: 'Phone_1',
    component: Phone_1
  },
  {
    path: '/Phone_2',
    name: 'Phone_2',
    component: Phone_2
  },
  {
    path: '/Phone_3',
    name: 'Phone_3',
    component: Phone_3
  },
  {
    path: '/SMStoStudent',
    name: 'SMStoStudent',
    component: SMStoStudent
  },
  {
    path: '/SMStoMother',
    name: 'SMStoMother',
    component: SMStoMother
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
