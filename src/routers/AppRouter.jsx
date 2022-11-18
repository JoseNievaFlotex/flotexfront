import React from "react";
import { Navigate, Route } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import DashBoard from "../views/Ventas/indexDashboard";

const AppRouter = () => {
  return (
    <>
      <NotFoundComponent>
        <Route path={"/dash"} element={<DashBoard />} />
        <Route path="*" element={<Navigate replace to="/ventas/dash" />} />
      </NotFoundComponent>
    </>
  );
};
export default AppRouter;
