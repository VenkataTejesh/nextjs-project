"use server"

import { createUser } from "../api/user";

export const createRegisterAction = async (prevState:any, formData:FormData) => {
  if (!formData) return { error: `Form data is missing` }

  const newUser = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    await createUser(newUser)
    return { success: true }
  } catch (error) {
    return { error: 'Failed to create user' }
  }
}
