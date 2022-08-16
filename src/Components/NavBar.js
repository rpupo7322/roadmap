import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {



  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="navbar" default expand="md">

        {/* <NavbarBrand href="/">Train GRC</NavbarBrand> */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link-text"
                href=""
              >
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-text"
                // style={{ color: "black" }}
                href=""
              >
                FRONT END
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-text"
                // style={{ color: "black" }}
                href=""
              >
                BACK END
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="last1 nav-link-text"
                // style={{ color: "black" }}
                href=""
              >
                ABOUT
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
