import { useUserStore } from "../../hooks/user/useUserStorage";
import { UserModel, RoleModel } from "../../models";
import { Navigate } from "react-router-dom";
import routes  from "../routes";
import * as React from "react";


const PublicRoutes: React.FC<React.PropsWithChildren> = ({ children }) => {
    const id = useUserStore((state: UserModel) => state.id);
    const rol: RoleModel = useUserStore((state: UserModel) => state.roles[0]);

    return id ? <Navigate to={routes[rol.name]?.SURVEYS }  /> : <>{children}</>;
};

export default PublicRoutes;