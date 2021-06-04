import React from "react";
import "./NavbarTop.css";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
// core components

function NavbarTop() {
  return (
    <>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <button
            className="navbar-toggler"
            id="navbarTogglerDemo01"
            type="button"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
            <NavbarBrand href="" onClick={(e) => e.preventDefault()}>
              React App
            </NavbarBrand>
            <Nav className="mr-auto mt-2 mt-lg-0" navbar>
              <NavItem>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <NavLink
                  className="disabled"
                  href=""
                  onClick={(e) => e.preventDefault()}
                >
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Form className="form-inline ml-auto" data-background-color="">
              <FormGroup className="has-white">
                <Input placeholder="Cari" type="text"></Input>
              </FormGroup>
            </Form>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
