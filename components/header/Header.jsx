import React, { useState } from "react";
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
import { IoClose } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  const location = router.pathname;
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header">
      <Navbar expand="md" light>
        <NavbarBrand>
          <img
            src={"/static/images/SEforALL_Logo_White.png"}
            alt="logo"
            className="logo cursor-pointer"
            onClick={() => window.open("https://www.seforall.org/")}
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
       {isOpen && <div className={'mobile-overlay mobile-show'} />}
        <Collapse navbar isOpen={isOpen}>
        <IoClose size={20} className="text-text mr-[5px] mobile-show ml-auto close-icon" onClick={() => setIsOpen(!isOpen)} />
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
                  location === "/resources" ? "active" : ""
                }`}
                href="/resources"
              >
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={location === "/about" ? "active" : ""}
                href="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={`${location === "/contact" ? "active" : ""}`}
                href="/contact"
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
