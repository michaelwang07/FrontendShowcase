/********************************************************************
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Davichick, Michael Almeda
* Team: 06 
*
* File: CreateUser.js
*
* Description: This file allows the user to create an account with our
* web app by having them provide their information such as name, phone
* number, email, and password.
*
*
********************************************************************/

// import './App.css';
import './Forms.css';
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateUser() {
  // State variables to store our user information
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  // Variable used to save redirection when routing
  const navigate = useNavigate();

  // Test function to display user variables on front end
  // const displayInfo = () => {
  //   console.log(fname + lname + phone + email + userid + password);
  // };


  // Below function checks if password and confirm password match before pushing to backend
  // Can be modified to include more variable checks if needed
  const fieldValidation = () => {
    if (confirmpassword === password) {
      console.log("passwords match");
      // addUser(); // Function to add user to backend
      //navigate('/postconfirmation');
    }
    else {
      console.log("passwords do not match!");
      alert("Passwords do not match! Please re-enter and try again.");
    }
  };

  function checkFunction() {
    if ((document.getElementById("check")).checked) {
      alert("The checkbox is checked");
    }
    else {
      alert("The checkbox is not checked")
    }
  }

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /\S+@\S+\.\S+/
  //     )
  // }

  // Axios API to pass user variables to backend. 
  const addUser = () => {
    Axios.post('http://localhost:3001/CreateUser', {
      fname: fname,
      lname: lname,
      phone: phone,
      email: email,
      password: password
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="information">

        {/* Registration header */}
        <h1>Sign Up</h1>

        {/* Fields that are provided by user */}
        <Form className="information">
          {/* First Name */}
          <label>*First Name</label>
          <input type="text" required
            oninvalid="this.setCustomValidity('Enter User Name Here')"
            oninput="this.setCustomValidity('')"
            onChange={(event) => { setFName(event.target.value); }} />

          {/* Last Name */}
          <label>*Last Name</label>
          <input type="text" required
            onChange={(event) => { setLName(event.target.value); }} />

          {/* Phone Number */}
          <label>*Phone Number</label>
          {/* <br /><span class="phoneFormat">(format: xxx-xxx-xxxx)</span> */}
          <input type="input" placeholder="e.g. xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={(event) => { setPhone(event.target.value); }} required />
          <span class="disclaimer" >*Phone numbers are only used if an issue occurs</span>

          {/* Email */}
          <label>*Email</label>
          <input type="email" id="email" pattern="[A-Za-z]{1,15}@mail.sfsu.edu" placeholder="gator@mail.sfsu.edu"
            onChange={(event) => { setEmail(event.target.value); }} required="required" />

          {/* Password/Confirm Password */}
          <label>*Password</label>
          <input type="password" required
            onChange={(event) => { setPassword(event.target.value); }} />
          <label>*Confirm Password </label>
          <input type="password" required
            onChange={(event) => { setConfirmPassword(event.target.value); }} />

          {/* Terms and conditions checkbox */}
          <label class="container">By clicking, you are agreeing <br></br> to this sites&nbsp;
            <Link to="">Terms and Conditions.</Link>
            <input type="checkbox" id="check" onclick="checkFunction()" required="required" />
            <span class="checkmark"></span>
          </label>

          {/* Sign up and cancel buttons */}
          <div class="btn-group">
            <button type="reset" value="Reset">Cancel</button>
            {/* Submit */}
            <button onClick={fieldValidation}>Sign Up</button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateUser;