// library
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

// components
import JumbotronHeader from "../../../components/HomeComponents/Jumbotron/Jumbotron";
import Layanan from "components/HomeComponents/Layanan/Layanan";

// gambar
import code from "assets/img/layanan/code.png";
import design from "assets/img/layanan/design.png";
import seo from "assets/img/layanan/design.png";

// style
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <JumbotronHeader className="jmb-banner" />
        <div className="devider"></div>
        <Container className="mt-5">
          <h1 className="text-center">Our Specialist</h1>
          <Row className="service-section mt-5">
            <Col>
              <Layanan
                gambar={code}
                judul="Development Web"
                text="With supporting text below as a natural lead-in to additional content."
              />
            </Col>
            <Col>
              <Layanan
                gambar={design}
                judul="Design Web"
                text="With supporting text below as a natural lead-in to additional content."
              />
            </Col>
            <Col>
              <Layanan
                gambar={seo}
                judul="SEO"
                text="With supporting text below as a natural lead-in to additional content."
              />
            </Col>
          </Row>
          <div className="devider"></div>
          <Row>
            <Col>
              <div className="web-dev"></div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
