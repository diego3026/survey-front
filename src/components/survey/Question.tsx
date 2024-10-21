import { QuestionType } from '../../models';
import  Answer  from './Answer';
import './style.css';
import Box from '@mui/material/Box';
import {FieldError, useFormContext} from "react-hook-form";

type questType = {
    question: QuestionType;
};

const Question: React.FC<questType> = ({ question }) => {

    const {register, formState: { errors } } = useFormContext()
    const hasError = errors[`${question.id}`];

    console.log(question)
  return (
      <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%'
      }}>
            <p style={{
                color: "#717171",
                fontWeight: "bold",
            }}>
                {question.question}
            </p>
            <hr style={{color: "#ABBED1"}}/>
          {(question.type.name !== "parrafo") ? (
              question.answers.map((answer, index) => (
                <li key={index} className="respuestas">
                        <label className="radios">
                            <input id={answer.answer.id.toString()}
                                   className={errors ? "radio": "radio-error"}
                                   type="radio"
                                   value={answer.answer.name}
                                   {...register(`${question.id}`, { required: "Este campo es obligatorio" })}
                            />
                            <Answer answer={answer.answer}/>
                        </label>
                </li>
              ))

          ) : (
              <textarea
                        className={hasError ? "textarea-error": "textarea"}
                        placeholder="Escribe tu respuesta aquí"
                        {...register(`${question.id}`, { required: "Este campo es obligatorio" })}
              />
          )}
          {hasError && <div style={{color: "red"}}>
              {(errors[`${question.id}`] as FieldError)?.message}
          </div>}
      </Box>
  );
}

export default Question;