import { newEl } from "../../../helpers/element_helper"
import { toDoCont } from "./todo_tasks.js"
import { defProjCont } from "./default_proj"


const mainContents = newEl('div', 'main-content')

mainContents.append( toDoCont, defProjCont )

export { mainContents }
