import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
    },

    mutations: {

      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      },
      toggleMenuInitial(state) {
        state.menuInitial = !state.menuInitial
      }

    }
  })

export default createStore
