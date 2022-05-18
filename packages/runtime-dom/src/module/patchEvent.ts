export function patchEvent(el, eventName, nextValue) {
    // 绑定事件，先remove，在add性能不好，使用 自定义事件，更改里面的调用方法
    let invokers = el._vei || (el._vei = {})
    let exits = invokers[eventName]
    if (exits) {
        // 存在
        exits.value = nextValue
    } else {
        // 事件不存在
        let event = eventName.slice(2).toLowerCase()
        if (nextValue) {
            const invoker = (invokers[eventName] = createInvoker(nextValue))
            el.addEventListener(event, invoker)
        } else if (exits) {
            el.removeEventLister(event, exits)
        }
    }
}
function createInvoker(callback) {
    const invoker = (e) => invoker.value(e)
    invoker.value = callback
    return invoker
}

// const dom = document.createElement('div')

// patchEvent(dom, 'aaa', () => {
//     console.log('aaa')
// })
// patchEvent(dom, 'bbb', () => {
//     console.log('bbb')
// })

// console.log(dom._vei)

// setTimeout(() => {
//     patchEvent(dom, 'aaa', () => {
//         console.log('change aaa')
//     })
//     console.log(dom._vei)
// }, 2000)
