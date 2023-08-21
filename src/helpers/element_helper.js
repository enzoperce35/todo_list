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

function listHeader(group, text = '') {
  const header = newEl('p', `${group}-header`)
  header.innerText = text

  return header
}

function createButton(obj) {
  const btn = newEl('button', 'createBtn', '')
  btn.innerText = 'Add'
  btn.onclick = function() { PubSub.publish( 'createBtnClicked', obj ) }

  return btn
};

export { newEl, hideEl, showEl, listHeader, createButton }
