import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Col, Modal } from "react-bootstrap";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "./footer";
import LoginForm from "./Auth/Login/LoginForm";
import { LocalStorageService } from "../services";

const NavBarExample = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const normalLink = {
    color: "red",
  };
  const [expanded, setExpanded] = useState(false);

  const userExist = LocalStorageService.obtenerUsuario();

 

  const cerrarSesion = (e) => {
    e.preventDefault();
    LocalStorageService.removerAutorizacion(sessionStorage.removeItem);
    window.location.href = "/";
  };
  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        bg="white"
        className="menu-navbar-flotex"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Row className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 animate__animated animate__swing">
              <Image
                src="/img/logos/logo.png"
                className="responsive-logo-flotex"
              />
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0  "
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <NavLink
                onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Nosotros
              </NavLink>

              <NavLink
                onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Galleria
              </NavLink>
              <NavLink
                onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Contacto
              </NavLink>
              <NavLink
                onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/consulta"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Consulta
              </NavLink>
            </Nav>

            <Nav
              className="m-auto my-2 my-lg-0 "
              style={{ maxHeight: "120px" }}
              navbarScroll
            >
              {userExist ? (
                <>
                  <p id="nav-a-flotex" className="text-uppercase">
                    {userExist}
                  </p>
                  <p href="/"
                    id="nav-a-flotex"
                    className={({ isActive }) =>
                      isActive ? "bg-nav-flotex" : normalLink
                    }
                    onClick={cerrarSesion}
                  >
                    Cerrar Session
                  </p>
                </>
              ) : (
                <a
                  id="nav-a-flotex"
                  className={({ isActive }) =>
                    isActive ? "bg-nav-flotex" : normalLink
                  }
                  onClick={() => handleShow()}
                >
                  Iniciar Sesión
                </a>
              )}
              <NavLink
                id="nav-a-flotex"
                as={Link}
                to="/intranet"
                target="blank"
                onClick={() => setExpanded(false)}
              >
                Intranet
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>

      {/* <ModalLogin
        show={modalLoginShow}
        onHide={() => setModalLoginShow(false)}
      /> */}

      <Col>
        <FloatingWhatsApp
          accountName="Flotex"
          chatMessage="Hola te saluda Flotex 😊
                        en que podemos ayudarte"
          placeholder="Dejanos un mensaje"
          avatar="/img/logos/Icono-circular.png"
          statusMessage=""
          phoneNumber="+51 936846098"
        />
      </Col>

      <Footer />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingresa tu Cuenta Flotex</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NavBarExample;
