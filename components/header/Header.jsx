import React from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const router = useRouter();
  const location = router.pathname;
  return (
    <div className="header">
      <Navbar expand="md" light>
        <NavbarBrand href="/">
          <img src={"/static/images/logo.svg"} alt="logo" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink
                className={`${location === "/" ? "active" : ""}`}
                href="/"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${
                  location === "/featureresources" ? "active" : ""
                }`}
                href="/featureresources"
              >
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location === "/aboutus" ? "active" : ""}
                href="/aboutus"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/contactus" ? "active" : ""}`}
                href="/contactus"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
