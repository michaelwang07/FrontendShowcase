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
import { useNavigate } from "react-router-dom";
// BR
// post user created.  will be pulled from DB in the future.
function Post() {
   const navigate = useNavigate();
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

    const testPrint = (x) => {
      sessionStorage.setItem("post", x);
      navigate('/ProductFunctional');
      // console.log(x);
    };

    return (
        <Table bordered hover>
    
        
             <thead>
                <tr>
                    <th>#</th>
                    <th>Post Title</th>
                    <th>Post ID</th>
                    <th>Date of Post</th>
                    <th>Approval Status</th>
                    
                </tr>
            </thead>

            {messageList.map((val, key) => {
        return <tbody>
                <tr>
                    <td>{key+1}</td>
                    <td>{val.pname}</td>
                    <td className="profileMessages" onClick={() => testPrint(val.pid)}>Link</td>
                    <td>{val.time.toString().substring(0,10)}</td>
                    <td>{val.approved}</td>
                </tr>
            </tbody>
            })}
        </Table>
   




    );

}
export default Post;