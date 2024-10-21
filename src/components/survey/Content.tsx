import {responseSchema,
    ResponseSurvey,
    ResponseType, RoleModel,
    SurveyModel, UserModel} from '../../models'
import { ListQuestions } from '@components'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {useUserStore} from "../../hooks";

export type surveyType = {
    survey: SurveyModel;
    onSubmitHandler: (data: ResponseSurvey) => void;
};


const Content: React.FC<surveyType> = ({ survey, onSubmitHandler }) => {

    const rol: RoleModel | undefined = useUserStore((state: UserModel) => state.roles[0]);

    const user = useUserStore();


    const methods = useForm<ResponseType>({
        resolver: zodResolver(responseSchema)
    });

    const onSubmit: SubmitHandler<ResponseType> = (data: ResponseType) => {
        console.log('Enviando datos de la encuenta...: ', data);
        const idQuest = Object.keys(data);
        const answers: ResponseSurvey[] = idQuest.map((objec) => {
            return {
                userid: user.id,
                questionId: Number(objec),
                answer: data[objec]
            }
        });
        console.log('Respuestas: ', answers);
        answers.forEach((answer: ResponseSurvey) => {
            onSubmitHandler(answer);
        })
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{
                border: "1px solid #89939E", marginBottom: "50px", borderRadius: "20px",
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Noto Sans',
                paddingBottom: "50px",
            }}>
                <Box bgcolor={"#00B8B0"} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '30px 0 20px 0',
                    borderRadius: '12px 12px 40% 40%',
                    height: "200px",
                }}>
                    <h1 style={{
                        fontSize: '48px',
                        color: '#FFFFFF',
                        fontWeight: 400,
                    }}>{survey.title}</h1>
                    <span style={{fontSize: "20px",
                        color: "#FFFFFF"}}>{survey.questions.length} preguntas</span>
                </Box>
                <Box padding={"50px 70px 0 70px"} color={"#89939E"}>
                    <h2 style={{fontSize: "30px"}}>{survey.description}</h2>
                </Box>
                <ListQuestions questions={survey.questions} />
                <span style={{paddingLeft: "70px",
                    fontSize: "20px",
                    color: "#66BB69",
                }}>Gracias por responder la encuesta</span>
                <Box sx={{paddingLeft: "70px", paddingTop: "20px"}}>
                    {rol.name === 'ADMIN' ? (
                        <Button variant="contained"
                                sx={{backgroundColor: "#00B8B0",
                                    padding: "15px 30px",
                                    borderRadius: "17px",
                                }}>Editar encuesta
                        </Button>
                    ):(
                        <Button variant="contained" type="submit"
                                sx={{backgroundColor: "#00B8B0",
                                padding: "15px 30px",
                                borderRadius: "17px",
                            }}>Enviar respuestas
                        </Button>
                    )}

                </Box>
            </form>
        </FormProvider>
    );
}

export default Content;