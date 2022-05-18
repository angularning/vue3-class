export const nodeOps = {
    insert(child, parent, anchor){
        parent.insertBefore(child, anchor || null)
    },
    remove(child){
        const parent = child.parentNode
        if(parent){
            parent.removeChild(child)
        }
    },
    setElementText(el, text){
        el.textContent = text
    },
    setText(node, text){
        node.nodeValue = text
    }
}