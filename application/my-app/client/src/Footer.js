import { Link } from "react-router-dom";
import './App.css';
import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";


function Footer() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">GatorBay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#link">Careers</Nav.Link>
                            <Nav.Link href="#home">Terms and Conditions</Nav.Link>
                            <Nav.Link href="#link">Privacy Policy</Nav.Link>
                            <Nav.Link href="#home">Contact Information</Nav.Link>
                            <Nav.Link href="#link">Instagram</Nav.Link>
                            <Nav.Link href="#home">Twitter</Nav.Link>
                            <Nav.Link href="#link">Facebook</Nav.Link>
                            <Nav.Link href="#link">Linkedin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;