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
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { Button} from 'react-bootstrap';
import Axios from "axios";

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
      index: 0,
      price:10,
   };

    handlePrice = function(int){
      this.setState({price: int})
   }
  

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


  // API Call to Grab Product from backend stored in Sessions from Card click
  async function getProductID (){
   const response = await Axios.get('http://localhost:3001/SingleProduct',
   {
       params: {
           pid: sessionStorage.getItem("post"),
       }
   });
   // stores returned values into list
   // setUserList(response.data);
   console.log(response.data);
   console.log(response.data[0].pprice);
};
   getProductID ();
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
      
      // console.log(products);
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
                     {/* <button onLoad={getProductID ()} onClick={() => console.log("button pressed")}>Display Product Information</button> */}
                     <button onClick={() => console.log(this.state.price)}>Display Product Information</button>

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