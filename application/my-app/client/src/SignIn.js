/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
* Team: 06 
*
* File: SignIn.js
*
* Description: This file allows the user to sign into their account
* by providing their email and password. If they don't have an account
* they can choose the link to create an account.
*
*
********************************************************************/

import './Forms.css';
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addPost = () => {
    Axios.post('http://localhost:3001/SignIn', {
      email: setEmail,
      password: setPassword
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <Header />
      {/* Results page button that links to results page */}
      {/* <Link to="/results"><button>Results Page</button></Link> */}
      <div className="information">
        {/* Sign in header */}
        <h1>Sign In</h1>
        {/* Sign in fields */}
        <label>Email</label>
        <input type="text"
          onChange={(event) => { setEmail(event.target.value); }} />
        <label>Password</label>
        <input type="password"
          onChange={(event) => { setPassword(event.target.value); }} />
        <button onClick={addPost}>Sign In</button>
        <label>Forgot Password?</label>
        {/* Link to create an account if user doesn't already have one */}
        <div className="pointer"><Link to="/createuser">Not a member yet?<br /> Create Account</Link>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default SignIn;