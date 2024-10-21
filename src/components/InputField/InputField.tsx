import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
  icon?: JSX.Element;
}

const InputField: React.FC<InputFieldProps> = ({ name, placeholder, type = 'text', icon }) => {
  const { register, formState: { errors } } = useFormContext(); 

  return (
    <div className='input-box'>
      {icon && <div className="icono">{icon}</div>}
      <input
        {...register(name, { required: `${placeholder} es obligatorio` })}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && <p className="error-message">{(errors[name] as FieldError)?.message}</p>}
    </div>
  );
};

export default InputField;
