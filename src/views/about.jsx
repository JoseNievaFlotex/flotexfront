import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Row className="p-2">
          <iframe
            className=""
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="SLIDER CLADD NUEVO"
            src="https://www.youtube.com/embed/YH9GumzL_jc?loop=1&amp;;autoplay=1&amp;;mute=1&amp;;controls=0&amp;;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
            id="widget2"
            style={{ width: "3000px", height: "340px" }}
          ></iframe>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="miEmpresa col-sm-12 col-md-4 col-lg-3.5 col-xl-4 col-xxl-5">
            <h1 className="mision">MISIÓN</h1>
            <p className="misionDato">
              Desarrollar el mercado de la moda peruana. Convertirnos en socios
              estratégicos de nuestros clientes. Generándoles valor agregado a
              través de nuestra gran variedad y calidad de telas en el momento
              oportuno.
            </p>
          </Col>
          <Col className="col-sm-12 col-md-4 col-lg-6 col-xl-4">
            <Image src="/img/flotexgreen/VP2.jpg" className="datosEmpresa" />
          </Col>
        </Row>
      </Container>
      <Container className="p-5">
        <Row className="d-flex justify-content-center">
          <iframe
            className="elementor video-responsive-flotex"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="SLIDER CLADD NUEVO"
            src="https://www.youtube.com/embed/_Di_qloCUic?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
            id="widget2"
            style={{ width: "1000px", height: "549px" }}
          ></iframe>
        </Row>
      </Container>
      <Container className="text-center">
        <Row>
          <h1> FLOTEX</h1>
          <p>
            El Grupo, compuesto por las empresas Flotex, actúa en diferentes
            segmentos del mercado textil y es hoy uno de los más grandes y
            completos del Perú. Cada marca tiene las características necesarias
            para atender cada mercado de manera personalizada. Juntos, el grupo
            ofrece productos de alta calidad, importados y nacionales, que
            atienden tanto al mercado de la moda como al de la decoración. Un
            equipo capacitado de representantes atiende a clientes en todo el
            territorio nacional, ofreciendo el mejor mix de productos para cada
            región.
          </p>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center pt-5">
        <Row className="p-2">
          <iframe
            className="elementor-background-video-embed video-responsive-flotex"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="SLIDER CLADD NUEVO"
            src="https://www.youtube.com/embed/tl1HrKo6HNM?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
            id="widget2"
            style={{ width: "1000px", height: "549px" }}
          ></iframe>
        </Row>
      </Container>
      {""}
      <Container className=" bg-dark text-light fluid col-sm-12 col-md-8 col-md-10 ">
        <h3 className="m-2 text-center p-4 "> Nuestros Valores</h3>
        <Row className="banner col-sm-12">
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-41-1.svg"
            />
            <p className="text-center p-3">
              {" "}
              Creemos en la calidad que se logra en producciones textiles.
            </p>
          </Col>
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-37.svg"
            />
            <p className="text-center p-3">
              {" "}
              Capacitamos a nuestro equipo y ayudamos a mejorar la calidad.
            </p>
          </Col>
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-42.svg"
            />
            <p className="text-center p-3">
              {" "}
              Más del 50% de nuestro equipo está conformado por mujeres.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
