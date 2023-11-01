export function h(tag, props, children) {
  return {tag, props, children}
}
export function mount(vnode, container) {
  const el = document.createElement(vnode.tag);
  el.textContent = vnode.children;
  container.appendChild(el);
}
export function unmount() {}
export function patch() {}
