/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
* Team: 06 
*
* File: PostConfirmation.js
*
* Description: This file provides the user with a preview of their post
* prior to it being approved by an admin.
*
*
********************************************************************/

import './App.css';
import './Forms.css';
import Axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import UserProfile from "./UserProfile";

function PostConfirmation() {

    const [post, setPost] = useState("");

    const addConfirmPost = () => {
        Axios.post('http://localhost:3001/ConfirmPost', {
            post: setPost,
        }).then(() => {
            console.log("success");
        });
    };

    const loggedIn = () => {
        const id = UserProfile.getID();
        if(id != null) {
            return true;
        }
        else{
            return false;
        }
        
    }

    return (
        !loggedIn() ?
            <Navigate to={'/signin'} replace state = {{ 'referrer':'/createpost' }}/> :
            (<div className="App">
                <Header />
                {/* Results page button that links to results page */}
                {/* <Link to="/results"><button>Results Page</button></Link> */}
                <div className="information">
                    {/* Post Preview header */}
                    <h1>Post Preview</h1>
                    <p className="preview">This post may take up to 24 hours for an Admin to accept.</p>
                    {/* Button to confirm user's post */}
                    <button>Confirm Post</button>
                </div>
                <Footer />
            </div>)


    );
}

export default PostConfirmation;