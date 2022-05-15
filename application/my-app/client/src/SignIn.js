/********************************************************************
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s): Michael Davichick
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

/*                --- CODE REVIEW ---
* 
* @Header Comment
* Great use of a basic header comment. It provides enough information
* to get a good understanding of this file's purpose and it's author.
* 
*/

import './Forms.css';
import Axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(-1); // Store a single user that matches params if valid
  const [userName, setUsername] = useState("");

  // Variable used to save redirection when routing
  const navigate = useNavigate();
  const location = useLocation();

    // Axios GET API Call to retrieve user
      async function SignIn (){
        const response = await Axios.get('http://localhost:3001/SignIn',
        {
            params: {
                email: email,
                password: password
            }
        });
        
        // An invalid response will return an empty array of size 0
        if (response.data.length > 0){ // Confirming the size > 0 ensures we have a valid response
          setUserID(response.data[0].uid);
          setUsername(response.data[0].fname);
        }
    };

/*                --- CODE REVIEW ---
* 
* @function setTimeout()
* Spacing among teh if statements is not consistent.
* Consider reformatting.
* 
*/
    
    const verifyUser = () => {
      // Send our User Parameters to the backend for retrieval
      SignIn();
  
      // If our user List is not null, then there was a successful match between user login and backend
      setTimeout(function(){
        if(userID>=0){
          console.log("success");
          console.log("User name: " + userName);
          console.log("User ID " + userID);
          // Once in this scope, our user has been logged in and we can add them to the session
          sessionStorage.setItem("id", userID); // User ID is a unique key in Users Table to identify individual users
          sessionStorage.setItem("fname", userName);
          sessionStorage.setItem("loggedIn","true"); // loggedIn is a boolean value used to change CSS properties when logged in
         

          if (location && location.state && location.state.referrer) {
            navigate(location.state.referrer);
          } else {
            navigate('/');
          }

        }
        if (userID < 0){ // Else invalid login, prompt user to try again 
          // console.log("passwords do not match!");
          alert("Email or Password was invalid, Please try again.");
        }
      }, 1000);
    };

   // Test function to display user variables on front end
  const displayInfo = () => {
    console.log(email + password);
  };

/*                --- CODE REVIEW ---
* 
* @method onChange
* Consistent with every other onChange event made in Form Validation
* 
*/

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
        <button onClick={verifyUser}>Sign In</button>
        <Link to="">Forgot Password?</Link>
        {/* Link to create an account if user doesn't already have one */}
        <div className="pointer">
          <label>Not a member yet?&nbsp;</label>
         { /* pass along original location to CreateUser then hands it back to signin */}
          <Link to="/createuser"replace state = {{ ...location.state }}>Create Account</Link>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default SignIn;