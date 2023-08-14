import { newEl } from '../helpers/element_helper.js'
import { nav } from './nav.js'
import { main } from './main/main.js'


const content = newEl('div', 'content')

content.append(nav, main)

export { content }
