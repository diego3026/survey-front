import estilos from "./Fase2.module.css";
import { Parrafo } from "../Parrafo/Parrafo";
import {Control, FieldErrors, useFieldArray, UseFormRegister} from "react-hook-form";
import {useEffect} from "react";

interface Fase2Props {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  control: Control<any>;
  success: boolean,
  typeQues: any
  questionIndex: number;
}

const Fase2: React.FC<Fase2Props> = ({register, errors, control, success, typeQues, questionIndex }) => {

  const { fields, append,remove } = useFieldArray({
    name: `fases[${questionIndex}].options`,
    control,
  });

  const handleAddOption = () => {
    append({ value: '' });
  };

  useEffect(() => {
    if (success) {
      fields.forEach((_, index) => remove(index))
    }
  }, [success, fields]);

  return (
    <div className={estilos.contenedor}>
      <div>
        <input
          type="text"
          placeholder="Escriba su pregunta"
          className={estilos.pregunta}
          {...register(`fases[${questionIndex}].pregunta`, { required: true })}
        />
        {errors.pregunta && <span className={estilos.error}>La pregunta es obligatoria</span>}
      </div>
      <div>
        <label>Tipo de pregunta</label>
        <select id="select" {...register(`fases[${questionIndex}].tipo`, { required: true })}>
          <option value="opcion multiple">Opción Múltiple</option>
          <option value="parrafo">Parrafo</option>
        </select>
      </div>

      {typeQues === "opcion multiple" && (
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "10px",
          }}>
            {fields.map((field, index) => (
                <div key={field.id} className={estilos.opcion}>
                  <input
                      type="text"
                      placeholder={`Opción ${index + 1}`}
                      {...register(`fases[${questionIndex}].options[${index}].value`, {required: true})}
                  />
                  <button type="button" onClick={() => remove(questionIndex)}>Eliminar</button>
                </div>
            ))}
            <button type="button" onClick={handleAddOption} style={{
                width: "30%",
            }}>Agregar opción</button>
          </div>
      )}
      {typeQues === "parrafo" && <Parrafo />}
    </div>
  );
};

export default Fase2;
