import { todo } from "./class_todo"
import { project } from "./class_project";

const storage = (() => {

  PubSub.subscribe( 'formSubmitted', addItem )

  function allStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while(i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values
  }

  function addToStorage(item) {
    localStorage.setItem( item.title, JSON.stringify(item) )

    //localStorage.clear()

    location.reload()
  }

  function addItem(_, data) {
    const formData = Object.fromEntries(new FormData(data['formData']).entries()),
           formObj = data['formObj'];

    let item = (() => {

      let dataVal = Object.values( formData )

      if (formObj == 'todo') {
        return new todo( ...dataVal )
      }
      else if (formObj == 'project') {
        return new project( ...dataVal )
      }

    })();

    addToStorage(item)
  }


  console.log(allStorage());
  return { allStorage }

})();

export { storage }
