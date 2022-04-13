/********************************************************************
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s): Michael Wang 
* Team: 06 
*
* File: Homepage.js
*
* Description: Homepage and the search page which produces the results
*
*
********************************************************************/

import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import Results from "./Results";
import Footer from "./Footer";
import Header from "./Header";

function Homepage() {
   return (
      <div>
      <Header/>
      <Results/>
      <Footer/>
      </div>
   );
 }

 export default Homepage;