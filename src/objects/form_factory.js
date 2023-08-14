import { newEl, hideEl } from "../helpers/element_helper";
import { formHeader, userInput, inputField } from "../helpers/form_helper";


const form = (obj, head = '') => {

  const header = formHeader(head),
         title = inputField('text', obj, 'title'),
   description = inputField('text', obj, 'description'),
        submit = userInput('submit', obj, 'Submit');

  function compose(...args) {
    for(let i=0; i < args.length; i++) {
      components.append(eval(args[i]))
    }

    return components
  }

  const components = (() => {
    const formEl = newEl('form', '', `${obj}-form`)
    formEl.append(header)

    hideEl(formEl)

    return formEl
  })();

  return { compose }
}

export { form }
