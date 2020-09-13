import { resizeHandler, mutationHandler, addObserverIfNavBarAvailable } from '~/plugins/dom-handlers'
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
    // @link: https://stackoverflow.com/questions/40398054/observe-on-mutationobserver-parameter-1-is-not-of-type-node

    let mutObserver = new MutationObserver(mCallback);

    function mCallback(mutations) {
        for (let mutation of mutations) {
            mutationHandler(store, mutation)
        }
    }

    // start
    resizeHandler(store)
    addObserverIfNavBarAvailable(mutObserver)



}
