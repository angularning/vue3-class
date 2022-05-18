export function patchAttr(el, key, nextValue) {
    if(nextValue){
        el.setAttribute(key, nextValue)
    } else {
        el.removeAttribute(key)
    }
}


// const dom = document.createElement('div')
// console.log(dom)
// dom.setAttribute('data', '1')
// setTimeout(() => {
//     patchAttr(dom, 'data', 2)
//     patchAttr(dom, 'data', 3)
//     patchAttr(dom, 'data1', 'data1')
//     console.log(dom)
// }, 2000)
