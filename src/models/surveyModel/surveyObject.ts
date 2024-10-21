import { surveyType } from "./Survey";

export const survey: surveyType = {
    survey: {
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
        ],
    },
};
