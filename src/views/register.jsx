import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import userService from "../services/apis/users";

function Register () {
  const  [name, setName]  = useState("");
  const  [lastName, setLastName]  = useState("");
  const  [email, setEmail]  = useState("");
  const  [password, setPassword]  = useState("");

  const addUser = () => {
    const userObject = {
      content: name,
      lastName,
      email,
      password,
    };
    userService.createUser(userObject).then((returnedNote) => {
      return returnedNote;
    });

    const listado = userService.getAll();
    console.log(listado);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form className="" onSubmit={addUser}>
            <Form.Group className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control type="text" placeholder="Nombre" 
              name="name" onChange={({ target }) => setName(target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="lastName" onChange={({ target }) => setLastName(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control type="email" placeholder="Correo"
               name="email"  onChange={({ target }) => setEmail(target.value)}/>
              <Form.Text className="text-muted">
                Nombre de usuario valido.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password" onChange={({ target }) => setPassword(target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button id="btn-flotex" variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
