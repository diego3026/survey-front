import Header from "@components/header/Header";
import { Outlet } from "react-router-dom";

const Layaut = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layaut;