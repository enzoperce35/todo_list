import { newEl } from "../helpers/element_helper";
import { storage } from "./storage_module";


const listItems = (obj) => {

  let listObj = (() => {
    return newEl('ul', `${obj}-list`)
  })();

  const items = (() => {
    return storage.allStorage().filter( (i) => JSON.parse(i).type == obj )
  })();

  (() => {
    for(let i=0; i<items.length; i++) {
      const item = JSON.parse(items[i])

      const li = newEl('li')
      li.innerHTML = `${item._title}: ${item._description}`

      listObj.append(li)
    }

    return listObj
  })();

  return listObj
}

export { listItems }
