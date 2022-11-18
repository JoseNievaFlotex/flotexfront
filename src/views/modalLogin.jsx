/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import NavLogin from './navLogin';

function modalLogin({ show, onHide }) {
    
  
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton className="border-0"></Modal.Header>
                <Modal.Body className="pb-5">
                  <Row>
                    <NavLogin></NavLogin>
                  </Row>
                </Modal.Body>
              </Modal>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default modalLogin;
