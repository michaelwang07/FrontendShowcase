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
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Button } from 'react-bootstrap';
import Axios from "axios";


function Products() {

   const [curProduct, setCurrentProduct] = useState([]);

   useEffect(() => {
      getProductID();
   }, []);

   async function getProductID() {
      const response = await Axios.get('http://localhost:3001/SingleItem',
         {
            params: {
               pid: sessionStorage.getItem("post"),
            }
         });
      setCurrentProduct(response.data);
      console.log(response.data);
   };

   // return (
   //    <div>
   //       <div className="grid">
   //          {curProduct.map((val, key) => {
   //             return <div>
   //                <h1>{val.pname}</h1>
   //                <h1>{val.pdescription}</h1>
   //                <h1>{val.pprice}</h1>
   //                {/* <img src={`data:image/png;base64,${convertPhoto(val.pimg)}`}></img> */}
   //                <img src={`${(val.pdata)}`}></img>
   //             </div>
   //          })}
   //       </div>
   //    </div>
   // );

   const popover = (
      <Popover id="popover-basic">
         <Popover.Header>
            Name: John Doe<br />
            Telephone: 111-111-1111
         </Popover.Header>
         <Popover.Body>
            <Form.Select className="formSelect" variant="muted" id="dropdown-basic-button" aria-label="Select Exchange Location">
                <option value ="books">Select Exchange Location</option>
                <option value ="books">Student Center</option>
                <option value ="books">Main Library</option>
                <option value ="books">Police Station</option>
            </Form.Select>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="send" onClick={() => this.state2.visible}>Send Message</button>
         </Popover.Body>
      </Popover>
      );

   const Example = () => (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
         <Button className="message" variant="success">Message Seller</Button>
      </OverlayTrigger>
   );

   return(
      <div className="Product">
         <Header />
         {
            <div className="details">
               {curProduct.map((val, key) => {
                  return <div className="details">
                     <div className="big-img">
                        <img src={`${(val.pdata)}`} />
                     </div>

                     <div className="description">
                        <div className="row">
                           <h2>{val.pname}</h2>
                           <span>${val.pprice}</span>
                        </div>

                        <p>{val.pdescription}</p>
                        <Example/>
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
 