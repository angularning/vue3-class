import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";
const reactiveMap = new WeakMap();

export function reactive(target: object) {
  if (!isObject(target)) {
    return;
  }
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }
  let exisingProxy = reactiveMap.get(target);
  if (exisingProxy) {
    return exisingProxy;
  }
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}
export function isReactive(value){
    return !!(value && value[ReactiveFlags.IS_REACTIVE])
}