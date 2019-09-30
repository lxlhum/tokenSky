import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const state = {
  setLanguage: Cookies.get('language_owner') || 'zh' // 切换语言
}

const getters = {
  setLanguage: state => state.setLanguage
}

const actions = {
  setLanguage ({ commit }, language) {
    commit('SET_LANGUAGE', language)
  }
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.setLanguage = language
    Cookies.set('language_owner', language)
  }
}

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

export default store
