import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import estilo from "./HeaderEncuesta.module.css";


const HeaderEncuesta: React.FC = () => {
  return (
    <div className= {estilo.contenedor}>
      <nav className={estilo.barraNavegacion}>
        <a href="/">Tú opinión</a>
        <a href="">Inicio</a>
        <a href="">Encuestas</a>
      </nav>
      <div className={estilo.derecha}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
          alt="Foto ejemplo"
        />
        <h1>Nombre de usuario</h1>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default HeaderEncuesta;
