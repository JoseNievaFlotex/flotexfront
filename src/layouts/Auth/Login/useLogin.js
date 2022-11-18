import React, { useState, Suspense } from "react";
import { useQuery } from "react-query";
import { AuthService, LocalStorageService } from "../../../services";



const useLogin = () => {
  const [credentials, setCredentials] = useState(null);
  const perfil = LocalStorageService.obtenerPerfil();
  const { data, refetch } = useQuery(["login", credentials], () =>
    AuthService.loginUser(credentials)
  );

  //   useEffect(() => {
  //     if (credentials) refetch();
  //   }, [credentials]);

  if (data) {
    LocalStorageService.guardarAutorizacion(data);
  }

  if (perfil === "Ventas") {
    window.location.href = "ventas/dash";
    // import('../../../views/Ventas/indexDashboard')
    
   
  
  }

  if (perfil === "Importaciones") {
    window.location.href = "/about";
  }
  if (perfil === "Almacen") {
    window.location.href = "/almacen/";
  }
  if (perfil === "Admin") {
    window.location.href = "/about";
  }
  return { setCredentials };
};
export default useLogin;
