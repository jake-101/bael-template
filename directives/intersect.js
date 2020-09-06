import _throttle from 'lodash/throttle'

// throttled call handler for stagger
const classHandler = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intersected')
        }
    })
}
const throttledHandler = _throttle(classHandler, 200)

function inserted(el, binding) {
    const modifiers = binding.modifiers || {}
    const value = binding.value
    const { handler, options } =
        typeof value === 'object' ? value : { handler: value, options: {} }

    const observer = new IntersectionObserver((entries = [], observer) => {
        if (!el._observe) return // Just in case, should never fire)

        // If is not quiet or has already been
        // initted, invoke the user callback
        if (!modifiers.quiet || el._observe.init) {
            const isIntersecting = Boolean(
                entries.find((entry) => entry.isIntersecting)
            )

            if (handler) {
                handler(entries, observer, isIntersecting)
            } else {
                classHandler(entries)
            }
        }

        // If has already been initted and
        // has the once modifier, unbind
        if (el._observe.init && modifiers.once) unbind(el)
        // Otherwise, mark the observer as initted
        else el._observe.init = true
    }, options)

    el._observe = { init: false, observer }

    el.classList.add('wiv')
    observer.observe(el)
}

function unbind(el) {
    if (!el._observe) return

    el._observe.observer.unobserve(el)
    delete el._observe
}

export const Intersect = {
    inserted,
    unbind,
}

export default Intersect
