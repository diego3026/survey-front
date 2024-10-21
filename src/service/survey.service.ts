import {ResponseSurvey} from "../models";
import axios from "axios";

export const surveyResponse = async (data: ResponseSurvey): Promise<string> => {
    return await axios.post('/userQuestions', data)
}

export const surveyList = async () => {
    return await axios.get(`/surveys`) || [];
}

export const surveyForId = async (id: number) => {
    const data = await axios.get(`/surveys/${id}`)
    console.log(data)
    return data
}

export const surveyDelete = async (id: number) => {
    return await axios.delete(`/surveys/${id}`)
}