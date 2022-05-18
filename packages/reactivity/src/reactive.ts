import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";
const reactiveMap = new WeakMap();

export function reactive(target: object) {
    // 判断是否是一个对象
  if (!isObject(target)) {
    return;
  }
  // 判断是否有reactive标识
  if (target[ReactiveFlags.IS_REACTIVE]) {
    return target;
  }
  // 如果之前存在代理对象则返回
  let exisingProxy = reactiveMap.get(target);
  if (exisingProxy) {
    return exisingProxy;
  }
  // 创建代理对象
  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}
// 判断是否是一个reactive
export function isReactive(value){
    return !!(value && value[ReactiveFlags.IS_REACTIVE])
}