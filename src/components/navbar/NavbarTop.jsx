import React from "react";
import "./NavbarTop.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavbarTop() {
  return (
    <>
      <Navbar bg="primary" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to="/" href="#action1">
                Home
              </Link>
              <Link className="nav-link" to="/about" href="#action2">
                About
              </Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Link className="nav-link" to="/contact" href="#">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
