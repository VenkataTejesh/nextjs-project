import ContactForm from "@/src/app/_components/ComponentForm"
import { updateAction } from "@/src/app/actions/contact"
import { getContactsById } from "@/src/app/api/contact";

const EditContact = async ({params}:{params : Promise<{id:string}>}) => {
  const {id} = await params;
  const contact = await getContactsById(id);
  return <div className="max-w-md mx-auto p-6 bg-white rounded -lg shadow-md">
    <h1 className="text-2xl fontbold mb-6">Edit Contact</h1>
    <ContactForm action = {updateAction} contact={contact}/>
    
  </div>
}

export default EditContact;