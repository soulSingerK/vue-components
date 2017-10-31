export function createDom(li, text, className) {
  let el = document.createElement(li)
  el.innerText = text || ''
  el.className = className || ''
  return el
}
