/********************************************************************
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s): Michael Wang 
* Team: 06 
*
* File: Product.js
*
* Description: Product template for all our products
*
*
********************************************************************/

import { Link, renderMatches } from "react-router-dom";
import './App.css';
import React from "react";
import Header from "./Header";
import { createPopper } from '@popperjs/core';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import Toast from 'react-bootstrap/Toast'
import Axios from "axios";


function Products() {
   const navigate = useNavigate();

   useEffect(() => {
      getProductID();
   }, []);

   const [curProduct, setCurrentProduct] = useState([]);
   const [location, setLocation] = useState("");
   const [message, setMessage] = useState("");
   const [postID, setPostID] = useState("");
   const [postCreator, setPostCreator] = useState("");
   const user = sessionStorage.getItem("id");

   async function getProductID (){
      const response = await Axios.get('http://localhost:3001/SingleProduct',
      {
          params: {
              pid: sessionStorage.getItem("post"),
          }
      });
      setCurrentProduct(response.data);
      console.log(response.data);
      setPostCreator(response.data[0].uid);
      // console.log("testing UID "+response.data[0].uid);
   };

   const sendMessage = () => {
      console.log("location " + location + "message " + message);
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
      } else {
         navigate('/signin');
      }
   };

   const [showB, setShowB] = useState(false);
   const notification = () => setShowB(!showB);

   const onButtonClick = function(event){
      sendMessage();
      notification();
   }

   const popover = (
      <Popover>
         <Popover.Body className='popover-basic'>
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
            <button className="send" onClick={onButtonClick}>Send Message</button>
            <Toast onClose={notification} className="notification" bg={'info'} show={showB} animation={false}>
               <Toast.Header>
                  <strong className="lg-auto">Message Was Sent!</strong>
               </Toast.Header>
               <Toast.Body>Please do not spam similar messages.</Toast.Body>
            </Toast>
         </Popover.Body>
      </Popover>
   );

   const triggerPopover = (x, y) => (
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
         <Button onClick={() => setPID(x, y)} className="buttons ms-5" variant="success">Message Seller</Button>
      </OverlayTrigger>
   );

   const setPID = (x, y) => {
      console.log("PID: " + x);
      setPostID(x);
   };

   return(
      <div className="Product">
         <Header />
         {
            <div className="details">
               {curProduct.map((val, key) => {
                  return <div className="details">
                     <img className="big-img" src={`${(val.pdata)}`} />
                     <div className="description">
                        <div className="row">
                           <h1 className="cardTitle">{val.pname}</h1>
                           <span><h4>${val.pprice}</h4></span>
                        </div>

                        <p>{val.pdescription}</p>
                        {triggerPopover(val.pid, val.user)}
                     </div>
                  </div>
               })}
            </div>
         }
         <Footer />
      </div>
   );
}

export default Products;
 