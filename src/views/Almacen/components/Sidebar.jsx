import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({children}) => {

    const menuItem =[
        {
            path:"/almacen/dashboard",
            name:"Dashboard",
            // icon: <FontAwesomeIcon icon='fas fa-eye' />,
        },
        {
            path:"/almacen/analisis",
            name:"Analytics",
            icon: "",
        },
        {
            path:"/almacen/product",
            name:"Product",
            icon: "",
        },
    ]

  return (
    <>
    <div className='contenedor'>
        <div className='sidebar'>
            <div className='top_section'>
                <h1>User</h1>  
                <div className='barra'>
                    {/* <FontAwesomeIcon  /> */}
                </div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index}
                    as={Link}
                  className="link">
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
              </NavLink>
          ))}
        </div>
    <main>{children}</main>
          <Outlet />
    </div>
            </>
  )
}

export default Sidebar;