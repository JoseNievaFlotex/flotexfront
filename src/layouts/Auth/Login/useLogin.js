import { useState } from "react";
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
    toastme.success(`Bienvenido al Sistema ${data.user.name}`);
    LocalStorageService.guardarAutorizacion(data);
  }

  if (perfil === "Ventas") {
    window.location.href = "ventas/dash";
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
