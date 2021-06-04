import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Jumbotron } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron fluid>
          <Container>
            <h1>Hello this is React Js</h1>
            <h2>This is Contact Page</h2>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Contact;
