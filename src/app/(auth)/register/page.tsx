

import RegisterForm from "../../_components/RegisterForm"
import { createRegisterAction } from "../../actions/register"


const RegisterPage = () => {
  return (<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
       <h1 className="text-2xl font-bold mb-6">Register</h1>
       <RegisterForm action = {createRegisterAction}/>

  </div>)
}

export default RegisterPage