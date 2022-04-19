/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda, Michael Davichick
* Team: 06 
*
* File: CreatePost.js
*
* Description: This file allows the user to create a post by having
* them complete the required fields to create a post.
*
*
********************************************************************/

import './Forms.css';
import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function CreatePost() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");

  // const addPost = () => {
  //   Axios.post('http://localhost:3001/CreatePost', {
  //     title: setTitle,
  //     category: setCategory,
  //     description: setDescription,
  //     price: setPrice,
  //     photo: setPhoto
  //   }).then(() => {
  //     console.log("success");
  //   });
  // };

    // Test function to display user variables on front end
  const displayInfo = () => {
    console.log(title + category + description + price);
  };


  return (
    <div className="App">
      <Header />
      {/* Results page button that links to results page */}
      {/* <Link to="/results"><button>Results Page</button></Link> */}
      <div className="information">
        {/* Create Post Header */}
        <h1>Create Posting</h1>
        <Form className="information">
          <label>Title</label>
          <input type="text"
            onChange={(event) => { setTitle(event.target.value); }} />
          <label>Category</label>
          {/* Drop down to select category */}
          <div className="dropDown">
            <Form.Select>
              <option value="None">None</option>
              <option value="books" onClick={(event) => { setCategory(1); }}>Books</option>
              <option value="clothing" onClick={(event) => { setCategory(2); }}>Clothing</option>
              <option value="electronics" onClick={(event) => { setCategory(3); }}>Electronics</option>
              <option value="furniture" onClick={(event) => { setCategory(4); }}>Furniture</option>
            </Form.Select>
          </div>
          <label>Description</label>
          <input type="text"
            onChange={(event) => { setDescription(event.target.value); }} />
          <label>Price</label>
          <input type="number"
            onChange={(event) => { setPrice(event.target.value); }} />

          {/* <label className="photo">Photo</label>
          <div className="fileBox">
            <input type="file" className="browse"
              onChange={(event) => { setPhoto(event.target.value); }} />
          </div> */}
           <button type="reset" value="Reset">Reset</button>
          </Form>

          {/* Button to create post */}
          {/* <Link to="/signin"><button onClick={displayInfo}>Create Post</button></Link> */}
          <button onClick={displayInfo}>Create Post</button>
      
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;