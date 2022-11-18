import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Image } from "react-bootstrap";

const IntranetLogin = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email invalido")
        .required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => values,
  });
  return (
    <>
      <div>
        <Image src="/img/intranet/intra2.jpg" className="imagen-intranet" />

        <Container className="intranet">
          <Row className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
              <Image
                src="/img/logos/logointranet.png "
                className="logointranet"
              />
            <Form onSubmit={formik.handleSubmit} className="formIntranet">
              <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                <Form.Label className="text-white">Correo:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ejemplo@intranet_flotex.pe"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </Form.Group>
              <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
                <Form.Label className="text-white">Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </Form.Group>
              <Button id="btn-flotex" type="submit" className="col-sm-12">
                Ingresar
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default IntranetLogin;
