import { isFunction } from '@vue/shared'
import { ReactiveEffect, trackEffects, triggerEffects } from './effect'
export const computed = (getterOrOptions: any) => {
    let onlyGetter = isFunction(getterOrOptions)
    let getter
    let setter
    if (onlyGetter) {
        getter = getterOrOptions
        setter = () => {}
    } else {
        getter = getterOrOptions.get
        setter = getterOrOptions.set
    }
    return new ComputedRefImpl(getter, setter)
}

class ComputedRefImpl {
    private _value
    private effect
    private dep = new Set()
    private __v_isReadonly = true
    private __v_isRef = true
    // 默认取值的时候进行计算 用一个dirty值来标识
    private _dirty = true
    constructor(getter, public setter) {
        this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
                this._dirty = true
                triggerEffects(this.dep)
            }
        })
    }
    get value() {
        trackEffects(this.dep)
        if (this._dirty) {
            this._dirty = false
            this._value = this.effect.run()
        }
        return this._value
    }
    set value(newValue) {
        this.setter(newValue)
    }
}
