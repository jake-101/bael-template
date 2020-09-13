// window resize handler
export const resizeHandler = store => {
    const navbar = document.getElementById('navbar');
    const navHeight = navbar.clientHeight;
    store.commit('browser/SET_NAVHEIGHT', navHeight)
    document.documentElement.style.setProperty('--nav-height', store.state.browser.navHeight + "px");

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

export const mutationHandler = (store, mutation) => {
    const navHeight = mutation.target.clientHeight;
    store.commit('browser/SET_NAVHEIGHT', navHeight)

    document.documentElement.style.setProperty('--nav-height', store.state.browser.navHeight + "px");

}

export const addObserverIfNavBarAvailable = mutObserver => {
    const node = document.getElementById('navbar');
    if (!node) {
        //The node we need does not exist yet.
        //Wait 400ms and try again
        window.setTimeout(addObserverIfNavBarAvailable, 400);
        return;
    }

    const mutOptions = {
        attributes: true,
        childList: true,
    }
    mutObserver.observe(node, mutOptions);
}







