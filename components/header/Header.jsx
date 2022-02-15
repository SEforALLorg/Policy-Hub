import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    Collapse,
    NavItem,
    NavLink
}
    from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className='header'>
            <Navbar
                expand="md"
                light
            >
                <NavbarBrand href="/">

                    <img src={'static/images/logo.svg'} alt="logo" className="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="m-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                Resources
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
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