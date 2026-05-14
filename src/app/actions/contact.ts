"use server"

import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact"
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createAction = async (prevState:any ,formData:FormData) => {
  if(!formData) return {error : `Form data is missing`}
  const user = await getSession();
  const newContact : ContactType = {
    name : formData.get('name') as string,
    email : formData.get('email') as string,
    userId : Number(user?.id)
  } 
  try {
    await createContact(newContact);
    revalidatePath('/contact');
    return {success:true}
  }catch(error){
 return {error : "Failed to create contact"}
  }
}

export const updateAction = async (prevState:any ,formData:FormData) => {
  const id = formData.get("id") as string
  const user = await getSession();
  const updatedContact : ContactType = {
    name : formData.get('name') as string,
    email : formData.get('email') as string,
    userId : Number(user?.id)
  } 
  try {
    await updateContact(id,updatedContact);
    revalidatePath('/contact');
    return {success:true}
  }catch(error){
 return {error : "Failed to update contact"}
  }
}

export const deleteAction = async (prevState:any ,formData:FormData) => {
  const id = formData.get("id") as string
  try{
    await deleteContact(id);
    revalidatePath('/contact');
    return {success : true}
  }
  catch(error){
    console.log(error)
    return {error : "Failed to delete contact"}
  }
}