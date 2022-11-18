import React from "react";
import { Navigate, Route } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import Sidebar from '../views/Almacen/components/Sidebar';
import Dashboard from '../views/Almacen/pages/Dashboard';
import Analytics from '../views/Almacen/pages/Analytics';
import Product from '../views/Almacen/pages/Product';

const AlmacenRoutes = () => {
  return (
    <Sidebar>
    <NotFoundComponent>
      {/* <Route element={<Sidebar />} > */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analisis" element={<Analytics />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<Navigate replace to="/almacen" />} />
      {/* </Route> */}
    </NotFoundComponent>
    </Sidebar>
  );
};

export default AlmacenRoutes;
