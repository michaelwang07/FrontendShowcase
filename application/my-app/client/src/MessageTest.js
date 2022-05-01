import './Forms.css';
import React from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import {useState,useEffect} from "react";

function MessageTest() {

  const [user1, setUser1] = useState(0);
  const [user2, setUser2] = useState(0);
  const [message,setMessage] = useState("");
  const [location,setLocation] = useState("");
  const [messageListSent, setMessageListSent] = useState([]);
  const [messageListRecieved, setMessageListRecieved] = useState([]);
  const [userList, setUserList] = useState([]);
  
  const user = sessionStorage.getItem("id");
    useEffect(() => {
        getUsers();
      }, []);

    async function getUsers(){
      const currentUser = sessionStorage.getItem("id")
      setUser1(currentUser)
        const response = await Axios.get('http://localhost:3001/getMessagesTest',
        {
          params: {
            user:user,
        }
        });
        // stores returned values into list
        setUserList(response.data);
    };



  const createMessage = () => {
    const currentUser = sessionStorage.getItem("id")
    setUser1(currentUser)
    // const fd = new FormData();
    // fd.append('image', pimg,pname);
    Axios.post('http://localhost:3001/createMessage', {
      user1: user1,
      user2: user2,
      message: message,
      location: location,
    }).then(() => {
      console.log("success");
    });
  };

  async function getMessagesSent (){
    const currentUser = sessionStorage.getItem("id")
    setUser1(currentUser)
    const response = await Axios.get('http://localhost:3001/getMessagesSent',
    {
        params: {
            user1:user1,
        }
    });
    setMessageListSent(response.data);
};

async function getMessagesRecieved (){
    const currentUser = sessionStorage.getItem("id")
    setUser1(currentUser)
    const response = await Axios.get('http://localhost:3001/getMessagesRecieved',
    {
        params: {
            user2:user1,
        }
    });
    setMessageListRecieved(response.data);
};

  return (
    <div className="App">
        <div className="dropDown">
          {getUsers}
          {console.log(userList)}
            <Form.Select>
                <option value="Mike" onClick={(event) => { setUser2(1); }}>Mike</option>
                <option value="John" onClick={(event) => { setUser2(2); }}>John</option>
                <option value="micheal" onClick={(event) => { setUser2(3); }}>Michael</option>
                <option value="bobby" onClick={(event) => { setUser2(4); }}>Bobby</option>
            </Form.Select>
</div>

        <input type="message" required
            onChange={(event) => { setMessage(event.target.value); }} />
         <input type="location" required
            onChange={(event) => { setLocation(event.target.value); }} />

        <button onClick={createMessage}>send Message</button>
        
        <div>
        <button onClick={getMessagesSent}>check Sent Messages:</button>
        
        {messageListSent.map((val, key) => {
            
                return <div>
                <span><h4>Messages: {val.message} sent To {val.fname}</h4></span>
            </div>
            })}

        </div>
        <div>

        <button onClick={getMessagesRecieved}>check Recieved Messages:</button>
        
        {messageListRecieved.map((val, key) => {
            
                return <div>
                <span><h4>Messages: {val.message} sent from {val.fname}</h4></span>
            </div>
            })}

        </div>
    </div>
  );
}

export default MessageTest;