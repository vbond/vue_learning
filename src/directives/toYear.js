export default {
    bind(el, binding, vnode){
        let value = vnode.elm.innerText
        if (value) {
            vnode.elm.innerText = value ? value.substring(0, 4) : ''
        }
    }
}