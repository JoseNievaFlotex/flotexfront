import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";


const Home = () => {

  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <Image
            className="carusel"
            src="/img/banner/banner-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="carusel"
            src="/img/banner/banner-5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="carusel"
            src="/img/banner/banner-6.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="p-2 d-flex justify-content-center animate__animated animate__backInLeft animate__delay demo-top-flotex">
        <Row className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <h3 className="letter text-color-flotex">LÍNEA SOSTENIBLE</h3>
          <Image
            src="/img/flotexgreen/flotex-green.jpg"
            className="telasuniverse"
          />
        </Row>
      </Container>
      <Container className="p-2 d-flex justify-content-center animate__animated animate__backInLeft animate__delay demo-top-flotex">
        <Row>
          <Row className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
            <Image src="/img/flotexgreen/VP1.jpg" className="telasuniverse" />
          </Row>
          <Col className=" col-md-2 col-lg-2 col-xl-2">
            <h3 className="tejido text-color-flotex">TU UNIVERSO EN TELAS</h3>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center  ">
        <Row className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
          <Col className=" cotton-text-flex">
            <p className="animate__animated animate__backInLeft animate__delay-3s">
              Tela de alta Calidad, el bordado le añade textura a la superficie.
            </p>
            <p className="">Es rígida, ligera y resistente.</p>
            <p className="">
              Perfecta para confeccionar blusas, camisas, faldas, pantalones y
              vestidos.
            </p>
          </Col>
          <div className="col-sm-8 row">
            <Image
              src="/img/prueba/pruebacottom.png"
              className="pruebadeface img-cotton-responsive"
            />
          </div>
        </Row>
      </Container>
      <h2 className="text-center m-4 text-color-flotex">PROMOCIONES</h2>
      <Row className="animate__animated animate__backInUp animate__delay-1s">
        <Container className=" col-sm-12 col-md-12 col-lg-12">
          <Row className="col-sm-12 p-1">
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image
                src="/img/telas/Ribest2.png"
                className="img-flotex-galery"
              />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3  p-0">
              <Image
                src="/img/telas/cataniace1.png"
                className="img-flotex-galery"
              />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6  col-xl-3 p-0">
              <Image
                src="/img/telas/linoest1.png"
                className="img-flotex-galery"
              />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image
                src="/img/telas/chalisest2.png"
                className="img-flotex-galery"
              />
            </div>
          </Row>
        </Container>
      </Row>
      <Row className="animate__animated animate__backInUp animate__delay-1s">
        <Container className=" col-sm-12 col-md-12 col-lg-12">
          <Row className="col-sm-12 p-1">
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image
                src="/img/telas/chambrayest1.png"
                className="img-flotex-galery"
              />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image
                src="/img/telas/interlock1.png"
                className="img-flotex-galery"
              />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image src="/img/telas/loma2.png" className="img-flotex-galery" />
            </div>
            <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0">
              <Image
                src="/img/telas/chambrayest2.png"
                className="img-flotex-galery"
              />
            </div>
          </Row>
        </Container>
      </Row>
    </>
  );
};
export default Home;
