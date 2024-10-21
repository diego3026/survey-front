import {SurveyModel, SurveyResponse} from "../models";


export const survey: SurveyModel = {
    id: 1,
    title: "Encuesta de Satisfacción",
    description: "Encuesta para medir la satisfacción del cliente",
    questions: [
        {
            id: 1,
            question: "¿Cómo calificarías el servicio?",
            type: {
                id: 1,
                name: "Opción Múltiple",
            },
            answers: [
                {
                    answer: {
                        id: 1,
                        name: "Excelente",
                    },
                },
                {
                    answer: {
                        id: 2,
                        name: "Bueno",
                    },
                },
                {
                    answer: {
                        id: 3,
                        name: "Regular",
                    },
                },
                {
                    answer: {
                        id: 4,
                        name: "Malo",
                    },
                },
            ],
        },
        {
            id: 2,
            question: "¿Recomendarías nuestros servicios?",
            type: {
                id: 1,
                name: "Opción Múltiple",
            },
            answers: [
                {
                    answer: {
                        id: 1,
                        name: "Sí",
                    },
                },
                {
                    answer: {
                        id: 2,
                        name: "No",
                    },
                },
            ],
        },
        {
            id: 3,
            question: "¿Te ha resultado pesado?",
            type: {
                id: 1,
                name: "parrafo",
            },
            answers: [{answer: {id: 1, name: "Escribe tu respuesta aquí"}}],
        },
    ],
};

export const surveys: SurveyModel[] = [survey, {...survey, id: 2, title: "Musica", description: "Preferencias musicales"}, {...survey, id: 3, title: "Mejores comidas", description: "Gatronómia en latinoamerica"}];

export const mockSurveyResponse: SurveyResponse = {
    id: 1,
    user: {
        id: 2,
        username: "luisvill",
        email: "villamilluis123@gmail.com",
    },
    survey: {
        id: 1,
        title: "Satisfacción",
        description: "Queremos saber qué tan satisfecho estás",
        questions: [
            {
                id: 1,
                question: "¿Qué te pareció el servicio?",
                type: {
                    id: 1,
                    name: "opción única",
                },
                answers: [
                    { answer: { id: 1, name: "Excelente" }},
                    { answer: { id: 2, name: "Bueno" }},
                    { answer: { id: 3, name: "Regular" }},
                    { answer: { id: 4, name: "Malo" }},
                ],
            },
            {
                id: 2,
                question: "¿Recomendarías nuestro servicio?",
                type: {
                    id: 2,
                    name: "opción múltiple",
                },
                answers: [
                    { answer: { id: 1, name: "Si" }},
                    { answer: { id: 1, name: "No" }},
                ],
            },
        ],
    },
};
