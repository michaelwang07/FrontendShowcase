/**
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Davichick, William Rattan, Michael Wang
* Team: 06 
*
* File: Results.js
*
* Description: This component contains all functionality for searching 
*              and displaying results from the back-end using Axios
*              API as our middleware. 
**/

import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
// import {Link} from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
function Results() {
   const navigate = useNavigate();
   const [category, setPTag] = useState("*");   // P.Tag (Electronics, Furniture, Clothing, Books)
   const [pname, setPName] = useState(""); // P.Name (Name of product set in search bar)

   // store all db results within a list
   // useState stores userList as a list variable check react states for more info
   const [userList, setUserList] = useState([]);
   const [location, setLocation] = useState("");
   const [message, setMessage] = useState("");
   const [postID, setPostID] = useState("");
   const [postCreator, setPostCreator] = useState("");
   const user = sessionStorage.getItem("id");


   useEffect(() => {
      getRecentPosts();
   }, []);

   async function getRecentPosts() {
      const response = await Axios.get('http://localhost:3001/LastThree',
         {

         });
      // stores returned values into list
      setUserList(response.data);
   };

   // API call to retreive backend
   async function getUsers() {
      const response = await Axios.get('http://localhost:3001/Products',
         {
            params: {
               category: category,
               pname: pname,
            }
         });
      // stores returned values into list
      setUserList(response.data);
   };


   const Example = (x, y) => (
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
         <Button onClick={() => setPID(x, y)} className="buttons ms-5" variant="success">Message Seller</Button>
      </OverlayTrigger>
   );

   // Display 
   const setPID = (x, y) => {
      console.log("PID: " + x);
      console.log("USER: " + y);
      setPostID(x);
      setPostCreator(y);
   };
   const sendMessage = () => {
      console.log(location + message);
      console.log("POSTPID: " + postID);
      console.log("we are:" + user);
      console.log("sending to: " + postCreator);
      if (user !== null) {
         Axios.post('http://localhost:3001/createMessage', {
            sender: user,
            receiver: postCreator,
            message: message,
            location: location,
            post: postID,
         }).then(() => {
            console.log("success");
         });
         navigate('/');
      } else {
         navigate('/signin');
      }
   };

   const popover = (
      <Popover id="popover-basic">
         <Popover.Header>
            Name: John Doe<br />
            Telephone: 111-111-1111
         </Popover.Header>
         <Popover.Body>
            <Form.Select className="formSelect" variant="muted" id="dropdown-basic-button" aria-label="Select Exchange Location">
               <option onClick={(event) => { setLocation("No Preference"); }} value="No Preference">Select Exchange Location</option>
               <option onClick={(event) => { setLocation("Student Center"); }} value="Student Center">Student Center</option>
               <option onClick={(event) => { setLocation("Main Library"); }} value="Main Library">Main Library</option>
               <option onClick={(event) => { setLocation("Police Station"); }} value="books">Police Station</option>
            </Form.Select>
            &nbsp;
            <InputGroup className="fromText" onChange={(event) => { setMessage(event.target.value); }}>
               <FormControl placeholder="Send additional information" as="textarea" rows={5} />
            </InputGroup>
            <button className="send" onClick={() => sendMessage()}>Send Message</button>
         </Popover.Body>
      </Popover>
   );
   // Test function to display user variables on front end
   // Find a way to display getUsers without needing onClick for default display
   return (
      <div>
         <h5 className="homeHeader">GatorBay helps SFSU Students, Staff, and Faculty to obtain
            Books, Clothes, Electronics, and Furniture</h5>


         <div className="inputGroup">
            {/* Drop Down */}
            <div>
               <Form.Select className="formSelect">
                  <option value="*" onClick={(event) => { setPTag("*"); }}>None</option>
                  <option value="books" onClick={(event) => { setPTag("1"); }}>Books</option>
                  <option value="clothing" onClick={(event) => { setPTag("2"); }}>Clothing</option>
                  <option value="electronics" onClick={(event) => { setPTag("3"); }}>Electronics</option>
                  <option value="furniture" onClick={(event) => { setPTag("4"); }}>Furniture</option>
               </Form.Select>
            </div>
            {/* Search Bar */}
            <div>
               <Form className="d-flex" onChange={(event) => { setPName(event.target.value); }}>
                  <Form.Group>
                     <Form.Control className="searchBar" type="text" size="lg" />
                  </Form.Group>
                  <Button size="lg" variant="outline-success" onClick={getUsers}>Search</Button>
               </Form>
            </div>
         </div>

         {/* Below function maps our list to readable format */}
         <h4 className="searchResults">{userList.length} results</h4>
         <div className="grid">
            {userList.map((val, key) => {
               return <div>
                  <Card style={{ width: '22rem' }} key={key} className="box">
                     <a href="/Product">
                        <Card.Img onClick={() => sessionStorage.setItem("post", val.pid)} className="resultImage" href="/Product" variant="top" src={`${(val.pdata)}`} />
                     </a>
                     <Card.Body>
                        <a href="/Product">
                           <Card.Title className='cardTitle'><h4>{val.pname}</h4></Card.Title>
                        </a>
                        {/* <Card.Text>{val.pdescription}</Card.Text> */}
                        <Card.Text>
                           <span><h5>Price: ${val.pprice}</h5></span>
                        </Card.Text>
                        <Col className='ms-2'>
                           {/* <Button size="lg" className="buttons" href="/Product" variant="primary">Product Page</Button> */}

                           {/* The below button function will now store the product ID into sessions and navigate to a new page using href */}
                           <Button onClick={() => sessionStorage.setItem("post", val.pid)} className="buttons" href="/ProductFunctional" variant="primary">Product Page</Button>
                           {/* Opens popup in which we send the cards PID value */}
                           {Example(val.pid, val.user)}
                        </Col>
                     </Card.Body>
                  </Card>
               </div>
            })}
         </div>
      </div>
   );
}

export default Results;
