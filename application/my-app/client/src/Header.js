/********************************************************************
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s): Michael Wang 
* Team: 06 
*
* File: Header.js
*
* Description: Navbar for our entire website
*
*
********************************************************************/
import { Link } from "react-router-dom";
import './App.css';
import React from "react";
// import Dashboard from "./Dashboard";
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";

function Header() {
   return(
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="navbar">
         <Navbar.Brand className="classBrand" href="/">CSC 648 - 03</Navbar.Brand>
         <Navbar.Text className="warning">SFSU Software Engineering Project CSC 648-848, Spring 2022. For Demonstration Only</Navbar.Text>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse>
            <Nav className="basicNav">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/createpost">Create Post</Nav.Link>
               <Nav.Link href="/team">Team</Nav.Link>
               <Nav.Link href="/signin">Log In</Nav.Link>
               <Nav.Link href="/createuser">Sign Up</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
      </Navbar>
   );
}

function clicker() {
   sessionStorage.clear()
}

function Logger() {
   return(
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="navbar">
         <Navbar.Brand className="classBrand" href="/">CSC 648 - 03</Navbar.Brand>
         <Navbar.Text className="warning">SFSU Software Engineering Project CSC 648-848, Spring 2022. For Demonstration Only</Navbar.Text>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse>
            <Nav className="basicNav">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/createpost">Create Post</Nav.Link>
               <Nav.Link href="/team">Team</Nav.Link>
               <Nav.Link href="/dashboard">Profile</Nav.Link>
               <Nav.Link href="/" onClick={clicker}>Sign Out</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
      </Navbar>
   );
}

const condition = sessionStorage.getItem("loggedIn") === null ? Header : Logger
// const condition2 = sessionStorage.getItem("loggedIn") !== null ? Header : Logger
export default condition;

// old navbar bootstrap without react

// return(
//    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
//       <div className="container">
//          <a href="/" className="navbar-brand">CSC 648 - 03</a>

//          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//          </button>

//          <div className="collapse navbar-collapse" id="navmenu">
//             <ul className="navbar-nav ms-auto">
//                <li className="nav-item">
//                   <Link to = '/' className="nav-link">Home Page</Link>
//                </li>
//                <li className="nav-item">
//                   <Link to = '/team' className="nav-link">Team Page</Link>
//                </li>
//                <li className="nav-item">
//                   <a href="template3" className="nav-link">template3</a>
//                </li>
//             </ul>
//          </div>
//       </div>
//    </nav>
// );