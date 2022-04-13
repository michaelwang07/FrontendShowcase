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
// BR
// what will be displayed for the messages tab.  in future will be pulled from DB
function Messages() {
    return (
<Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Post Title</th>
                                <th>Buyer Name</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Book</td>
                                <td>Lisa</td>
                                <td>111-111-1111</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Chair</td>
                                <td>Alex</td>
                                <td>222-222-2222</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Book</td>
                                <td>Samatha</td>
                                <td>333-333-3333</td>
                            </tr>
                        </tbody>
                    </Table>
    );

}
export default Messages;