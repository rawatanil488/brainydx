import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import auth from './modules/auth'
import signup from './modules/signup'
import posts from './modules/posts'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    signup,
    posts
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
