
import './App.css';
import React, { useState } from "react";
import Profile from "./Profile";
import Post from "./Post";
import Messages from './Messages';
import Header from "./Header";
import Footer from "./Footer";
import { Tabs, Tab, Card, Button, Table, Container } from "react-bootstrap";
// BR
// will display the three componets on the dashboard.
function Dashboard() {
     
    return (
        <div>
            <Header />
            <ControlledTabs />
            <Footer />
        </div>
    );
}
 // when going to dashboard the profile tab will be active
function ControlledTabs() {
    const [key, setKey] = useState('Profile'); 
    //  contains the componets for what is in the profile, post, and messages tabs.
    return (
        <Container fluid='lg'>   
            <Tabs

                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                
                <Tab eventKey="Profile" title="Profile">
                    <Profile />   
                </Tab>
                <Tab eventKey="Post" title="Post">
                    <Post />
                </Tab>
                <Tab eventKey="Messages" title="Messages">
                    <Messages />
                </Tab>
            </Tabs>
        </Container>

    );
}


export default Dashboard;