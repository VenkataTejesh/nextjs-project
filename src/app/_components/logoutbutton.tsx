"use client"

import React from "react"
import { logout } from "../actions/auth"
import { useRouter } from "next/navigation"


const LogoutButton = () => {
  const router = useRouter()
  const handleLogout = async () => {
    try{
     await logout();
     router.push('/login');
     router.refresh();
    }
    catch(error){
      console.log(error);
    }
    
  }
  return (
   <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer" onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton