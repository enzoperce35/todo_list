import { newEl } from "../../helpers/element_helper"
import { toDoCont } from "./todo_tasks.js"


const mainContents = newEl('div', 'main-content')

mainContents.append( toDoCont )

export { mainContents }
