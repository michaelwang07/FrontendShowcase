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
import { useNavigate, useLocation } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const [pname, setPName] = useState("");
  const [category, setCategory] = useState(0);
  const [pdescription, setDescription] = useState("");
  const [pprice, setPrice] = useState(0);
  const [pimg, setPhoto] = useState("");
  const user = sessionStorage.getItem("id");
 // Below function pulls the image from the event files
 const uploadImage = async (event) => {
  const file = event.target.files[0];
  const blob = await fileToBlob(file);
  setPhoto(blob);
 }

 // Below function converts our file to type blob for back end storage
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

const loggedIn = () => {
  const id = sessionStorage.getItem("id");
  
  if(id != null) {
      return true;
  }
  else{
      return false;
  }
  
}

  // Axios API to pass Item variables to backend. 
  const addItem = () => {
    // const fd = new FormData();
    // fd.append('image', pimg,pname);
    var today = new Date();
    if(!loggedIn()) {
    //  <Navigate to={'/signin'} replace state = {{ 'referrer':'/createpost' }}/>
    console.log("Log in");
      navigate('/signin', {state : { 'referrer':'/createpost' }});
    }
    Axios.post('http://localhost:3001/CreateItem', {
      category: category,
      pname: pname,
      pdescription: pdescription,
      pprice: pprice,
      pimg: pimg,
      user: user,
      time: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() +' '+ today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    }).then(() => {
      console.log("success");
      navigate('/confirmation');
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

          {/* Title */}
          <label>Title</label>
          <input type="text" required="required"
            onChange={(event) => { setPName(event.target.value); }} />

          {/* Categories */}
          <label>Category</label>
          {/* Drop down to select a category */}
          <div className="dropDown">
            <Form.Select>
              <option value="None">None</option>
              <option value="books" onClick={(event) => { setCategory(1); }}>Books</option>
              <option value="clothing" onClick={(event) => { setCategory(2); }}>Clothing</option>
              <option value="electronics" onClick={(event) => { setCategory(3); }}>Electronics</option>
              <option value="furniture" onClick={(event) => { setCategory(4); }}>Furniture</option>
            </Form.Select>
          </div>

          {/* Description */}
          <label>Description</label>
          <input type="text" required="required"
            onChange={(event) => { setDescription(event.target.value); }} />

          {/* Price */}
          <label>Price</label>
          <input type="number" required="required"
            onChange={(event) => { setPrice(event.target.value); }} />

          {/* Photo */}
          <label className="photo">Photo</label>
          <div className="fileBox">
            <input type="file" className="browse" placeholder="Browse files to upload" 
              onChange={(event) => { uploadImage(event); }} />
          </div>

          {/* Button to create post */}
          <div className="btn-group">
            <button type="reset" className="reset" value="Reset">Cancel</button>
            {/* <button onClick={addItem}>Create Post</button> */}
          </div>
        </Form>
        <div className="btn-group">
        <button onClick={addItem}>Create Post</button></div>

      </div>
      <Footer />
    </div>
  );
}

export default CreatePost;