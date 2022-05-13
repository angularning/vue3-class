export let activeEffect = undefined;
function cleanupEffect(effect) {
  const { deps } = effect;
  for (let i = 0; i < deps.length; i++) {
    deps[i].delete(effect);
  }
  effect.deps.length = 0;
}
class ReactiveEffect {
  // ts语法
  public active = true; // effect 默认激活状态
  public parent = null;
  public deps = [];
  constructor(public fn: () => void) {}
  run() {
    // 如果是非激活状态 只执行不收集依赖
    if (!this.active) {
      this.fn();
    }
    try {
      this.parent = activeEffect;
      // 当前的effect 和稍后的渲染属性进行关联
      activeEffect = this;
      // 执行effect中的函数的时候要先清空 deps =》activeEffect
      cleanupEffect(this);
      return this.fn();
    } finally {
      // 还原
      activeEffect = this.parent;
      this.parent = null;
    }
  }
  stop() {
      if(this.active){
        this.active = false;
        cleanupEffect(this)
      }
  }
}

export function effect(fn: any) {
  // 根据依赖变化会重新执行
  const _effect = new ReactiveEffect(fn);
  _effect.run();
  const runner = _effect.run.bind(_effect)
  runner.effect = _effect
  return runner
}
const targetMap = new WeakMap();
// 一个effect 对应多个属性，一个属性对应多个effct
export function track(target, type, key) {
  // 通过 WeakMap的格式
  // {对象: Map{name: Set}}
  // 对象 =》 某个属性 =》 多个effect
  if (!activeEffect) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  let shouldTrack = !dep.has(activeEffect);
  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}

export function trigger(target, type, key, value, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let effets = depsMap.get(key);
  if (effets) {
    // 需要拷贝一下
    effets = [...effets];
    effets.forEach((effect) => {
        if (effect !== activeEffect) {
          effect.run();
        }
      });
  }
}
