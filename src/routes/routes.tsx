type Routes = {
    HOME: string;
    SIG_INT: string;
    LOGIN: string;
    ADMIN: {
        SURVEYS: string;
        SURVEY: string;
        SURVEYCREATE: string;
    };
    USER: {
        SURVEYS: string;
        SURVEY: string;
    };
};

const routes: Readonly<Routes> = Object.freeze({
    HOME: "/",
    SIG_INT: "/register",
    LOGIN: "/login",
    ADMIN: Object.freeze({
        SURVEYS: "/admin/surveys",
        SURVEY: "/admin/surveys/:id",
        SURVEYCREATE: "/admin/surveys/crear",
    }),
    USER: Object.freeze({
        SURVEYS: "/surveys",
        SURVEY: "/surveys/:id",
    }),
});

export default routes;
