import { resizeHandler, mutationHandler } from '~/plugins/dom-handlers'
import Intersect from '~/directives/intersect'
import _throttle from 'lodash/throttle'
import Vue from 'vue'

// plugin
export default async ({ store, route }, inject) => {

    require('intersection-observer')
    require('string.prototype.includes')

    Vue.directive('intersect', Intersect)

    // setup dom listeners
    // ~16ms is 60fps
    window.addEventListener(
        'resize',
        _throttle(() => resizeHandler(store), 16)
    )

    // setup navigation mutation observer
    let mutObserver = new MutationObserver(mCallback);


    function mCallback(mutations) {
        for (let mutation of mutations) {
            console.log(mutation)
            mutationHandler(store, mutation)
        }
    }
    function addObserverIfNavBarAvailable(mutObserver) {
        const node = document.getElementById('navbar');
        if (!node) {
            //The node we need does not exist yet.
            //Wait 500ms and try again
            window.setTimeout(addObserverIfNavBarAvailable, 250);
            return;
        }
        const mutOptions = {
            attributes: true
        }
        mutObserver.observe(node, mutOptions);
    }


    // window.addEventListener(
    //     'scroll',
    //     _throttle(() => scrollHandler(store), 16)
    // )

    // kick
    resizeHandler(store)
    addObserverIfNavBarAvailable(mutObserver)



}
