import { titleize } from "./application_helper";
import { newEl, showEl, hideEl } from "./element_helper";


function formHeader(obj) {
  const header = newEl('p')
  header.innerHTML = 'New ' + titleize(obj)

  const cont = newEl('div')
  cont.append(header)

  return cont
}

function userInput(type, obj, name) {
  let input = newEl('input', '', `${obj}-${name}`);
  input.type = type;
  input.name = name;

  return input
}

function inputLabel(obj, name) {
  let label = newEl('label')
  label.innerText = name.toUpperCase();
  label.setAttribute('for', `${obj}-${name}`)

  return label
}

function inputField(type, obj, name) {
  const field = newEl('div'),
        label = inputLabel(obj, name),
        input = userInput(type, obj, name);

  field.append(label, input)

  return field
}

function showForm(_, obj) {
  const forms = document.getElementsByTagName('form')

  for(let i=0; i<forms.length; i++) {
    const form = forms[i];

    if (form.id == `${obj}-form`){
      showEl(form)
    } else {
      hideEl(form)
    }
  }
}

export { formHeader, userInput, inputLabel, inputField, showForm }
