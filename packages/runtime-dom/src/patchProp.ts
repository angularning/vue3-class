import {patchClass} from './module/patchClass'
import { patchStyle } from './module/patchStyle'
import { patchAttr } from './module/patchAttr'
import { patchEvent } from './module/patchEvent'
export function patchProp(el, key, prevValue, nextValue) {
    if(key === 'class'){
        patchClass(el, nextValue)
    } else if(key === 'style'){
        patchStyle(el, prevValue, nextValue)
    } else if(/^on[^a-z]/.test(key)){
        patchEvent(el, key, nextValue)
    } else {
        patchAttr(el, key, nextValue)
    }
}