import { newEl } from "../../helpers/element_helper";

const projectHeader = (() => {
  const header = newEl('p', '', 'projects-header')
  header.innerText = 'PROJECTS'

  return header
})();

const projectList = newEl('ul', 'project-list')

const createButton = (() => {
  const btn = newEl('button', '', 'add-project')
  btn.innerText = 'Add Project'
  btn.onclick = function() { PubSub.publish( 'createBtnClicked', 'proj' ) }

  return btn
})();


const components = (() => {
  const container = newEl('div', 'project-cont')

  container.append(projectHeader, projectList, createButton)

  return container
})();


const asideMiddle = newEl('div', 'aside-middle')
asideMiddle.appendChild(components)

export { asideMiddle }
