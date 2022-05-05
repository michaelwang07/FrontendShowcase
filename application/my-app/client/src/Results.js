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
import {Form, FormControl} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

function Results() {
    
    const [ptag, setPTag] = useState("*");   // P.Tag (Electronics, Furniture, Clothing, Books)
    const [pname, setPName] = useState(""); // P.Name (Name of product set in search bar)

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

    const Example = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
           <Button className="buttons ms-5" variant="success">Message Seller</Button>
        </OverlayTrigger>
    );

    const popover = (
    <Popover id="popover-basic">
        <Popover.Header>
            Name: John Doe<br />
            Telephone: 111-111-1111
         </Popover.Header>
         <Popover.Body>
            <Form.Select className="formSelect" variant="muted" id="dropdown-basic-button" aria-label="Select Exchange Location">
                <option value ="books">Select Exchange Location</option>
                <option value ="books">Student Center</option>
                <option value ="books">Main Library</option>
                <option value ="books">Police Station</option>
                </Form.Select>
            &nbsp;
            <InputGroup className="fromText">
                <FormControl placeholder="Send additional information" as="textarea" rows={5}/>
            </InputGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="send" onClick={() => this.state2.visible}>Send Message</button>
        </Popover.Body>
    </Popover>
    );

    // Find a way to display getUsers without needing onClick for default display
    return (
    <div>
        {/* <Link to ="/"><button>Create User</button></Link> */}
        
        <h5 className="homeHeader" >GatorBay helps SFSU Students, Staff, and Faculty to obtain
        Books, Clothes, Electronics, and Furniture</h5>


        <div className="inputGroup">
            {/* Drop Down */}
            <div>
                <Form.Select className="formSelect">
                <option value ="*" onClick={(event) => {setPTag("*");}}>None</option>
                <option value ="books" onClick={(event) => {setPTag("books");}}>Books</option>
                <option value ="electronics" onClick={(event) => {setPTag("electronics");}}>Electronics</option>
                <option value ="furniture" onClick={(event) => {setPTag("furniture");}}>Furniture</option>
                </Form.Select>
            </div>
            {/* Search Bar */}
            <div>
                <Form className="d-flex" onChange={(event) => {setPName(event.target.value);}}>
                    <Form.Group>
                        <Form.Control className="searchBar" type="text" size="lg"/>
                    </Form.Group>
                    <Button size="lg" variant="outline-success" onClick={getUsers}>Search</Button>
                    {/* <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    /> */}
                </Form>
            </div>
            
            {/* <input type="search" className="searchBar" onChange={(event) => {setPName(event.target.value);}} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <div>
                <button type="button" className="searchButton" onClick={getUsers}>search</button>
            </div> */}
        </div>

        {/* Below function maps our list to readable format */}
        <h4 className="searchResults">{userList.length} results</h4>
        <div className="grid">
            {userList.map((val, key) => {
                return <div>
                    <Card style={{ width: '24rem'}} key={key} className="box">
                    <a href="/Product">
                    <Card.Img className="resultImage" href="/Product" variant="top" src={`data:image/png;base64,${convertPhoto(val.pimg)}`} />
                    </a>
                    <Card.Body>
                        <a href="/Product">
                        <Card.Title><h4>{val.pname}</h4></Card.Title>
                        </a>
                        {/* <Card.Text>{val.pdescription}</Card.Text> */}
                        <Card.Text>
                            <span><h5>Price: ${val.pprice}</h5></span>
                        </Card.Text>
                        <Col className='ms-3'>
                            <Button className="buttons" href="/Product" variant="primary">Product Page</Button>
                        <Example/>
                        </Col>
                    </Card.Body>
                    </Card>
                </div>
            })}
        </div>
    </div>
    );
}

export default Results;
