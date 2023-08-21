import { helper } from "../../../helpers/helper.js";
import { listItems } from "../../../objects/itemsList_factory.js";

const todoHeader = helper.listHeader('main', 'TODO')

const toDoList = listItems('todo');

const button = helper.createButton('todo')

const toDoCont = (() => {
  const container = helper.newEl('div', 'mainUl-cont')
  container.style = "border-bottom: 1px solid black"

  container.append(todoHeader, toDoList, button)

  return container
})();


export { toDoCont }
