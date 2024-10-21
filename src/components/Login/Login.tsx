import './Login.css'; 
import { FaUser,FaEnvelope  } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import Button from '@mui/material/Button';
import ImageLogin from '../../assets/img/imagen_login.png';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import InputField from '../InputField/InputField';
import useLogin from '../../hooks/user/useLogin';
import { LoginModel } from '../../models';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from "../../routes/routes";

const Login = () => {
  const { loginHandler, isLoading, error, isLoggedIn } = useLogin();
  const methods = useForm<LoginModel>();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.HOME);
    }
  }, [isLoggedIn, navigate]);

  const onSubmit: SubmitHandler<LoginModel> = (data: LoginModel) => {
    loginHandler(data);
  };

  return (
    <div className='background__login'>
      <div className='form-box login'>
        <div className='form'>
          <h1 className="Login-title">Inicia sesión</h1>
          <p className="Login-subtitle">Bienvenido de vuelta</p>
          
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className='input-box'>
                <InputField name="username" placeholder="Usuario" icon={<FaUser />} />
              </div>
              <div className='input-box'>
                <InputField name="email" placeholder="Correo" icon={<FaEnvelope />} />
              </div>
              <div className='input-box'>
                <InputField name="password" placeholder="Contraseña" type="password" icon={<IoIosLock />} />
              </div>
              {error && <p className="error-message">{error}</p>}
              
              <div className="login__texto-button">
                <Button variant="contained" style={{backgroundColor:"#00B8B0",textTransform:"capitalize"}} type="submit" disabled={isLoading}>
                  {isLoading ? 'Ingresando...' : 'Ingresar'}
                </Button>
              </div>
            </form>
          </FormProvider>

          <div className="login-link">
            <p>¿No tienes una cuenta? <a href='/registro' className='HiperVinculo'> Registrar </a></p> 
          </div>
        </div>
      </div>
      <div className="Login__image">
        <img className='Login__image-img' src={ImageLogin} alt="" />
      </div>
    </div>
  );
};

export default Login;
