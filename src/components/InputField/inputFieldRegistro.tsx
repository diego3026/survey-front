import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  icon?: React.ReactNode;
}

const InputFieldRegistro: React.FC<InputFieldProps> = ({ name, type = "text", placeholder, icon }) => {
  const { register } = useFormContext(); 

  return (
    <div className='input-box'>
      {icon}
      <input 
        {...register(name)} 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default InputFieldRegistro;
