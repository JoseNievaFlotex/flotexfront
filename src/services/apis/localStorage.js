const ALMACENAMIENTO_DE_AUTORIZACION = "ALMACENAMIENTO_DE_AUTORIZACION_FLOTEX";

export const guardarAutorizacion = (data) => {
  sessionStorage.setItem(ALMACENAMIENTO_DE_AUTORIZACION, JSON.stringify(data));
  sessionStorage.setItem("typeuser", data?.user?.typeuser);
  sessionStorage.setItem("name", data?.user?.name);
  sessionStorage.setItem("lastName", data?.user?.lastName);
  sessionStorage.setItem("estado", data?.user?.estado);
};

export const obtenerTokenAcceso = () => {
  const autorizacion = sessionStorage.getItem(ALMACENAMIENTO_DE_AUTORIZACION);

  if (autorizacion !== null) {
    const usuario = JSON.parse(autorizacion);

    return usuario.token;
  }

  throw new Error("Se requiere iniciar sesión");
};

export const obtenerPerfil = () => {
  const perfil = sessionStorage.getItem("typeuser");
  return perfil;
};
export const obtenerUsuario = () => {
  const user = sessionStorage.getItem("name");
  return user;
};
export const obtenerEstado = () => {
  const stateUser = sessionStorage.getItem("estado");
  return stateUser;
};

export const removerAutorizacion = () => {
  sessionStorage.removeItem(ALMACENAMIENTO_DE_AUTORIZACION);
  sessionStorage.clear();
};
