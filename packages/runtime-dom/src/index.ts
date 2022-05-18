import { nodeOps } from './nodeOps'
import { patchProp } from './patchProp'
import {createRenderer} from '@vue/runtime-core'
export const renderOptions = Object.assign({ patchProp }, nodeOps)

export function render(vnode, container){
    createRenderer(renderOptions).render(vnode, container)
}