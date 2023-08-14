import { newEl } from "../../helpers/element_helper.js"
import { sideContents } from "./aside.js"
import { mainContents } from "./main_content.js"
import { projForm, toDoForm } from "./form.js"


const main = newEl('div', 'main')

main.append( sideContents, mainContents, projForm, toDoForm )

export { main }
