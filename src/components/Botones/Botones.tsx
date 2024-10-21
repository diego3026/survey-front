import estilos from './Botones.module.css';
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

interface BotonesProps {
  onSubmit: () => void; // Añadir la prop para manejar el envío
}

export const Botones: React.FC<BotonesProps> = ({ onSubmit }) => {
  return (
    <div className={estilos.contenedor}>
      <button className={estilos.confirmar} onClick={onSubmit}>
        <FaCheck /> Crear encuesta
      </button>
      <button className={estilos.cancelar}>
        <AiOutlineClose /> Eliminar encuesta
      </button>
    </div>
  );
};
