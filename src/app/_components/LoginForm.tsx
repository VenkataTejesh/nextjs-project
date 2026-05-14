"use client"

import { loginAction } from "../actions/auth"
import { useState } from "react"

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setError(null)
    const result = await loginAction(formData)
    if (result?.error) {
      setError(result.error)
    }
  }

  return (
  <form action={handleSubmit} className="space-y-3">
    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email"
      name="email"
      placeholder="Enter the email"
      required
      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-3 py-2.5 sm:text-small"/>
  </div>
  <div>
      <label className="mt-3 block text-sm font-medium text-gray-700">Password</label>
      <input type="password"
      name="password"
      placeholder="Enter the password"
      required
      className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none px-3 py-2.5 sm:text-small"/>
  </div>
  {error && (
    <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
      {error}
    </div>
  )}
  <button type="submit"
  className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent bg-blue-600 text-white rounded-md">
    Login
  </button>
  </form>
  )
}

export default LoginForm