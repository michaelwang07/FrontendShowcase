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

import {Link, renderMatches} from "react-router-dom";
import './App.css';
import React from "react";
import Header from "./Header";
import { createPopper } from '@popperjs/core';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Dropdown } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";
import Footer from "./Footer";

class Product extends React.Component{

   state = {
      products: [
         {
            "pid": "3",
            "title": "CSC 220 Intro to Java",
            "src": [
               "https://images-na.ssl-images-amazon.com/images/I/814YmHvcy3L.jpg",
               "https://m.media-amazon.com/images/I/51z0SOZK4YL.jpg",
               "https://res.cloudinary.com/practicaldev/image/fetch/s--_LATsXYZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://codegym.cc/api/1.0/rest/images/10000017/e19e6e99-997b-4429-9d9f-06b092ecece2%3Fsize%3D1024",
            ],
            "description": "The holy grail of CSC foundation.",
            "price": 50,
            "count": 1
         }
      ],
      index: 0
   };

   state2 = {
      visible: true
   }
   
   myRef = React.createRef();

   handleTab = index => {
      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i = 0; i < images.length; i++) {
         images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
   };

   render(){
      const {products, index} = this.state;
      const popover = (
      <Popover id="popover-basic">
         <Popover.Header>
            Name: John Doe<br />
            Telephone: 111-111-1111
         </Popover.Header>
         <Popover.Body>
            <DropdownButton variant="muted" id="dropdown-basic-button" title="Select Exchange Location">
            <Dropdown.Item href="#/action-1">Student Center</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Main Library</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Police Station</Dropdown.Item>
            </DropdownButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="send" onClick={() => this.state2.visible}>Send Message</button>
         </Popover.Body>
      </Popover>
      );
       
      const Example = () => (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
         <button className="message" variant="success">Message Seller</button>
      </OverlayTrigger>
      );

      function AlertDismissibleExample() {
         const [show, setShow] = useState(false);
       
         if (show) {
            return (
               <Alert variant="success" onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>Message Sent</Alert.Heading>
                  <p>
                  Please wait for the seller to respond to you. Thank You!
                  </p>
               </Alert>
            );
         }
         return <button className="send" onClick={() => setShow(true)}>Show Alert</button>;
      }
      
      console.log(products);
      return(
         <div className="Product">
            <Header/>
            <AlertDismissibleExample/>
            {
            products.map(item => (
               <div className="details" key={item._id}>
                  <div className="big-img">
                     <img src={item.src[index]} alt=""/>
                  </div>

                  <div className="description">
                     <div className="row">
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                     </div>

                     <p>{item.description}</p>
                     <div className="thumb" ref={this.myRef}>
                        {
                           item.src.map((img, index) => (
                              <img src={img} alt="" key={index} 
                              onClick={() => this.handleTab(index)}
                              />
                           ))
                        }
                     </div>
                     
                     <Example />
                  </div>   
               </div>
            ))
            }
            <Footer/>
         </div>
      );
   };
}

export default Product;