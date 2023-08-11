import { createTag } from "../../helper.js"
import { toDo } from "../../objects/class_todo.js"


const toDoList = createTag('ul', 'todo-list')

function createNewItem() {
  const todo = new toDo('new todo using Pubsub library', 'This is a sample todo description using Pubsub library')

  PubSub.publish( 'createBtnClicked', todo )
}

const createButton = (() => {
  const btn = createTag('button', '', 'add-todo')
  btn.innerText = 'Add ToDo'
  btn.onclick = function() {createNewItem()}

  return btn
})();

const toDoCont = (() => {
  const container = createTag('div', 'todo-cont')
  container.style = "border-bottom: 1px solid black"

  container.append(toDoList, createButton)

  return container
})();


export { toDoCont }
