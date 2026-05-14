import axios from "axios";
import { UserType } from "../_types/user";


const API_URL = "http://localhost:3000";

export const createUser = async (user:any) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data
}