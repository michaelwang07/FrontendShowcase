/**
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Davichick, William Rattan
* Team: 06 
*
* File: Results.js
*
* Description: This component contains all functionality for searching 
*              and displaying results from the back-end using Axios
*              API as our middleware. 
**/

import './App.css';
import React from "react";
import {useState} from "react";
import Axios from "axios";
// import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
// import {Buffer} from 'buffer';
// Buffer.from('anything','base64');

function Results() {
    // Variables to Store User Data for Backend Quaries 
    const [ptag, setPTag] = useState("*");   // P.Tag (Electronics, Furniture, Clothing, Books)
    const [pname, setPName] = useState(""); // P.Name (Name of product set in search bar)

    // Store all DB results within a list
    const [userList, setUserList] = useState([]);

    // API call to grab queries from Back-End
    async function getUsers (){
        const response = await Axios.get('http://localhost:3001/Products',
        {
            params: {
                ptag: ptag,
                pname: pname,
            }
        });
        setUserList(response.data);
    };

    // Function to convert buffer type image to base64 for display
    const convertPhoto = (file) => {
        if (file !== null){
            const base64String = btoa(String.fromCharCode(...new Uint8Array(file.data))); // Conversion 
            return base64String;
        }
    }

    // Find a way to display getUsers without needing onClick for default display
    return (
    <div className="App">

        <div className="results">
        <h1>Results</h1>

        {/* Drop Down */}
        <div className="input-group">
        <Form.Select>
        <option value ="*" onClick={(event) => {setPTag("*");}}>None</option>
        <option value ="books" onClick={(event) => {setPTag("books");}}>Books</option>
        <option value ="electronics" onClick={(event) => {setPTag("electronics");}}>Electronics</option>
        <option value ="furniture" onClick={(event) => {setPTag("furniture");}}>Furniture</option>
        </Form.Select>
        {/* Search Bar */}
        <input type="search" onChange={(event) => {setPName(event.target.value);}} className="form-control search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="search.btn" onClick={getUsers}>search</button>
        </div>

         {/* Below function maps our list to readable format */}
         {userList.map((val, key) => {
             return <div className="user">
                 
                 <h3>Name:<br/> {val.pname}</h3>
                 <h3>Description:<br/> {val.pdescription}</h3>
                 <h3>Tag:<br/> {val.ptag}</h3>
                 <img src={`data:image/png;base64,${convertPhoto(val.pimg)}`} alt="tx"/>

                 </div>
         })}

        </div>
     </div>
    );
  }

  export default Results;
