function newEl(tag, class_name = '', id = '') {
  const el = document.createElement(`${tag}`)

  if (id != '') el.id = `${id}`

  if (class_name != '') el.className = `${class_name}`

  return el
}

function hideEl(el) {
  el.hidden = true
}

function showEl(el) {
  el.hidden = false
}

export { newEl, hideEl, showEl }
