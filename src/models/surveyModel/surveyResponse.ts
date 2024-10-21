import { QuestionType } from './SurveyView'

export interface User {
    id: number;
    username: string;
    email: string;
}

export interface Survey {
    id: number;
    title: string;
    description: string;
    questions: QuestionType[];
}

export interface SurveyResponse {
    id: number;
    user: User;
    survey: Survey;
}