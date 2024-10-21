
import './Register.css';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import Button from '@mui/material/Button';
import ImageRegistro from '../../assets/img/imagen_register.png';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import InputFieldRegistro from '../../components/InputField/inputFieldRegistro';
import { RegisterModel } from '../../models/user/RegisterModel';
import useRegister from '../../hooks/user/useRegister';


const Register = () => {
  const { register, isLoading, isSuccess, error } = useRegister(); // Usa el hook personalizado
  const methods = useForm<RegisterModel>();

  const onSubmit: SubmitHandler<RegisterModel> = (data: RegisterModel) => {
    console.log('Datos del formulario:', data);
    register(data); 
  };

  return (
    <div className='background__register'>
      <div className="Register__image">
        <img className='Register__image-img' src={ImageRegistro} alt="" />
      </div>

      <div className={`form-box registro`}>
        <FormProvider {...methods}>
          <form className='form' onSubmit={methods.handleSubmit(onSubmit)}>
            <h1 className="register-title">Crea una cuenta</h1>
            <p className="register-subtitle">Comienza con las encuestas</p>

            {error && <p className="error-message">{error}</p>} 
            {isSuccess && <p className="success-message">Registro exitoso!</p>} 

            <div className='input-box'>
              <InputFieldRegistro 
                name="username" 
                placeholder="Usuario" 
                icon={<FaUser className='icono' />}
              />
            </div>

            <div className='input-box'>
              <InputFieldRegistro 
                name="email" 
                type="email" 
                placeholder="Correo" 
                icon={<FaEnvelope className='icono' />}
              />
            </div>

            <div className='input-box'>
              <InputFieldRegistro 
                name="password" 
                type="password" 
                placeholder="Contraseña" 
                icon={<IoIosLock className='icono' />}
              />
            </div>
            <div className="register__texto-button">
              <Button 
                variant="contained" 
                type="submit" 
                style={{ backgroundColor: "#00B8B0", textTransform: "capitalize" }}
                disabled={isLoading} 
              >
                {isLoading ? 'Registrando...' : 'Registrarse'}
              </Button>
            </div>

            <div className="register-link">
              <p> ¿Ya tienes una cuenta? <a href='/login' className='HiperVinculo'> Login </a></p>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Register;

