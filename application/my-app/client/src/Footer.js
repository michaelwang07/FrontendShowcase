/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Bobby Roots
* Team: 06 
*
* File: Footer.js
*
* Description: This file allows the user to acess items like About
* Us, Careers, and Contact information.  This file will be displayed
* on all pages.
*
*
********************************************************************/


import { Link } from "react-router-dom";
import './App.css';
import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";


function Footer() {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand href="#home">GatorBay</Navbar.Brand>
                    <p></p>
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