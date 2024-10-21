import { useState } from 'react';
import { LoginModel } from '../../models';
import { useUserStore } from '../index'
import axios from "axios";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useUserStore((state) => state.login);

  const loginHandler = async (dataOld: LoginModel) => {
    setIsLoading(true);
    setError(null);

    const data = {
      ...dataOld,
      username: dataOld.email
    }
    console.log(data)

    try {
      
      const response = await axios.post('/auth/login', data);
      console.log('Respuesta de la API:', response.status);
      
      if (response.status === 200) {
        console.log("se debió haber ejectado ", response.data.token.access)
        localStorage.setItem('token', response.data.token.access);
        console.log("debe llegar aca ", response.data.token.access)
        login(response.data.token.access);
        setIsLoggedIn(true);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Verifique sus credenciales');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginHandler,
    isLoading,
    error,
    isLoggedIn
  };
};

export default useLogin;
