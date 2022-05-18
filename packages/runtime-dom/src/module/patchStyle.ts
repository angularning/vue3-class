export function patchStyle(el, prevValue, nextValue) {
    for (const key in nextValue) {
        el.style[key] = nextValue[key]
    }
    for (const key in prevValue) {
        if (!(key in nextValue)) {
            el.style[key] = ''
        }
    }
}
// const dom = document.createElement('div')
// console.log(dom)
// const style1 = {
//     color: 'red',
//     fontSize: '12px',
// }
// for (const key in style1) {
//     dom.style[key] = style1[key]
// }
// const style2 = {
//     color: 'blue',
//     fontSize: '14px',
//     backgroundColor: 'yellow',
// }
// setTimeout(() => {
//     patchStyle(dom, style1, style2)
//     console.log(dom)
// }, 2000)
