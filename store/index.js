

export const state = () => {
  return {
    menuIsActive: false,
    menuInitial: true,
    info: {},
    current: {},
    categories: [],
    pagination: false,
    totalPages: null,
    settings: {},

  }
}
export const actions = {

  async fetchInfo({ commit }, $content) {
    try {
      const info = await $content("setup", "info").fetch();
      const connect = await $content("setup", "connect").fetch();
      const categories = await $content("category").fetch();
      commit('SET_INFO', info)
      commit('SET_CONNECT', connect.connectlinks)
      commit('SET_CATEGORIES', categories)
    } catch (e) {
      const error = 'Initial Setup Error: ' + e.message + e
      console.warning(error)
      commit('SET_ERROR', error);
    }
  }





}

export const mutations = {
  // NEW MUTATIONS
  SET_INFO(state, info) {
    state.info = info
  },
  SET_ERROR(state, error) {
    state.info = error
  },
  SET_CONNECT(state, data) {
    state.connect = data
  },
  SET_CURRENT(state, data) {
    state.current = data
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  SET_PAGINATION(state, data) {
    state.pagination = data
  },
  SET_TOTALPAGES(state, data) {
    state.totalPages = data
  },

  setMenuState(state, menuIsActive) {
    state.menuIsActive = menuIsActive
  },

  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },

}




