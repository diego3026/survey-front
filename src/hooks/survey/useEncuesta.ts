import {SurveyBodyModel} from "../../models";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import routes from "../../routes/routes";
import { handleSurveyCreation } from "../../service/endCuesta";
import {useUserStore} from "../user";


const useEncuesta= () => {

    const navigate = useNavigate();
    const user = useUserStore(state => state);

    const mutation = useMutation({
        mutationFn: (datos: SurveyBodyModel) => handleSurveyCreation(datos, user.id),
        onSuccess: (data: string) => {
            console.log('Encuesta creada correctamente: ', data);
            navigate(routes.ADMIN.SURVEYS);
        },
    });

    const onSubmitHandler = (data: SurveyBodyModel) => {
        mutation.mutate(data);
    };

    return {
        onSubmitHandler
    }
}
export default useEncuesta;