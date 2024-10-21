import { TypeQuestion, answerType } from "./TypeQuestion";
import {SurveyAnswers, SurveyCreate, SurveyQuestion} from "./Survey";

export interface QuestionType {
    id: number;
    question: string;
    type: TypeQuestion;
    answers: answerType[];
}

export type questionType = {
    question: QuestionType;
};

export type listQuestionsType = {
    questions: QuestionType[];
};

export interface ResponseQuest {
    id: number;
    descripcion: string;
}

export type listResQuest = {
    response: ResponseQuest[];
};

export interface SurveyView {
    titulo: string;
    descripcion: string;
    pregunta: string;
    tipo: string;
    options: Array<{ value: string }>;
}

export interface SurveyBodyModel {
    survey: SurveyCreate;
    questions: SurveyQuestion;
    tipoQ: string;
    answer: SurveyAnswers;
}


