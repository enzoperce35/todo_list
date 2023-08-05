function createTag(tag, class_name = '', id = '') {
  const el = document.createElement(`${tag}`)

  if (id != '') el.id = `${id}`

  if (class_name != '') el.className = `${class_name}`

  return el
}

export { createTag }
