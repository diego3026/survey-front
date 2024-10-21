import estilo from './Encuesta.module.css'
import { Button } from "@mui/material";
import { CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import Fase1 from "../../components/Fase1/Fase1";
import Fase2 from "../../components/Fase2/Fase2";
import { Botones } from "../../components/Botones/Botones";
import { SubmitHandler, useForm } from "react-hook-form";
import useEncuesta from "../../hooks/survey/useEncuesta";
import { SurveyView } from "../../models";
import { builSurvey } from '../../utils'
import {useState} from "react";

function Encuesta() {
  const [fases, setFases] = useState<SurveyView[]>([{ titulo: '', descripcion: '', pregunta: '', tipo: '', options: [] }]);

  const addFase = () => {
    setFases([...fases, { titulo: '', descripcion: '', pregunta: '', tipo: '', options: [] }]);
  };
  const removeFase = (index: number) => {
    setFases(fases.filter((_, i) => i !== index));
  };

  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, control,
    watch } = useForm<SurveyView>();
  const { onSubmitHandler } = useEncuesta();

  const onSubmit : SubmitHandler<SurveyView> = (data: SurveyView) => {
    console.log(data);
    const buildSurvey = builSurvey(data);
    console.log(buildSurvey);
    //onSubmitHandler(buildSurvey);
    reset()
  };

  const selectedQuestionType =  fases.map((_, index) => watch(`fases[${index}].tipo`));

  return (
    <>
      <div className={estilo.pagina}>
        <div className={estilo.primerParte}>
          <h1>Bienvenido</h1>
          <h2>¿Ya estás listo para crear tu encuesta?</h2>
        </div>

        <div className={estilo.contenedorMain}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Fase1 register={register} errors={errors} />
            {fases.map((_, index) => (
                <div key={index}>
                  <Fase2 key={index}
                         register={register}
                         errors={errors}
                         control={control}
                         success={isSubmitSuccessful}
                         typeQues={selectedQuestionType}
                         questionIndex={index}
                  />
                  <Button variant="outlined" onClick={() => removeFase(index)}>
                    <CiCircleRemove />
                      Eliminar pregunta
                  </Button>
                </div>
            ))}
            <Button variant="outlined" onClick={addFase}>
              <CiCirclePlus />
              Agregar otra pregunta
            </Button>
            <Botones onSubmit={handleSubmit(onSubmit)} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Encuesta;
