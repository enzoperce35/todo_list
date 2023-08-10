import { createTag } from "../../helper.js"
import { toDoCont } from "./todo_tasks.js"


const mainContents = createTag('div', 'main-content')

mainContents.append( toDoCont )

export { mainContents }
