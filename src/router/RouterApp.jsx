import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";

const RouterApp = () => {
  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </HashRouter>
  );
};

export default RouterApp;
