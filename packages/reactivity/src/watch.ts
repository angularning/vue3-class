import { ReactiveEffect } from "./effect";
import { isReactive } from './reactive'
// source: 用户监听的值
export function watch(source, cb) {
    let getter
    if(isReactive(source)){
        getter = () => source
    }
    let oldValue
    const job = () => {
        let newValue = effect.run()
        cb(newValue, oldValue)
        oldValue = newValue
    }
    const effect = new ReactiveEffect(getter, job)

    oldValue = effect.run()
}