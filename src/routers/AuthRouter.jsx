import React from "react";
import { Navigate, Route } from "react-router-dom";
import { NotFoundComponent } from "../components/NotFoundComponent";
import NavBarExample from "../layouts/navbar";
import About from "../views/about";
import Factura from "../views/consulta";
import Contact from "../views/contact";
import Gallery from "../views/gallery";
import Home from "../views/home";

export const AuthRoutes = () => {
  return (
    <>
      <NotFoundComponent>
        <Route path={"/"} element={<NavBarExample />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/consulta"} element={<Factura />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/gallery"} element={<Gallery />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </NotFoundComponent>
    </>
  );
};
