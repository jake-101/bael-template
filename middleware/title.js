export default function ({ store }) {
    store.commit('SET_TITLE', '')
    if (store.state.menuIsActive === !false) {
      console.log('menu')
  
      store.commit('setMenuState', false)
    }

  }