import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children, perfil }) => {
  return perfil === "Ventas" ? children : <Navigate replace to={"/"} />;
};

export const PrivateRutaAlmace = ({ children, perfil }) => {
  return perfil === "Almacen" ? children : <Navigate replace to={"/"} />;
};
export default { PrivateRoutes, PrivateRutaAlmace };
