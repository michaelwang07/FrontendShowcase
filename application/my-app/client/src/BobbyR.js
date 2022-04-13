
/********************************************************************
* Project: SFSU Softeare Engineering Project CSC648-848, Spring 2022
* Author(s):  Bobby Roots
* Team: 06 
*
* File: BobbyR.js
*
* Description: This file allows the team member to tell a little 
* about themselves. 
*
*
********************************************************************/

import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import bobby from './img/BobbyR.jpg';
import Header from "./Header";

function BobbyR() {

   return (
      <div>
   <Header/>

   {/* <!-- Showcase --> */}
   <section class="bg-dark text-light p-1 text-center">
      <div class="containter">

      </div>
   </section>
   
   {/* <!-- Profile --> */}
   <div class="containers">
      <div class="row b-flex justify-content-center">
         <div class="col-md-10 mt-5 pt-5">
            <div class="row z-depth-3">
               <div class="col-sm-4 bg-white round-left">
                  <div class="card-block text-center text-white">
                     {/* <!-- Edit Name --> */}
                     <h1 class="page-header mt-4 mb-4" style={{display: 'block', left: '0px', color:'#464666'}}>Bobby Roots</h1>
                     {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                     <img src={bobby} alt="Profile" style={{width: '300px', height: '300px', objectFit: 'cover'}} />
                     {/* <!-- Edit Your Role--> */}
                     <h3 class="mt-4 mb-4" style={{color: '#464666' }}>Team 6 Lead</h3>
                  </div>
               </div>
               <div class="col-sm-8 bg-white rounded-right">
                  <h3 class="mt-3 text-center" style={{color: '#464666' }}>Information</h3>
                  <hr style={{width: '100%'}}></hr>
                  <div class="row">
                     <div class="row ml-2 mr-2 mb-4">
                        <div class="col-sm-12">
                           {/* <!-- Fill Out Bio--> */}
                           <p style={{fontSize: '20px'}}>Hello, I am currently in my senior year and look forward to earning my degree.</p>
                        </div>

                        <div class="col-sm-6" style={{fontSize: '20px'}}>
                           <p class="font-weight-bold" >Email:</p>
                           <p class="text-muted">broots@mail.sfsu.edu</p>
                        </div>

                        <div class="col-sm-6" style={{fontSize: '20px'}}>
                           <p class="font-weight-bold" >Discord:</p>
                           <p class="text-muted">Bobby#0030</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
      </div>
   );
 }

 export default BobbyR;