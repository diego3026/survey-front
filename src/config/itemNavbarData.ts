import routes from "../routes/routes";

export interface NavbarItem {
    label: string;
    href: string;
}

export interface NavbarData {
    [key: string]: NavbarItem[];
}

export const itemNavbarData: NavbarData = {
    ADMIN: [
        {
            label: "Inicio",
            href: routes.HOME,
        },
        {
            label: "Encuestas",
            href: routes.ADMIN.SURVEYS,
        },
    ],
    USER: [
        {
            label: "Inicio",
            href: routes.HOME,
        },
        {
            label: "Encuestas",
            href: routes.USER.SURVEYS,
        },
    ],
}