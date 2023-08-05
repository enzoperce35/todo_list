import { createTag } from "../../helper.js"
import { sideContents } from "./aside.js"
import { mainContents } from "./main_content.js"


const main = createTag('div', 'main')

main.append( sideContents, mainContents )

export { main }
