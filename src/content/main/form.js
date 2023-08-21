import { form } from "../../objects/form_factory.js";
import { showForm } from "../../helpers/form_helper.js";

const toDoForm = form('todo').addFields( 'title', 'description'),
      projForm = form('project').addFields( 'title', 'description');

PubSub.subscribe( 'createBtnClicked', showForm )

export { toDoForm, projForm }
