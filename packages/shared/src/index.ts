export const isObject = (value: any) => {
    return value !== null && typeof value === 'object'
}
export const isFunction = (value: any) => {
    return value !== null && typeof value === 'function'
}

export const isArray = (value: any) => {
    return value !== null && Array.isArray(value)
}
