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


function Products() {

   const [curProduct, setCurrentProduct] = useState([]);


   useEffect(() => {
      getProductID();
    }, []);
   
   const convertPhoto = (file) => {
        if (file !== null){
            const base64String = btoa(String.fromCharCode(...new Uint8Array(file.data))); // Conversion 
            return base64String;
        }
    }


   async function getProductID (){
      const response = await Axios.get('http://localhost:3001/SingleItem',
      {
          params: {
              pid: sessionStorage.getItem("post"),
          }
      });
      setCurrentProduct(response.data);
      console.log(response.data);
   };

   return (
      <div>

<div className="grid">
            {curProduct.map((val, key) => {
                return <div>
                    <h1>{val.pname}</h1>
                    <h1>{val.pdescription}</h1>
                    <h1>{val.pprice}</h1>
                    {/* <img src={`data:image/png;base64,${convertPhoto(val.pimg)}`}></img> */}
                    <img src={`${val.pdata}`}></img>

                </div>
            })}
        </div>

      </div>
   );


}

export default Products;
