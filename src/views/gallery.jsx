import { Container, Image } from "react-bootstrap";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iframe from "react-iframe";

const Gallery = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container-fluid p-0">
        <div className="contenedor-bg-flotex-gallery"></div>
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Galeria de imagenes de nuestro showroom</p>
        </div>
      </div>
      <div className="container">
        <Row > 
          <Col>
            <Row className="justify-content-md-center">
              <div
                lg="6"
                className="col-lg-6 col-sm-6 pe-0 bg-showroom-flotex animate__animated animate__backInLeft animate__delay-1s"
              >
                <div>
                  <p className="showroom-text">SHOWROOMS</p>
                  <p>
                    JR ANTONIO BAZO, 1070
                    <br />
                    LIMA, LA VICTORIA
                    <br />
                    2 PISO
                    <br />
                    desde las 8 AM hasta las 8 PM
                    <br />
                  </p>
                  <div>
                    <h3>PRÓXIMOS EVENTOS</h3>
                  </div>
                  <div>
                    <div>
                      <img
                        src="https://adar.com.br/wp-content/uploads/2021/10/evento.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h2>En breve</h2>
                      <p>Espere noticias.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Col
                lg="6"
                className="col-sm-6 ps-0 animate__animated animate__backInRight animate__delay-1s"
              >
                <div>
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.6727644361432!2d-77.01396767012542!3d-12.069048211648013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89c375c24a3%3A0x350640bcdfe8d7ad!2sFLOTEX!5e0!3m2!1ses-419!2spe!4v1667595749103!5m2!1ses-419!2spe"
                    width="100%"
                    height="540"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    frameborder="0"
                  />

                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.6727644361432!2d-77.01396767012542!3d-12.069048211648013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89c375c24a3%3A0x350640bcdfe8d7ad!2sFLOTEX!5e0!3m2!1ses-419!2spe!4v1667595749103!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
              </Col>
            </Row>

            <Row className="animate__animated animate__backInUp animate__delay-1s">
              <Container className=" col-sm-12 col-md-12 col-lg-12">
                <Row className="col-sm-12 p-1">
                  <div className="col-lg-3 col-sm-6 p-0 div-img-flotex-galery">
                    <Image
                      src="/img/showrooms/SHOWROOM1.jpg"
                      className="img-flotex-galery"
                    />
                  </div>
                  <div className="col-lg-3 col-sm-6 p-0">
                    <Image
                      src="/img/showrooms/SHOWROOM3.jpg"
                      className="img-flotex-galery"
                    />
                  </div>
                  <div className="col-lg-3 col-sm-6 p-0">
                    <Image
                      src="/img/showrooms/SHOWROOM2.jpg"
                      className="img-flotex-galery"
                    />
                  </div>
                  <div className="col-lg-3 col-sm-6 p-0">
                    <Image
                      src="/img/showrooms/SHOWROOM4.jpg"
                      className="img-flotex-galery"
                    />
                  </div>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Gallery;
