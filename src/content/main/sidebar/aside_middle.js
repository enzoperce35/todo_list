import { helper } from "../../../helpers/helper.js";
import { listItems } from "../../../objects/itemsList_factory.js";


const projectHeader = helper.listHeader('project', 'PROJECTS')

const projList = listItems('project');

const button = helper.createButton('project')

const projCont = (() => {
  const container = helper.newEl('div', 'sideUl-cont')

  container.append(projectHeader, projList, button)

  return container
})();

const asideMiddle = helper.newEl('div', 'aside-middle')
asideMiddle.appendChild(projCont)

export { asideMiddle }
