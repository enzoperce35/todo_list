import { createTag } from "../helper.js"
import { nav } from './nav.js'
import { main } from './main/main.js'


const content = createTag('div', 'content')

content.append(nav, main)

export { content }
