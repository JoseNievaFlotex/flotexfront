import Row from "react-bootstrap/Row";
import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
const Contact = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-sm-6 col-md-6 col-lg-6 animate__animated animate__backInLeft text-color-flotex">
            <h3 className=" p-4 ">CONTACTATE CON UNO DE NUESTROS VENDEDORES</h3>
            <Image src="/img/contact.jpg" className="contactImage" />
          </Col>
          <Col className="col-sm-6 col-md-4 col-lg-6 animate__animated animate__backInDown">
            <Form className="  formularioContacto">
              <h3 className="text-end  text-color-flotex">CONTACTANOS</h3>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Nombre" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="E-mail" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  placeholder="Telefone (com DDD)"
                  size="lg"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Ciudad" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Empresa" size="lg" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Cargo" size="lg" />
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Comentarios">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <div className="d-grid gap-2 pb-3 pt-3">
                <Button id="btn-flotex" size="lg">
                  {" "}
                  Enviar{" "}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Contact;
