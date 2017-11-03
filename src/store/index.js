import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  // 控制下面的tabbar导航菜单是否显示
  tabBarShow: true,
  time: null,
  loginBol: false,
  spanBol: false,
  imgs: [],
  // 用来存登录用户信息
  userInfo: {}
}
const actions = {
  userLogin ({commit}, userObj) {
    commit('USER_LOGIN', userObj)
  }
}
const mutations = {
  USER_LOGIN (state, userObj) {
    state.userInfo = userObj
  }
}
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
