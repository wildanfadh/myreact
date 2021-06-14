import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
  //   UncontrolledDropdown,
  //   FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  // NavLink,
  Nav,
  Container,
} from "reactstrap";
// core components

// style
import "./NavbarTop.css";

const NavbarTop = () => {
  return (
    <>
      <Navbar className="sticky-top bg-info navbar-css" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="">React App</NavbarBrand>
            <button
              className="navbar-toggler"
              type="button"
              id="navbar-primary"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <Nav navbar>
              <NavItem>
                {/* <NavLink href="/" onClick={(e) => e.preventDefault()}>
                  Home
                </NavLink> */}
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </NavItem>
            </Nav>
            <Form className="form-inline ml-auto" data-background-color="">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Your Email..." type="text"></Input>
              </InputGroup>
            </Form>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
