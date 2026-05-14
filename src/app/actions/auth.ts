"use server"

import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";
import { UserType } from "../_types/user";

const API_URL = "http://localhost:3000";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await axios.get(`${API_URL}/users`);
    const user: UserType = response.data.find(
      (u: any) => u.email === email && u.password === password
    );
    if (!user) {
      return { error: "Invalid Credentials" };
    }

    await setSession({name:user.name,email:user.email,id:user.id})

  } catch (error: any) {
    console.log("Actual Error:", error);
    return { error: error.message || "Failed to connect to server" };
  }

  redirect("/contact");
}

export const logout = async () => {
  await deleteSession()
   redirect('/login')
}


