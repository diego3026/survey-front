import { useUserStore } from "@hooks";
import {RoleModel, UserModel} from "../../models";
import { Navigate } from "react-router-dom";
import routes  from "../routes";
import * as React from "react";

interface PrivateRoutesProps {
    rol: string[];
    children: React.ReactNode;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ rol, children }) => {
    const id = Boolean(useUserStore((state: UserModel) => state.id));
    const role: RoleModel = useUserStore((state: UserModel) => state.roles[0]);

    if (!rol.includes(role.name)) {
        return <Navigate to={routes.SIG_INT} />;
    }

    return id ? children : <Navigate to={routes.SIG_INT} />;
};

export default PrivateRoutes;