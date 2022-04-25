import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import Results from "./Results";

function Homepage() {

    return (
        <div>
          
        <Link to ="/team"><button>Team Page</button></Link>
            <br/><br/> Mikes Test Page

                    HEADER
            -------------------------
            

            -----------------------
                    Footer
        </div>
    );
  }

  export default Homepage;