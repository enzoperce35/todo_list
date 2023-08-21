import { titleize } from "./application_helper";
import { newEl, hideEl, showEl, listHeader, createButton } from "./element_helper";
import { formHeader, userInput, inputLabel, inputField, showForm  } from "./form_helper";


const helper = (() => {

  return { titleize,
           newEl, hideEl, showEl, listHeader, createButton,
           formHeader, userInput, inputLabel, inputField, showForm }
})();

export { helper }
