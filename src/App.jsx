

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthRoutes } from "./routers/AuthRouter";
import AppRouter from "./routers/AppRouter";
import { PrivateRoutes, PrivateRutaAlmace } from "./routers/PrivateRoutes";
import AlmacenRoutes from "./routers/AlmacenRouter";
import { LocalStorageService } from "./services";
import { NotFoundComponent } from "./components/NotFoundComponent";
import IntranetLogin from "./layouts/Auth/Intranet/IntranetLogin";

library.add(fas, far);

const queryClient = new QueryClient();

const App =() => {
  const perfil = LocalStorageService.obtenerPerfil();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <NotFoundComponent>
            <Route path="/*" element={<AuthRoutes />} />
            <Route path="intranet" element={<IntranetLogin />} />
            <Route
              path="/ventas/*"
              element={
                <PrivateRoutes perfil={perfil}>
                  <AppRouter />
                </PrivateRoutes>
              }
            />
            <Route
              path="/almacen/*"
              element={
                <PrivateRutaAlmace perfil={perfil}>
                  <AlmacenRoutes />
                </PrivateRutaAlmace>
              }
            />
          </NotFoundComponent>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
