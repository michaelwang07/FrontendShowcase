import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import Results from "./Results";
import Footer from "./Footer";

function Homepage() {

   return (
       <div>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
               <a href="/" className="navbar-brand">CSC 648 - 03</a>

               <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="navmenu"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navmenu">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <Link to = '/' className="nav-link">Home Page</Link>
                     </li>
                     <li className="nav-item">
                        <Link to = '/team' className="nav-link">Team Page</Link>
                     </li>
                     <li className="nav-item">
                        <a href="template3" className="nav-link">template3</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         <Results/>
         <Footer/>
       </div>
   );
 }

 export default Homepage;