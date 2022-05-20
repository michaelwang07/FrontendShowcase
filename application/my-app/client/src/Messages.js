/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
* Team: 06 
*
* File: Messages.js
*
* Description: This file allows the user to view any messages they 
* may have received in reagards to their post from interested 
* individuals.
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
// what will be displayed for the messages tab.  in future will be pulled from DB




function Messages() {
    const [messageList, setMessageList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMessages();
      }, []);

      async function getMessages(){
        const response = await Axios.get('http://localhost:3001/getMessages',
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
                    <th>Link to Post</th>
                    <th>Buyer Name</th>
                    <th>Time</th>
                    <th>Message</th>
                    <th>Phone Number</th>
                </tr>
            </thead>

            {messageList.map((val, key) => {
        return <tbody>
                <tr>
                    <td>{key+1}</td>
                    <td onClick={() => testPrint(val.pid)}>{val.pname}</td>
                    <td className="profileMessages" onClick={() => testPrint(val.pid)}>Link</td>
                    <td>{val.sender}</td>
                    <td>{val.time}</td>
                    <td>{val.message}</td>
                    <td>{val.phone}</td>
                </tr>
            </tbody>
            })}
        </Table>
   




    );

}
export default Messages;