import axios from 'axios';
import {SurveyAnswers,
  SurveyBodyModel,
  SurveyCreate,
  SurveyQuestion
} from '../models';

interface AsociateSurvey{
    survey: number;
    user: number;
}

export const createSurvey = async (surveyData: SurveyCreate) => {
  return await axios.post('/surveys ', surveyData);
}

export const asociateSurvey = async (asociate: AsociateSurvey) => {
    return await axios.post('/userSurveys', asociate);
}

export const createTypeQuestion = async (typeQuestion: string) => {
  return await axios.post('/typesQuestions', { name: typeQuestion });
}

export const createQuestion = async (questionData: SurveyQuestion) => {
  return await axios.post('/questions', questionData);
};


export const createAnswers = async (answers: SurveyAnswers,) => {
  return await axios.post('/answers', answers);
}; 


export const handleSurveyCreation = async (surveyBody: SurveyBodyModel, id: number): Promise<string> => {
  try {
    const surveyResponse = await createSurvey(surveyBody.survey);

    const asociate: AsociateSurvey = {
      survey: surveyResponse.data.id,
      user: id
    }

    const asociateResponse = await asociateSurvey(asociate);
    console.log(asociateResponse.data);

    const typeQuestionResponse = await createTypeQuestion(surveyBody.tipoQ);

    const newbuidQues: SurveyQuestion = {
      ...surveyBody.questions,
        survey: surveyResponse.data.id,
        typeQuestion: typeQuestionResponse.data.id,
    }
   
    const questionResponse = await createQuestion(newbuidQues);

    const newAnswer = {
      ...surveyBody.answer,
      question: questionResponse.data.id,
    }

    const answerResponse = await createAnswers(newAnswer);

    console.log('Encuesta creada correctamente:', answerResponse.data);

    return "Creación exitosa"

  } catch (error) {
    console.error('Error en el proceso de creación:', error);
    throw error;
  }
};
