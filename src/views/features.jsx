import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="p-5 mt-0">Features</h2>
        </div>
      </div>
      <Container>
        <Row className="mb-2">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="p-5 mt-0">Features</h2>
        </div>
        <div className="row pb-5">
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-comments-o"></i>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-bullhorn"></i>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-group"></i>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <i className="fa fa-magic"></i>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
              eleifend pellentesque natoque etiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
