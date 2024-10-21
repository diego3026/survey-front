import { QuestionType } from './SurveyView';

export interface SurveyModel {
    id: number;
    title: string;
    description: string;
    questions: QuestionType[];
}

export type surveyType = {
    survey: SurveyModel;
};

export interface ResponseSurvey {
    userid: number;
    questionId: number;
    answer: string;
}

export interface SurveyCreate  {
    title: string,
    description: string;
};

export type SurveyQuestion = {
    title: string;
    survey: number;
    typeQuestion: number;
}

export interface SurveyAnswers {
    description: string,
    question: number;
}