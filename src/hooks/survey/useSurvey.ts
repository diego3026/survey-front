import {ResponseSurvey, SurveyModel} from "../../models";
import {surveyResponse, surveyForId} from "../../service";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import routes from "../../routes/routes";
import {useEffect, useState} from "react";
import { survey } from '../../utils'

const useSurvey= (id: number) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [surv, setSurvey] = useState<SurveyModel>(survey)

    const { data, isLoading } = useQuery({
        queryKey: ['surveyForId', id],
        queryFn: () => surveyForId(id)
    })

    useEffect(() => {
        setLoading(isLoading)
        if (!isLoading && data){
            console.log(data.data)
            setSurvey(data.data)
        }
    }, [data, isLoading]);

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: (surveyRes: ResponseSurvey) => surveyResponse(surveyRes),
        onSuccess: (data: string) => {
            console.log('Encuesta enviada correctamente: ', data);
            navigate(routes.USER.SURVEYS);
        },
    });

    const onSubmitHandler = (surveyRes: ResponseSurvey) => {
        mutation.mutate(surveyRes);
    };

    return {
        surv,
        loading,
        onSubmitHandler,
    }
}

export default useSurvey;