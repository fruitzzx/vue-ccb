// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Resource from 'vue-resource'
import { Swipe, SwipeItem, MessageBox, Lazyload } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.$msg = MessageBox
Vue.use(Lazyload)

// http库
Vue.use(Resource)

// 监听全局路由变化
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/home' || to.path === '/card' || to.path === '/invest' || to.path === '/loans' || to.path === '/life') {
    store.state.tabBarShow = true
  } else {
    store.state.tabBarShow = false
  }
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
