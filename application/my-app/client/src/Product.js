import {Link, renderMatches} from "react-router-dom";
import './App.css';
import React from "react";
import Header from "./Header";
import { createPopper } from '@popperjs/core';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

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
           <Popover.Header as="h3">Popover right</Popover.Header>
           <Popover.Body>
             And here's some <strong>amazing</strong> content. It's very engaging.
             right?
           </Popover.Body>
         </Popover>
       );
       
       const Example = () => (
         <OverlayTrigger trigger="click" placement="right" overlay={popover}>
           <button variant="success">Click me to see</button>
         </OverlayTrigger>
       );
      console.log(products);
      return(
         <div className="Product">
            <Header/>
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
                     <button className="message">Message Seller</button>
                  </div>   
               </div>
            ))
            }
         </div>
      );
   };
}

export default Product;