import Card from '@mui/material/Card';
import { surveys } from '../../utils/encuestas';
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import {useUserStore} from '../../hooks'

const SurveyList: React.FC = () => {

    const user = useUserStore()

    return (
        <div>
            {user.roles[0].name === "ADMIN" && (
                <Button
                    component={NavLink}
                    to={routes.ADMIN.SURVEYCREATE}
                >
                    Crear encuesta
                </Button>
            )}
            {surveys?.map((survey) => (
                <Card key={survey.id}>
                    <p>{survey.title}</p>
                    <Card></Card>
                    <p>{survey.questions.length}</p>
                    <Button
                        component={NavLink}
                        to={`/surveys/${survey.id}`}
                    >
                        Responder
                    </Button>
                </Card>
            ))}
        </div>
    );
}

export default SurveyList;