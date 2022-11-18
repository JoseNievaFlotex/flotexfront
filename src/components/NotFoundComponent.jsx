import React from "react";
import { Route, Routes } from "react-router-dom";

export const NotFoundComponent = ({children}) => {
    return(
        <Routes>
            {children}
            <Route  path="*" element={<h4>Acceso Denegado</h4>}/>
        </Routes>  
            
    )
}