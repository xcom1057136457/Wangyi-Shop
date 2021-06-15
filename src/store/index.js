import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import home from './home'
import order from './order'
import userManager from './userManager'
import address from './address'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    home,
    order,
    userManager,
    address
  }
})
