import { FiSearch } from 'react-icons/fi';
import {NavLink, useNavigate} from 'react-router-dom';
import estilo from './ListaEncuetas.module.css';
import routes from '../../routes/routes'
import {useSurveyList, useUserStore} from "../../hooks";
import Skeleton from '@mui/material/Skeleton';
import Button from "@mui/material/Button";

const ListaEncuestas = () => {
    const navigate = useNavigate();

    const { surveyListData, loading } = useSurveyList();

    const { hanleDelete } = useSurveyList();

    const user = useUserStore((state) => state);

    const handleResponderClick1 = () => {
        navigate(routes.ADMIN.SURVEYCREATE);
    }
        return (
            <>
                <div className={estilo.RecuadroGRANDE}>
                    <div className={estilo.Primero}>
                        <div className={estilo.Texto}>
                            <h3>¡Hola, Bienvenido!</h3>
                            {user.roles[0].name === "ADMIN" && (
                                <button onClick={handleResponderClick1} className={estilo.botonCrear}>Crear
                                    encuesta
                                </button>
                            )}
                        </div>
                        <div className={estilo.Busqueda}>
                            <div className={estilo.SearchContainer}>
                                <input type="search" placeholder="Buscar..." className={estilo.searchInput} />
                                <FiSearch className={estilo.searchIcon} />
                            </div>
                        </div>
                    </div>
                    {surveyListData.length === 0 && (
                        <div className={estilo.Segundo}>
                            <div className={estilo.Card}>
                                <label>No hay encuestas disponibles</label>
                            </div>
                        </div>
                    )}
                    {(surveyListData?.map(survey => (
                        <div key={survey.id} className={estilo.Segundo}>
                            {loading ? (
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"
                                }}><Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" /></div>
                            ): (
                                console.log(survey),
                                <div className={estilo.Card}>
                                    <label>{survey.title}</label>
                                    <img
                                        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-encuesta-clientes_114360-568.jpg?t=st=1729353945~exp=1729357545~hmac=7c868b11def63b6045936d7caf58045a5f93ba239a02be197e74bcb0868464f3&w=740"
                                        alt="Card 1"/>
                                    <label>{survey.description}</label>
                                    <label>Numero de preguntas: {survey.questions.length}</label>
                                    <div className="botones-acciones">
                                        {user.roles[0].name === "ADMIN" ? (
                                            <div>
                                                <button>Editar</button>
                                                <button onClick={() => hanleDelete(survey.id)}>Eliminar</button>
                                            </div>

                                        ) : (
                                            <Button variant="contained"
                                                    component={NavLink}
                                                    to={`/surveys/${survey.id}`}>
                                                Responder
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )))}
                </div>
</>
)
    ;

}

export default ListaEncuestas;
