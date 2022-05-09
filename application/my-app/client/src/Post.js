/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
* Team: 06 
*
* File: Post.js
*
* Description: This file allows the user to view all post they have
* personally submitted.
*
*
********************************************************************/


import './App.css';
import { Tabs, Tab, Card, Button, Table, Container } from "react-bootstrap";
import {useState,useEffect} from "react";
import React from "react";
import Axios from "axios";
// BR
// post user created.  will be pulled from DB in the future.
function Post() {
    const [messageList, setMessageList] = useState([]);
    useEffect(() => {
        getMessages();
      }, []);

      async function getMessages(){
        const response = await Axios.get('http://localhost:3001/MyPosts',
        {
            params: {
                user:sessionStorage.getItem("id"),
            }  
        });
        // stores returned values into list
        setMessageList(response.data);
        console.log(response.data);
    };
    return (
        <Table bordered hover>
    
        
             <thead>
                <tr>
                    <th>#</th>
                    <th>Post Title</th>
                    <th>Time Of Post</th>
                    <th>Approval Status</th>
                    
                </tr>
            </thead>

            {messageList.map((val, key) => {
        return <tbody>
                <tr>
                    <td>{key+1}</td>
                    <td>{val.pname}</td>
                    <td>{val.time}</td>
                    <td>{val.approved}</td>
                </tr>
            </tbody>
            })}
        </Table>
   




    );

}
export default Post;