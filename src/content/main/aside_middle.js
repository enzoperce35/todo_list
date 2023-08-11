import { createTag } from "../../helper"
import { project } from "../../objects/class_project"


function createNewProject() {
  const proj = new project('new sample project using pubsub-js library', 'This is a sample project description')

  PubSub.publish( 'createBtnClicked', proj)
}

const projectHeader = (() => {
  const header = createTag('p', '', 'projects-header')
  header.innerText = 'PROJECTS'

  return header
})();

const projectList = createTag('ul', 'project-list')

const createButton = (() => {
  const btn = createTag('button', '', 'add-project')
  btn.innerText = 'Add Project'
  btn.onclick = function() {createNewProject()}

  return btn
})();


const components = (() => {
  const container = createTag('div', 'project-cont')

  container.append(projectHeader, projectList, createButton)

  return container
})();


const asideMiddle = createTag('div', 'aside-middle')
asideMiddle.appendChild(components)

export { asideMiddle }
