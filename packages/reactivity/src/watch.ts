import { isObject, isFunction } from '@vue/shared'
import { ReactiveEffect } from './effect'
import { isReactive } from './reactive'
// source: 用户监听的值
export function watch(source, cb) {
    let getter
    let cleanup
    if (isReactive(source)) {
        getter = () => traversal(source)
    } else if (isFunction(source)) {
        getter = source
    } else {
        return
    }
    const onCleanup = (fn) => {
        cleanup = fn
    }
    let oldValue
    const job = () => {
        if (cleanup){
            cleanup()
        }
        let newValue = effect.run()
        cb(newValue, oldValue, onCleanup)
        oldValue = newValue
    }
    const effect = new ReactiveEffect(getter, job)

    oldValue = effect.run()
}

function traversal(value, set = new Set()) {
    if (!isObject(value)) return value
    if (set.has(value)) {
        return value
    }
    set.add(value)
    for (let key in value) {
        traversal(value[key], set)
    }
    return value
}
