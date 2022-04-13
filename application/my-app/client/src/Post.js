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
// BR
// post user created.  will be pulled from DB in the future.
function Post() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>

            <Card className="text-center" Card border="primary" style={{ justifyContent: 'center', width: '18rem' }}>
                <p>No post at this time</p>
                </Card>
        </div>
    );

}
export default Post;