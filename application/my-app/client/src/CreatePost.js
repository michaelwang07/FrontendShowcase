/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
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
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");

  const addPost = () => {
    Axios.post('http://localhost:3001/CreatePost', {
      title: setTitle,
      category: setCategory,
      description: setDescription,
      price: setPrice,
      photo: setPhoto
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
        {/* Create Post Header */}
        <h1>Create Posting</h1>
        <label>Title</label>
        <input type="text"
          onChange={(event) => { setTitle(event.target.value); }} />
        <label>Category</label>
        {/* Drop down to select category */}
        <Form.Select class="dropDown">
          <option value="books" onClick={(event) => { setCategory("books"); }}>Books</option>
          <option value="clothing" onClick={(event) => { setCategory("clothing"); }}>Clothing</option>
          <option value="electronics" onClick={(event) => { setCategory("electronics"); }}>Electronics</option>
          <option value="furniture" onClick={(event) => { setCategory("furniture"); }}>Furniture</option>
        </Form.Select>
        <label>Description</label>
        <input type="email"
          onChange={(event) => { setDescription(event.target.value); }} />
        <label>Price</label>
        <input type="number"
          onChange={(event) => { setPrice(event.target.value); }} />
        <label>Photo</label>
        <input type="text"
          onChange={(event) => { setPhoto(event.target.value); }} />
          {/* Button to create post */}
        <Link to="/signin"><button>Create Post</button></Link>
      </div>
      <Footer />
    </div>


  );
}

export default CreatePost;