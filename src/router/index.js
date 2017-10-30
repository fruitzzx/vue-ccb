import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Card from '@/pages/Card'
import Invest from '@/pages/Invest'
import Loans from '@/pages/Loans'
import Life from '@/pages/Life'
import TelephoneBill from '@/components/TelephoneBill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/many',
      name: 'many',
      component: TelephoneBill
    }
  ]
})
