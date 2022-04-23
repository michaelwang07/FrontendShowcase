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

  const [pname, setPName] = useState("");
  const [category, setCategory] = useState(0);
  const [pdescription, setDescription] = useState("");
  const [pprice, setPrice] = useState(0);
  const [pimg, setPhoto] = useState("");

 const uploadImage = async (event) => {
  const file = event.target.files[0];
  const blob = await fileToBlob(file);
  // console.log(blob);
  setPhoto(blob);
 }



 const fileToBlob = (file) => {
  return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); 

      fileReader.onloadend = () =>{
          resolve(fileReader.result);
      };

      fileReader.onerror = (error) =>{
          reject(error);
      };
  });
};

  const addItem = () => {
    // const fd = new FormData();
    // fd.append('image', pimg,pname);
    Axios.post('http://localhost:3001/CreateItem', {
      category: category,
      pname: pname,
      pdescription: pdescription,
      pprice: pprice,
      pimg: pimg,
    }).then(() => {
      console.log("success");
    });
  };


    // Test function to display user variables on front end
  const displayInfo = () => {
    console.log(pimg);
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


          <label>Product Name</label>
          <input type="text"
            onChange={(event) => { setPName(event.target.value); }} />
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


          <label>Product Description</label>
          <input type="text"
            onChange={(event) => { setDescription(event.target.value); }} />
          <label>Product Price</label>
          <input type="number"
            onChange={(event) => { setPrice(event.target.value); }} />

          <label className="photo">Product Photo</label>
          <div className="fileBox">
            <input type="file" className="browse"
              onChange={(event) => { uploadImage(event); }} />

          </div>

           <button type="reset" value="Reset">Reset</button>
          </Form>

          {/* Button to create post */}
          {/* <Link to="/signin"><button onClick={displayInfo}>Create Post</button></Link> */}
          <button onClick={addItem}>Create Post</button>
      
      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;