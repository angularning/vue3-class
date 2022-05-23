import { ShapeFlags, isString, isArray } from '@vue/shared'
export function createVnode(type, props, children = null) {
    let shapeFlag = isString(type) ? ShapeFlags.ELEMENT : 0
    const vnode = {
        type,
        props,
        children,
        key: props?.key,
        __v_isVnode: true,
        shapeFlag,
    }
    if (children) {
        let type = 0
        if (isArray(children)) {
            type = ShapeFlags.ARRAY_CHILDREN
        } else {
            children = String(children)
            type = ShapeFlags.TEXT_CHILDREN
        }
    }
    vnode.shapeFlag |= type
    return vnode
}
export const isVnode = (value) => {
    return !!(value.__v_isVnode)
}