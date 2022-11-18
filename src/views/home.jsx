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
      <Container className="p-2 d-flex justify-content-center ">
        <Row className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
          <p
            className="letter text-color-flotex"
            data-aos="zoom-out-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            LÍNEA SOSTENIBLE
          </p>
          <Image
            src="/img/flotexgreen/flotex-green.jpg"
            className="telasuniverse"
            data-aos="zoom-in-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2200"
          />
        </Row>
      </Container>
      <Container className="p-2 d-flex justify-content-center ">
        <Row>
          <Row className="col-sm-12 col-md-10 col-lg-8 col-xl-8">
            <Image
              src="/img/flotexgreen/VP1.jpg"
              className="telasuniverse"
              data-aos="zoom-in-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2200"
            />
          </Row>
          <Col className=" col-md-2 col-lg-2 col-xl-2">
            <h3
              className="tejido"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              TU UNIVERSO EN TELAS
            </h3>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center  ">
        <Row className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
          <Col className=" cotton-text-flex">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
            >
              <p>
                Tela de alta Calidad, el bordado le añade textura a la
                superficie.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
            >
              <p>Es rígida, ligera y resistente.</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
            >
              <p>
                Perfecta para confeccionar blusas, camisas, faldas, pantalones y
                vestidos.
              </p>
            </div>
          </Col>
          <div
            className="col-sm-8 row"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
          >
            <Image
              src="/img/prueba/pruebacottom.png"
              className="pruebadeface img-cotton-responsive"
            />
          </div>
        </Row>
      </Container>
      <p className="text-center m-4 text-color-flotex">PROMOCIONES</p>

      <Container
        className=" col-sm-12 col-md-12 col-lg-12 "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Row className="col-sm-12  contenedorImagenes">
          <div className="col-sm-3 col-md-6 col-lg-6 col-xl-3 p-0 ">
            <Image src="/img/telas/Ribest2.png" className="img-flotex-galery" />
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

      <Container
        className=" col-sm-12 col-md-12 col-lg-12 "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Row className="col-sm-12 p-1 contenedorImagenes">
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
    </>
  );
};
export default Home;
