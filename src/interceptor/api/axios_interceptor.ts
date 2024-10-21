import axios, { InternalAxiosRequestConfig } from "axios";
import {SnackbarUtils} from "../../components/snackbar/SnackbarUtils";


const baseUrl = "https://surveysystem-api.azurewebsites.net/";
export const API_URL = `${baseUrl}`;

axios.defaults.baseURL = API_URL;

export const AxiosInterceptor = () => {
    const updateHeader = (req: InternalAxiosRequestConfig<unknown>) => {
        const token = localStorage.getItem("token") || "";
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    };

    axios.interceptors.request.use((req) => {
        return updateHeader(req);
    });

    axios.interceptors.response.use(
        (res) => {
            return res;
        },
        (error) => {
            if (error.code === "ECONNABORTED") {
                SnackbarUtils.error(
                    "El servidor no responde. Por favor, inténtelo más tarde.",
                );
            } else if (error.message === "Network Error") {
                SnackbarUtils.error(
                    "No se pudo establecer conexión con el servidor. Por favor, verifique su conexión a Internet.",
                );
            } else if (error.response) {
                if (error.response.status === 404) {
                    SnackbarUtils.error("No se ha encontrado datos");
                } else {
                    SnackbarUtils.error(
                        `Error ${error?.response?.status}: ${error?.response?.data}`,
                    );
                }
            } else {
                SnackbarUtils.error("Error al procesar la solicitud: " + error.message);
            }
            return Promise.reject(error);
        },
    );
};