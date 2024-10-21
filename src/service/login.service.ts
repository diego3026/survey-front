import { LoginModel, RegisterModel } from "../models";
import axios from "axios";


export const loginService = async (login: LoginModel) => {
   return await axios.post('/auth/login', login);
}

export const registerService = async (register: RegisterModel) => {
    return await axios.post('/auth/register', register);
}

