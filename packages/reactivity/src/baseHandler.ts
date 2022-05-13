import { track } from "./effect";
import { trigger } from "./effect";
// 判断是否是一个代理对象，如果是的话跳过
export const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}
export const mutableHandlers = {
  get(target, key, receiver) {
    // 要使用Reflect方法保证 依赖都能触发
    const res = Reflect.get(target, key, receiver);
    // 判断是否是一个代理对象，如果是的话跳过
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    track(target, "get", key);
    return res;
  },
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const res = Reflect.set(target, key, value, receiver);
    if (oldValue !== value) {
      trigger(target, "set", key, value, oldValue);
    }
    return res;
  },
};
