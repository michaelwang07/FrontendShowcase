/**
* Project: SFSU Software Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Davichick, William Rattan, Michael Wang
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
import {useState,useEffect} from "react";
import Axios from "axios";
// import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

function Results() {
    const [ptag, setPTag] = useState("*");   // P.Tag (Electronics, Furniture, Clothing, Books)
    const [pname, setPName] = useState(""); // P.Name (Name of product set in search bar)
    useEffect(() => {
        getRecentPosts();
    });

    // store all db results within a list
    // useState stores userList as a list variable check react states for more info
    const [userList, setUserList] = useState([]);
    
    useEffect(() => {
        getRecentPosts();
      }, []);



    async function getRecentPosts(){
        const response = await Axios.get('http://localhost:3001/LastThree',
        {
            
        });
        // stores returned values into list
        setUserList(response.data);
    };

    


    // API call to retreive backend
    async function getUsers (){
        const response = await Axios.get('http://localhost:3001/Products',
        {
            params: {
                ptag: ptag,
                pname: pname,
            }
        });
        // stores returned values into list
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
    <div>
        {/* <Link to ="/"><button>Create User</button></Link> */}

        <h1 className="text-center fw-bold">Results</h1>

        {/* Drop Down */}
        <div class="input-group">
            <Form.Select>
            <option value ="*" onClick={(event) => {setPTag("*");}}>None</option>
            <option value ="books" onClick={(event) => {setPTag("books");}}>Books</option>
            <option value ="electronics" onClick={(event) => {setPTag("electronics");}}>Electronics</option>
            <option value ="furniture" onClick={(event) => {setPTag("furniture");}}>Furniture</option>
            </Form.Select>
            {/* Search Bar */}
            <input type="search" onChange={(event) => {setPName(event.target.value);}} class="form-control search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="search.btn" onClick={getUsers}>search</button>
        </div>

        {/* Below function maps our list to readable format */}
        <h3>Number of Results:{userList.length}</h3>
        <div className="grid">
            
            {userList.map((val, key) => {
                return <div>
                    <Card style={{ width: '18rem'}} key={key} className="box">
                    <Card.Img variant="top" src={`data:image/png;base64,${convertPhoto(val.pimg)}`} />
                    <Card.Body>
                        <Card.Title>{val.pname}</Card.Title>
                        <Card.Text>{val.pdescription}</Card.Text>
                        <Card.Text>Price: ${val.pprice}</Card.Text>
                        <Button href="/Product" variant="primary">Product Page</Button>
                    </Card.Body>
                    </Card>
                </div>
            })}
        </div>
    </div>
    );
}

export default Results;
