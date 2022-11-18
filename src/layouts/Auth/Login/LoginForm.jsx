import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useLogin from "./useLogin";
import * as Yup from "yup";

const LoginForm = () => {
  const { setCredentials } = useLogin();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Email invalido").required("Requerido"),
      password: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => setCredentials(values),
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form to="#" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Correo:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="ejemplo@flotex.pe"
                autoComplete="email"
                required
                autoFocus
              />
              <Form.Text className="text-danger">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Contraseña"
                required
              />
              <Form.Text className=" text-danger">
                {formik.touched.password &&
                toastme.warning(formik.errors.password)
                  ? formik.errors.password
                  : ""}
              </Form.Text>
            </Form.Group>
            <Button id="btn-flotex" type="submit" className="rounded-pill">
              Acceder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
