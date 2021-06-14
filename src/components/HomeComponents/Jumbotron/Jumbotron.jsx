import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

// style
import "./Jumbotron.css";

class JumbotronHeader extends Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotron-css mb-5">
        <Container>
          <Row>
            <Col className="judul-css">
              <h1>MyReact Page</h1>
              <p>this my first page with React Js</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default JumbotronHeader;
