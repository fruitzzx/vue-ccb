import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Card from '@/pages/Card'
import Invest from '@/pages/Invest'
import Loans from '@/pages/Loans'
import Life from '@/pages/Life'
import UserLogin from '@/components/UserLogin'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/card',
      namae: 'card',
      component: Card
    },
    {
      path: '/invest',
      name: 'invest',
      component: Invest
    },
    {
      path: '/loans',
      name: 'loans',
      component: Loans
    },
    {
      path: '/life',
      name: 'life',
      component: Life
    },
    {
      path: '/userlogin',
      name: 'userlogin',
      component: UserLogin
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
