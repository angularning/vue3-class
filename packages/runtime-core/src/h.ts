import { isObject, isArray } from '@vue/shared'
import { createVnode, isVnode } from './vnode'
export function h(type, propsChildren, children) {
    // 有多种情况的渲染
    // 1. h('div', {style: {color: 'red'}}, '文本') // 三个参数正常
    // 2. h('div', '文本') // 两个参数
    // 3. h('div', {style: {color: 'red'}}) // 两个参数
    // 4. h('div', {})
    const len = arguments.length
    if (len === 2) { // 把儿子包装成数组
        if (isObject(propsChildren) && !isArray(propsChildren)) {
            if (isVnode(propsChildren)) {
                return createVnode(type, null, propsChildren)
            }
            return createVnode(type, propsChildren)
        } else {
            return createVnode(type, null, propsChildren)
        }
    } else {
        if (len > 3) {
            children = Array.from(arguments).slice(2)
        } else if(len === 3 && isVnode(children)) {
            // 3个参数
            children = [children]
        }
        return createVnode(type, propsChildren, children) // children 两种情况，文本，数组
    }
}
