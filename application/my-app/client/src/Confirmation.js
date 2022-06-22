import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Button from 'react-bootstrap/Button'

function Confirmation() {
   return(
      <div>
         <Header/>
         <div className="confirmationBox">
            <h1 className="confirmationTitle">
               Post Created Successfuly
            </h1>
            <p className="confirmationText">
               This post will take up to 24 hours for Admins <br/>to approve before released onto our website. <br/>Thank you for your patience! 
            </p>
            <Button href="/" className="confirmButton" style={{fontSize:"32px"}}>
            Confirm</Button>
         </div>
         <Footer/>
      </div>
   );
}

export default Confirmation