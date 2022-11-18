import { Col, Nav, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Login from "../layouts/Auth/Login/LoginForm";
import Register from "./register";

function NavLogin() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="justify-content-center col">
        <Col sm={6} className="pb-3">
          <Nav variant="pills" className="flex-row justify-content-center">
            <Row>
              <Nav.Item>
                <Nav.Link eventKey="first" className="text-center">
                  Login
                </Nav.Link>
              </Nav.Item>
            </Row>
            <Row>
              <Nav.Item>
                <Nav.Link eventKey="second" className="text-center">
                  Registrar
                </Nav.Link>
              </Nav.Item>
            </Row>
          </Nav>
        </Col>
        <Row className="justify-content-center">
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane  eventKey="first">
                <Login />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Register />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Row>
    </Tab.Container>
  );
}

export default NavLogin;
