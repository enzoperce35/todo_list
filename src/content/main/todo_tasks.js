import { newEl } from "../../helpers/element_helper";


const toDoList = newEl('ul', 'todo-list')

const createButton = (() => {
  const btn = newEl('button', '', 'add-todo')
  btn.innerText = 'Add ToDo'
  btn.onclick = function() { PubSub.publish( 'createBtnClicked', 'todo' ) }

  return btn
})();

const toDoCont = (() => {
  const container = newEl('div', 'todo-cont')
  container.style = "border-bottom: 1px solid black"

  container.append(toDoList, createButton)

  return container
})();


export { toDoCont }
