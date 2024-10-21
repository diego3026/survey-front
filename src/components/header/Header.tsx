import Button from '@mui/material/Button';
import "./Header.css"
import routes from "../../routes/routes";
import { NavLink, Link } from "react-router-dom";
import {useUserStore} from "../../hooks";
import { itemNavbarData } from "../../config/itemNavbarData";
import ItemsNavbar  from "./ItemsNavbar";
import {UserModel} from "../../models";


const Header = () => {
    const user = useUserStore((state: UserModel) => state);
    const logout = useUserStore((state ) => state.logout);


    return (
        <div className="navbar">
            <div className="navbar__background">
                <Link to={routes.HOME} className="logo">
                    <h1 className="logo__text young-serif-regular">Tú</h1>
                    <h1 className="logo__text-color young-serif-regular">Opinión</h1>
                </Link>
                {user.id !== 0 && <ItemsNavbar items={itemNavbarData[user.roles[0].name]} />}
            </div>
            {user.id === 0 ? (
                <div className="buttons">
                    <Button component={NavLink} to={routes.SIG_INT}
                            variant="text"
                            style={{color: "#666666", textTransform: "capitalize"}}>
                        Registrarse
                    </Button>
                    <Button component={NavLink} to={routes.LOGIN}
                            variant="contained"
                            style={{backgroundColor: "#00B8B0", textTransform: "capitalize"}}>
                        Ingresar
                    </Button>
                </div>
            ): (
                <Button
                        onClick={() => logout()}
                        variant="contained"
                        style={{backgroundColor: "#00B8B0", textTransform: "capitalize"}}>
                    Cerrar sesión
                </Button>
            )}

        </div>
    )
}

export default Header;