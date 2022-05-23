export const isObject = (value: any) => {
    return value !== null && typeof value === 'object'
}
export const isFunction = (value: any) => {
    return value !== null && typeof value === 'function'
}
export const isString = (value: unknown) => {
    return !!(typeof value === 'string')
}
export const isArray = (value: any) => {
    return value !== null && Array.isArray(value)
}

export const enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 1 << 1,
    STATEFUL_COMPONENT = 1 << 2,
    TEXT_CHILDREN = 1 << 3,
    ARRAY_CHILDREN = 1 << 4,
    SLOTS_CHILDREN = 1 << 5,
    TELEPORT = 1 << 6,
    SUSPENSE = 1 << 7,
    COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
    COMPONENT_KEPT_ALIVE = 1 << 9,
    COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
  }
  

  // 使用位运算 | 把两个类型联合在一起，使用 & 运算判断是否属于某种类型，运算效率高。