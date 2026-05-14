import Link from "next/link";
import React from "react"
import LogoutButton from "./logoutbutton";
import { getSession } from "../_lib/session";
import { logout } from "../actions/auth";

const Navbar = async () => {
  const session = await getSession();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href='/' className="text-xl font-bold text-blue-600">
           Contact manager
        </Link>
        <div className="flex items-center spaxe-x-4">
          { session ? (
            <>
            <Link href='/contact' className="hover: text-blue-600 mr-8">
              Contacts
            </Link>
            <LogoutButton/>
            
            </>
            
          ): (
            <>
            <Link href='/login' className="hover: text-blue-600 mr-6">
              Login
            </Link>
            <Link href='/register' className="hover: text-blue-600 mr-8">
              Register
            </Link>
            </>
          )}
        </div>

      </div>

    </nav>
  )
}

export default Navbar;