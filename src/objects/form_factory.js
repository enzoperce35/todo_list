import { helper } from "../helpers/helper";


const form = (obj) => {

  let formObj = (() => {
    const formEl = helper.newEl('form', '', `${obj}-form`)
    helper.hideEl(formEl)

    return formEl
  })();

  const header = helper.formHeader( obj ),
         title = helper.inputField('text', obj, 'title'),
   description = helper.inputField('text', obj, 'description'),
        submit = helper.userInput('submit', obj, 'Submit');

  function addFields(...args) {

    args.forEach( arg => formObj.append( eval(arg) ) )

    formObj.prepend(header)
    formObj.append(submit)

    return formObj
  }

  (function submitHandler() {
    formObj.onsubmit = (e) => {

      e.preventDefault()

      PubSub.publish( 'formSubmitted', {'formData': formObj, 'formObj': obj} )
    }
  })();

  return {formObj, addFields}
}

export { form }
