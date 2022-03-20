/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bobby from './img/BobbyR.jpg';
import MA from './img/MichaelA.jpg'
import MD from './img/MichaelD.jpg'
import MW from './img/MichaelW.jpg'
import william from './img/William.jpg'
import temp from './img/silhouette.jpg'

function Teampage() {
   return (
   <div>
         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
               <a href="/" className="navbar-brand">CSC 648 - 03</a>

               <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="navmenu"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="navmenu">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <Link to = '/' className="nav-link">Home Page</Link>
                     </li>
                     <li className="nav-item">
                        <Link to = '/team' className="nav-link">Team Page</Link>
                     </li>
                     <li className="nav-item">
                        <a href="template3" className="nav-link">template3</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

         {/* <!-- Showcase --> */}
         <section className="bg-dark text-light p-1 text-center">
            <div className="containter">

            </div>
         </section>

         {/* <!-- Team Members --> */}
         <section id="members" className="p-5 bg-secondary" >
         <div className="container">
            <h3 className="text-center text-white mb-5" >
            Software Engineering class SFSU
            <br />Fall, 2022
            <br />Section 03
            <br />Team 6
            </h3>
               {/* <!--<p className="lead text-center text-white mb-5"> */}
               {/* We have a well rounded team with members from a varitey of diverse backgrounds </p>--> */}
               <div className="row g-4">
                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- BobbyR--><!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <Link to = '/team/BobbyR'>
                              <img
                                 src={bobby} className="rounded-circle mb-3"
                                 alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           </Link>
                           <Link to = '/team/BobbyR'>
                              <h5 className="card-title mb-3">Bobby Roots</h5>
                           </Link>
                           {/* <!-- Edit Your Role--> */}
                           <p className="card-text">
                              Team Lead
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- MikeD --><!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <Link to = '/team/MikeD'>
                              <img
                                 src={MD} className="rounded-circle mb-3"
                                 alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           </Link>
                           <Link to = '/team/MikeD'>
                              <h5 className="card-title mb-3" style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>Michael Davichick</h5>
                           </Link>
                           <p className="card-text">
                              Backend Lead
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- WilliamR --> */}
                           {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <Link to = '/team/WilliamR'>
                              <img
                                 src={william} className="rounded-circle mb-3"
                                 alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           </Link>
                           <Link to = '/team/WilliamR'>
                              <h5 className="card-title mb-3">William Rattan</h5>
                           </Link>
                           <p className="card-text">
                              Backend Member
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- member 4 --> */}
                           {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <Link to = '/team/MichaelW'>
                              <img
                                 src={MW} className="rounded-circle mb-3"
                                 alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           </Link>
                           <Link to = '/team/MichaelW'>
                              <h5 className="card-title mb-3">Michael Wang</h5>
                           </Link>
                           <p className="card-text">
                              Frontend lead
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- MichaelA --> */}
                           {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <Link to = '/team/MichaelA'>
                              <img
                                 src={MA} className="rounded-circle mb-3"
                                 alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           </Link>
                           <Link to = '/team/MichaelA'>
                              <h5 className="card-title mb-3">Michael Almeda</h5>
                           </Link>
                           <p className="card-text">
                              Github Lead
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-2">
                     <div className="card bg-light">
                        <div className="card-body text-center">
                           {/* <!-- member 6 --> */}
                           {/* <!-- Upload profile image to folder M0 change scr="picture_name.jpg" --> */}
                           <img
                              src={temp} className="rounded-circle mb-3"
                              alt="Profile" style={{width:'100px', height:'100px', objectFit: 'cover'}} />
                           <a href="">
                              <h5 className="card-title mb-3">member 6</h5>
                           </a>
                           <p className="card-text">
                              Open Slot
                           </p>
                           <a href="#"><i className="bi bi-github"></i></a>
                           <a href="#"><i className="bi bi-facebook"></i></a>
                           <a href="#"><i className="bi bi-linkedin"></i></a>
                           <a href="#"><i className="bi bi-instagram"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */}
   </div>
   );
 }

 export default Teampage;