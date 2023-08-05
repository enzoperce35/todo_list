import { createTag } from "../../helper.js"
import { toDo } from "./todo_tasks.js"
import { projectToDo } from "./todo_projects.js"


const mainContents = createTag('div', 'main-content')

mainContents.append( toDo, projectToDo )

export { mainContents }
