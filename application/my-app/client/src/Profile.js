/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Michael Almeda
* Team: 06 
*
* File: Profile.js
*
* Description: This file allows the user to view their own information
* such as User Name, Number of Post, and date registered.
*
*
********************************************************************/

import './App.css';
import { Tabs, Tab, Card, Button, Table, Container } from "react-bootstrap";
// BR 
// the users information after regerstering.  will be pulled from DB in the future.
function Profile() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>

            <Card className="text-center" Card border="primary" style={{ justifyContent: 'center', width: '18rem' }}>
                <Button variant="User Name">User Name</Button>
                <Button variant="Number of Posts">Number of Posts</Button>
                <Button variant="Succesful Sales">Succesful Sales</Button>
                <Button variant="purchases">Purchases</Button>
                <Button variant="Date Registered">Date Registered</Button>
            </Card>
        </div>
    );

}
export default Profile;