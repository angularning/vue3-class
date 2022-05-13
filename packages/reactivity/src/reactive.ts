import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";
const reactiveMap = new WeakMap();

export function reactive(target: object) {
  let exisingProxy = reactiveMap.get(target);
  if (exisingProxy) {
    return exisingProxy;
  }
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }
  if (!isObject(target)) {
    return;
  }
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}
