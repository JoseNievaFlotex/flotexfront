import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./styles/estilo.css";
import "./styles/estyle.scss";
import "./styles/estiloresponsive.css";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthRoutes } from "./routers/AuthRouter";
import AppRouter from "./routers/AppRouter";
import { PrivateRoutes, PrivateRutaAlmace } from "./routers/PrivateRoutes";
import AlmacenRoutes from "./routers/AlmacenRouter";
import { LocalStorageService } from "./services";
import { NotFoundComponent } from "./components/NotFoundComponent";
import IntranetLogin from "./layouts/Auth/Intranet/IntranetLogin";
const queryClient = new QueryClient();
const perfil = LocalStorageService.obtenerPerfil();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div>
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
  </React.StrictMode>
);
