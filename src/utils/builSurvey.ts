import {SurveyView, SurveyBodyModel} from "../models";

export const builSurvey = (survey: SurveyView) => {
    const surveyCreate: SurveyBodyModel = {
        survey: {
            title: survey.titulo,
            description: survey.descripcion,
        },
        questions: {
            title: survey.titulo,
            survey: 0,
            typeQuestion: 0,
        },
        tipoQ: survey.tipo,
        answer: {
            description: survey.descripcion,
            question: 1,
        },
    };
    return surveyCreate;
}