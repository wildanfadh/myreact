import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";
import NavbarTop from "components/navbar/NavbarTop";
import DefaultFooter from "components/footer/Footer";

class About extends Component {
  render() {
    return (
      <Fragment>
        <NavbarTop />
        <Jumbotron fluid>
          <Container>
            <h1>Hello this is React Js</h1>
            <h2>This is About Page</h2>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
        <DefaultFooter />
      </Fragment>
    );
  }
}

export default About;
