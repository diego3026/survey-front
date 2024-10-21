import { useState } from 'react';
import { RegisterModel } from '../../models/user/RegisterModel';
import {useNavigate} from "react-router-dom";
import routes from "../../routes/routes";
import {registerService} from "../../service/login.service";


const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const register = async (data: RegisterModel) => {
    setIsLoading(true);
    setError(null);
    try {
      data.role = 'USER';
      const response = await registerService(data);
      console.log('Respuesta de la API:', response.data);
      navigate(routes.LOGIN);
      
      setIsSuccess(true);
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      setError(err.response?.data?.message || 'Ocurrió un error al registrarse');
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    error,
    register,
  };
};

export default useRegister;
