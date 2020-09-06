
// window resize handler
export const resizeHandler = store => {

    store.commit('browser/SET_WIN_WIDTH', window.innerWidth)
    store.commit('browser/SET_WIN_HEIGHT', window.innerHeight)

    const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )
    store.commit('browser/SET_DOC_HEIGHT', docHeight)
}

export const mutationHandler = (store,mutation) => {
    let root = document.documentElement;
    const navHeight = mutation.target.clientHeight;
    root.style.setProperty('--nav-height', navHeight - 1 + "px");
    store.commit('browser/SET_NAVHEIGHT', navHeight - 1)
}








