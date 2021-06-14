// library
import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

// components
import JumbotronHeader from "../../../components/HomeComponents/Jumbotron/Jumbotron";
import Layanan from "components/HomeComponents/Layanan/Layanan";
import Gambar from "components/HomeComponents/Gambar/Gambar";

// gambar
import code from "assets/img/home/code.png";
import design from "assets/img/home/design.png";
import seo from "assets/img/home/seo.png";
import imageWebDev from "assets/img/home/image-web-dev.jpg";
import imageDesignWeb from "assets/img/home/image-design-web.jpg";

// style
import "./Home.css";
import TextRight from "components/HomeComponents/TextRight/TextRight";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <JumbotronHeader className="jmb-banner" />
        <div className="devider"></div>
        <Container className="mt-5">
          <Row className="service-section mt-5">
            <h2 className="text-center">Our Specialist</h2>
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
          <Row className="web-dev-section">
            <h2 className="text-center">Spesialist Web Development</h2>
            <Col>
              <Gambar gambar={imageWebDev} alt="web dev" />
            </Col>
            <Col>
              <TextRight
                textH3="How we start the Development ?"
                textP="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae officia
        minus temporibus aut nisi. Aut quis aliquam ab sunt hic sapiente, nulla
        possimus nostrum nam ullam tempora soluta optio, quaerat reiciendis quod
        voluptatibus libero omnis odio? Aliquid ipsam accusantium facilis
        reiciendis repellat temporibus repellendus facere praesentium amet
        adipisci. Saepe quisquam ratione quidem doloribus ipsum vel possimus
        expedita molestias dolore, totam culpa reiciendis dolor accusantium
        dolorum cupiditate, quasi, provident mollitia modi rerum vitae
        repellendus eligendi quaerat labore. Odio, omnis doloribus incidunt
        dignissimos, eveniet voluptas illo totam consequuntur laborum nesciunt
        aliquid ratione explicabo adipisci laudantium praesentium nulla impedit
        voluptate esse tempore distinctio!"
              />
            </Col>
          </Row>
          <div className="devider"></div>
        </Container>
        <Row className="design-section">
          <Col>
            <div className="design-img">
              <img src={imageDesignWeb} alt="Design Web" />
            </div>
          </Col>
          <Col>
            <h2>Get Design Awesome Now</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quidem veniam optio rerum ullam ea aspernatur id fugit, sit
              laboriosam distinctio cumque voluptates error ab, totam enim
              porro. Quibusdam accusantium quis ipsum. Iste, dignissimos.
              Deserunt odit eos itaque natus neque deleniti, necessitatibus
              voluptate illum voluptas aliquam quos quidem cum? Officiis.
            </p>
          </Col>
        </Row>
        <div className="devider"></div>
      </Fragment>
    );
  }
}

export default Home;
