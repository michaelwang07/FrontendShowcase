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
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]); // Store a single user that matches params if valid

  // Variable used to save redirection when routing
  const navigate = useNavigate();


    // Axios GET API Call to retrieve user
      async function SignIn (){
        const response = await Axios.get('http://localhost:3001/SignIn',
        {
            params: {
                email: email,
                password: password
            }
        });
        // stores returned values into list
        setUser(response.data);
    };

    const verifyUser = () => {
      // Send our User Parameters to the backend for retrieval
      SignIn();
      // If our user List is not null, then there was a successful match between user login and backend
      if(user!== null){
        console.log("success");
        // Once in this scope, our user has been logged in and we can add them to the session
        sessionStorage.setItem("id", user[0].uid); // User ID is a unique key in Users Table to identify individual users
        sessionStorage.setItem("loggedIn","true"); // loggedIn is a boolean value used to change CSS properties when logged in
        navigate('/postconfirmation'); // Once logged in, we can navigate to another page
      }
      else {  // Else invalid login, prompt user to try again 
        // console.log("passwords do not match!");
        alert("Email or Password was invalid, Please try again.");
      }
    };

   // Test function to display user variables on front end
  const displayInfo = () => {
    console.log(email + password);
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
        <button onClick={displayInfo}>Sign In</button>
        <Link to="">Forgot Password?</Link>
        {/* Link to create an account if user doesn't already have one */}
        <div className="pointer">
          <label>Not a member yet?&nbsp;</label>
          <Link to="/createuser">Create Account</Link>
        </div>
      </div>
      <Footer />
    </div>


  );
}

export default SignIn;