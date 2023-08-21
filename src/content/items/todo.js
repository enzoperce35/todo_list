function displayTodo() {
  const toDos = storage.allStorage().filter( (todo) => JSON.parse(todo)._description == 'rrr' );

  for(let i=0; i<toDos.length; i++) {
    let todo = JSON.parse(toDos[i])

    let li = newEl('li')
    li.innerHTML = `${todo._title}: ${todo._description}`
    toDoList.append(li)
  }
}

displayTodo()