import {
    createBrowserRouter,
    RouterProvider as ReactRouterProvider
} from "react-router-dom";
import routes from "../routes";
import {ReactNode} from "react";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Layaut from "../../components/layaut/Layaut";
import Home from "../../pages/home/Home";
import {Survey} from "../../pages/survey/Survey";
import ListaEncuestas from "../../pages/ListaEncuestas/ListaEncuestas";
import Encuesta from "../../pages/Encuesta/Encuesta";
import Login from '../../components/Login/Login';
import Register from "../../components/Register/Register";

type Route = {
    path: string;
    element: ReactNode;
};

type RoutesArray = Route[];

const ADMIN_ROUTES: RoutesArray = [
    {
        path: routes.ADMIN.SURVEYS,
        element: (
            <PrivateRoutes rol={["ADMIN"]}>
                <ListaEncuestas/>
            </PrivateRoutes>
        )
    },
    {
        path: routes.ADMIN.SURVEY,
        element: (
            <PrivateRoutes rol={["ADMIN"]}>
                <Survey/>
            </PrivateRoutes>
        )
    },
    {
        path: routes.ADMIN.SURVEYCREATE,
        element: (
            <PrivateRoutes rol={["ADMIN"]}>
                <Encuesta/>
            </PrivateRoutes>
        )
    }
]

const USER_ROUTES: RoutesArray = [
    {
        path: routes.USER.SURVEYS,
        element: (
            <PrivateRoutes rol={["USER"]}>
                <ListaEncuestas/>
            </PrivateRoutes>
        )
    },
    {
        path: routes.USER.SURVEY,
        element: (
            <PrivateRoutes rol={["USER"]}>
                <Survey/>
            </PrivateRoutes>
        )
    }
]

const router = createBrowserRouter([
    {
        path: routes.HOME,
        element: <Layaut/>,
        children: [
            {
                path: routes.HOME,
                element: <Home/>
            },
            {
                path: routes.SIG_INT,
                element: (
                    <PublicRoutes>
                        <Register/>
                    </PublicRoutes>
                )

            },
            {
                path: routes.LOGIN,
                element:(
                    <PublicRoutes>
                        <Login/>
                    </PublicRoutes>
                )
            },
            ...ADMIN_ROUTES,
            ...USER_ROUTES
        ]
    }
])

function RouterProvider() {
    return <ReactRouterProvider router={router} />;
}

export default RouterProvider