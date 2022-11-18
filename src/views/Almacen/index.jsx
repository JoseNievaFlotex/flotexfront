import React from "react";
import { Button } from "react-bootstrap";
import { LocalStorageService } from "../../services";

const index = () => {
  const user = LocalStorageService.obtenerUsuario();

  const cerrarSesion = (e) => {
    e.preventDefault();
    LocalStorageService.removerAutorizacion(sessionStorage.removeItem);
    window.location.href = "/";
  };

  return (
    <>
      <h1>Hola Mundo</h1>
      <h1>{user}</h1>
      <Button onClick={cerrarSesion}>Cerrar Session</Button>
    </>
  );
};
export default index;
