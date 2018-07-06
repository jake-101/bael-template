export default function ({ store }) {
    store.commit('SET_TITLE', '')
    store.commit('SET_RESULTS', null)
    if (store.state.menuIsActive === !false) {
      console.log('menu')
     

      store.commit('setMenuState', false)
    }

  }