import ContactForm from "../../_components/ContactForm";
import { createAction } from "../../actions/contact";

const addNewContact = () => {
  return <div className="max-w-md mx-auto p-6 bg-white rounded -lg shadow-md">
    <h1 className="text-2xl fontbold mb-6">Create New Contact</h1>
    <ContactForm action = {createAction}/>
    
  </div>
}

export default addNewContact;