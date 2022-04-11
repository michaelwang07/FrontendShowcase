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