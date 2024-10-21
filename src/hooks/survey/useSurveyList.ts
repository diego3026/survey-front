import {useMutation, useQuery} from "react-query";
import {surveyDelete, surveyList} from "../../service";
import {SurveyModel} from "../../models";
import {useEffect, useState} from "react";
import { survey } from '../../utils'
import routes from "../../routes/routes";
import {useNavigate} from "react-router-dom";

const useSurveyList = () => {
    const [surveyListData, setSurveys] = useState<SurveyModel[]>([survey]);
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const { data, isLoading, error } = useQuery({
        queryKey: ['surveyList'],
        queryFn: () => surveyList(),
    });

    useEffect(() => {
        setLoading(isLoading)
        if (data?.data && !isLoading) setSurveys(data?.data);
    }, [data?.data, isLoading]);

    const mutationDelete = useMutation({
        mutationFn: surveyDelete,
        onSuccess: () => {
            console.log('Encuesta eliminada correctamente');
            navigate(routes.ADMIN.SURVEYS);
        },
    });

    const hanleDelete = (id: number) => {
        mutationDelete.mutate(id)
    }

    return {
        error,
        surveyListData,
        loading,
        hanleDelete
    }
}

export default useSurveyList;