"use client"

import { useActionState, useEffect } from "react"
import { ContactType } from "../_types/contact"
import { useRouter } from "next/navigation"

type ContactFormProps = {
  action : (prevState : any, formData : FormData) => Promise<any>
  contact? : ContactType
}

const ContactForm = ({action,contact}: ContactFormProps) => {
  const router = useRouter()
    const [state,formAction] = useActionState(action,null);
    useEffect(() =>{
      if(state?.success){
        router.push('/contact')
      }
    },[state,router])
  
  return   <form action={formAction} className="space-y-3">
        <input type="hidden" name="id" value={contact?.id}/>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text"
      name="name"
      defaultValue={contact?.name || ""}
      placeholder="Enter the name"
      required
      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-3 py-2.5 sm:text-small"/>
  </div>
  <div>
      <label htmlFor="email" className="mt-3 block text-sm font-medium text-gray-700">Email</label>
      <input type="email"
      name="email"
      defaultValue={contact?.email || ""}
      placeholder="Enter the email"
      required
      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-3 py-2.5 sm:text-small"/>
  </div>
  {/* {error && (
    <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
      {error}
    </div>
  )} */}
  <button type="submit"
  className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent bg-blue-600 text-white rounded-md">
    Save Contact
  </button>
  </form>
}

export default ContactForm;