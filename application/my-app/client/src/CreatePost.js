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
        <Form className="information">

          {/* Titles */}
          <label>Title</label>
          <input type="text"
            onChange={(event) => { setTitle(event.target.value); }} />

          {/* Categories */}
          <label>Category</label>
          {/* Drop down to select a category */}
          <div class="dropDown">
            <Form.Select>
              <option value="None">None</option>
              <option value="books" onClick={(event) => { setCategory("books"); }}>Books</option>
              <option value="clothing" onClick={(event) => { setCategory("clothing"); }}>Clothing</option>
              <option value="electronics" onClick={(event) => { setCategory("electronics"); }}>Electronics</option>
              <option value="furniture" onClick={(event) => { setCategory("furniture"); }}>Furniture</option>
            </Form.Select>
          </div>

          {/* Description */}
          <label>Description</label>
          <input type="email"
            onChange={(event) => { setDescription(event.target.value); }} />

          {/* Price */}
          <label>Price</label>
          <input type="number"
            onChange={(event) => { setPrice(event.target.value); }} />

          {/* Photo */}
          <label class="photo">Photo</label>
          <div class="fileBox">
            <input type="file" class="browse"  
              onChange={(event) => { setPhoto(event.target.value); }} />
          </div>

          {/* Button to create post */}
          <div class="btn-group">
            <button type="reset" value="Reset">Reset</button>
            <Link to="/signin"><button>Create Post</button></Link>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;