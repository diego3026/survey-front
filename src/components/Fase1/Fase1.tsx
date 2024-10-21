import React from "react";
import estilo from "./Fase1.module.css";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Fase1Props {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const Fase1: React.FC<Fase1Props> = ({ register, errors }) => {
  return (
    <div className={estilo.contenedor}>
      <div>
        <input
          type="text"
          placeholder="Título"
          className={estilo.input}
          {...register("titulo", { required: true })}
        />
        {errors.titulo && <span className={estilo.error}>El título es obligatorio</span>}
      </div>
      <div>
        <h3 className={estilo.tituloDesc}>Descripción</h3>
        <textarea
          placeholder="Escribe una breve descripción de la encuesta"
          {...register("descripcion", { required: true })}
        ></textarea>
        {errors.descripcion && <span className={estilo.error}>La descripción es obligatoria</span>}
      </div>
    </div>
  );
};

export default Fase1;
