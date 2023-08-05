import { createTag } from "../../helper.js"
import { asideTop } from "./aside_top.js"
import { asideMiddle } from "./aside_middle.js"
import { asideBottom } from "./aside_bottom.js"


const sideContents = createTag('div', 'side-content')

sideContents.append( asideTop, asideMiddle, asideBottom )

export { sideContents }
