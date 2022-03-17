// import {Link} from "react-router-dom";
import './App.css';
import React from "react";
import MD from './img/MichaelD.jpg'

function MikeD() {

   return (
      <div>
         <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
         <a href="\" class="navbar-brand">CSC 648 - 03</a>

         <button class="navbar-toggler" 
         type="button" 
         data-bs-toggle="collapse" 
         data-bs-target="navmenu"
         >
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                  <a href="template1" class="nav-link">Team Page</a>
               </li>
               <li class="nav-item">
                  <a href="template2" class="nav-link">template2</a>
               </li>
               <li class="nav-item">
                  <a href="template3" class="nav-link">template3</a>
               </li>
            </ul>
         </div>
      </div>
   </nav>

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
                     <h1 class="page-header mt-4 mb-4" style={{display: 'block', left: '0px', color:'#464666'}}>Michael Davichick</h1>
                     {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                     <img src={MD} alt="Profile" style={{width: '300px', height: '300px', objectFit: 'cover'}} />
                     {/* <!-- Edit Your Role--> */}
                     <h3 class="mt-4 mb-4" style={{color: '#464666' }}>Team 6 Backend Lead</h3>
                  </div>
               </div>
               <div class="col-sm-8 bg-white rounded-right">
                  <h3 class="mt-3 text-center" style={{color: '#464666' }}>Information</h3>
                  <hr style={{width: '100%'}}></hr>
                  <div class="row">
                     <div class="row ml-2 mr-2 mb-4">
                        <div class="col-sm-12">
                           {/* <!-- Fill Out Bio--> */}
                           <p style={{fontSize: '20px'}}>Hello World, my name's Michael Davichick and I'm a Senior in my last year here at SFSU. I'm passionate about techonology and learning with the hope to pursue a career in software development following graduation.</p>
                        </div>

                        <div class="col-sm-6" style={{fontSize: '20px'}}>
                           <p class="font-weight-bold" >Email:</p>
                           <p class="text-muted">Mdavichick@mail.sfsu.edu</p>
                        </div>

                        <div class="col-sm-6" style={{fontSize: '20px'}}>
                           <p class="font-weight-bold" >Discord:</p>
                           <p class="text-muted">Rockingproof#4972</p>
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

 export default MikeD;