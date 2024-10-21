import estilos from "./Parrafo.module.css";

export const Parrafo = () => {
  return (
    <div className={estilos.contenedor}>
      <h1>Redacta tu parrafo</h1>
      <textarea name="" id="" placeholder="Escriba su texto"></textarea>
    </div>
  );
};