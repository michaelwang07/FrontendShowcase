/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Davichick, Michael Almeda
* Team: 06 
*
* File: CreateUser.js
*
* Description: This file allows the user to create an account with our
* web app by having them provide their information such as name, phone
* number, email, SFSU ID, and password.
*
*
********************************************************************/

import './App.css';
import './Forms.css';
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function CreateUser() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setID] = useState(0);
  const [password, setPassword] = useState("");

  // const displayInfo = () => {
  //   console.log(name + phone + email + userid + password);
  // };

  const addUser = () => {
    Axios.post('http://localhost:3001/CreateUser', {
      userid: userid,
      name: name,
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
      {/* Results page button that links to results page */}
      {/* <Link to="/results"><button>Results Page</button></Link> */}
      <div className="information">
        {/* Registration header */}
        <h1>Registration</h1>
        {/* Fields that are provided by user */}
        <label>Name</label>
        <input type="text"
          onChange={(event) => { setName(event.target.value); }} />
        <label>Phone Number</label>
        <input type="text"
          onChange={(event) => { setPhone(event.target.value); }} />
        <label>Email</label>
        <input type="email"
          onChange={(event) => { setEmail(event.target.value); }} />
        <label>Student ID</label>
        <input type="number"
          onChange={(event) => { setID(event.target.value); }} />
        <label>Password</label>
        <input type="password"
          onChange={(event) => { setPassword(event.target.value); }} />
        <form >
          {/* Terms and conditions checkbox */}
          <input type="checkbox" class="checkbox" />
          <label>By clicking, you are confirming<br></br>that you agree to this<br></br>sites Terms and Conditions.</label>
        </form>
        {/* Button to submit user's information to create a new account */}
        <Link to="/postconfirmation"><button onClick={addUser}>Create Account</button></Link>
      </div>
      <Footer />
    </div>


  );
}

export default CreateUser;