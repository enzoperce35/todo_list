import { form } from "../../objects/form_factory.js";
import { showForm } from "../../helpers/form_helper.js";

const toDoForm = form('todo', 'New Todo').compose( 'title', 'description', 'submit'),
      projForm = form('proj', 'New Project').compose( 'title', 'description', 'submit');

PubSub.subscribe( 'createBtnClicked', showForm )

export { toDoForm, projForm }
